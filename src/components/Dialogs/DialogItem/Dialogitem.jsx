import React from "react";
import './DialogItem.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className="dialog">
        <NavLink to={path}><div className="imgContainer"><img src = {props.img}/><span className="span">{props.name}</span></div></NavLink>
    </div>
}

export default DialogItem;