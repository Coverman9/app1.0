import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Messages/Messages";



const Dialogs = (props) => {



let dialogsElements = props.state.dialogsData.map ( 
    d => <DialogItem name={d.name} id={d.id} img={d.img} />)

let messagesElements = props.state.messagesData.map (
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