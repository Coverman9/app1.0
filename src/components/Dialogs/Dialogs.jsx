import React from "react";
import { NavLink } from "react-router-dom";
import './Dialogs.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className="dialog">
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className="dialog">{props.message}</div>
}
const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogItems">
                <DialogItem name="Nurs" id="1" />
                <DialogItem name="Dimas" id="2" />
                <DialogItem name="Bokyt" id="3" />
            </div>
            <div className="messages">
                <Message message="salam"/>
                <Message message="Hi"/>
                <Message message="How are you?"/>
            </div>
        </div>
    )
}

export default Dialogs;