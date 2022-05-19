import React from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/chat-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
   
    return (
        <StoreContext.Consumer>
            { (store) => {
                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let onMessageChange = (text) => {
                        let action = updateMessageActionCreator(text)
                        store.dispatch(action);
                    }
            return <Dialogs messageChange={onMessageChange}
                addMessage={addMessage}
                chatHere={state.chatHere}
                newMessageText={state.chatHere.newMessageText} />
                }
            }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;