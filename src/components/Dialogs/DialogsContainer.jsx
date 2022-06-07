import { connect } from "react-redux";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/chat-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";




let mapStateToProps = (state) => {
    console.log(state)

    return {
        chatHere: state.chatHere,
        newMessageText: state.chatHere.newMessageText,
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);