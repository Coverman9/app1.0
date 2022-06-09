import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Messages/Messages";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";




const Dialogs = (props) => {

    let state = props.chatHere;
    console.log(state)
    let dialogsElements = state.dialogsData.map
        (d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />)

    let messagesElements = state.messagesData.map
        (m => <Message message={m.message} key={m.id} />)

    let addMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Navigate to={"/login"} />

    return (
        <div className="dialogs">
            <div className="dialogItems">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
               
            </div>
            <div>
                <button className="addMessageButton">Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;