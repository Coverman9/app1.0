import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/chat-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
    console.log(state)

    return {
        chatHere: state.chatHere,
        newMessageText: state.chatHere.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () =>{
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateMessageActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;