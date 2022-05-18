import React from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/chat-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    console.log(props)
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        let action = updateMessageActionCreator(text)
        props.store.dispatch(action);
    }
    return (
       <Dialogs messageChange = {onMessageChange} 
                addMessage = {addMessage}
                chatHere = {state.chatHere}
                newMessageText = {state.chatHere.newMessageText}/>)
}

export default DialogsContainer;