import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Messages/Messages";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/state";



const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map(
        d => <DialogItem name={d.name} id={d.id} img={d.img} />)

    let messagesElements = props.state.messagesData.map(
        m => <Message message={m.message} />
    )
    let newMessageElement = React.createRef();

    let addMessage = () => {
       props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageActionCreator(text));
    }
    
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