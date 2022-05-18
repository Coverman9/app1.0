import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Messages/Messages";



const Dialogs = (props) => {
    console.log(props)
    let dialogsElements = props.chatHere.dialogsData.map(
        d => <DialogItem name={d.name} id={d.id} img={d.img} />)

    let messagesElements = props.chatHere.messagesData.map(
        m => <Message message={m.message} />
    )
    let newMessageElement = React.createRef();

    let addMessage = () => {
       props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.messageChange(text);
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