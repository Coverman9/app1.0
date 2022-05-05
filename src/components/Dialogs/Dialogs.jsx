import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Messages/Messages";



const Dialogs = (props) => {

let dialogsData = [
    {id:1 , name: 'Nurs'},
    {id:2 , name: 'Dimas'},
    {id:3 , name: 'Bokyt'}
]

let messagesData = [
    {id:1 , message: 'salam'},
    {id:2 , message: 'slm'},
    {id:3 , message: 'hi'}
]

let dialogsElements = dialogsData.map ( 
    d => <DialogItem name={d.name} id={d.id} />)

let messagesElements = messagesData.map (
    m =><Message message={m.message}/>
) 

    return (
        <div className="dialogs">
            <div className="dialogItems">
                {dialogsElements}
            </div>    
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;