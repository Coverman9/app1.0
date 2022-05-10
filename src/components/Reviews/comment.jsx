import React from "react";
import { NavLink } from "react-router-dom";
import "./comment.css" 


const Comment = (props) => {
    let path = "/reviews/" + props.id;
    return <div className="commentSection">
        <NavLink to = {path}> <span className="span">{props.comment}</span> </NavLink>
    </div>
}

export default Comment;