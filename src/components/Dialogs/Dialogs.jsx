import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Messages/Messages";
import { Navigate } from "react-router-dom";



const Dialogs = (props) => {

    let state = props.chatHere;
    console.log(state)
    let dialogsElements = state.dialogsData.map
    (d => <DialogItem name={d.name} key = {d.id} id={d.id} img={d.img} />)

    let messagesElements = state.messagesData.map
    (m => <Message message={m.message} key = {m.id} />)
    let newMessageElement = React.createRef();

    let addMessage = () => {
       props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }
    
    if (!props.isAuth) return <Navigate to = "/login" />

   

    return (
        <div className="dialogs">
            <div className="dialogItems">
                {dialogsElements}   
            </div>
            <div className="messages">
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement}
                    value={props.newMessageText}/>
            </div>
            <div>
                    <button className="addMessageButton"
                     onClick={addMessage}>Add message</button>
                </div>
        </div>
    )
}

export default Dialogs;