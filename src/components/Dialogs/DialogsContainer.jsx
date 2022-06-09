import { connect } from "react-redux";
import { addMessageActionCreator } from "../../redux/chat-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";




let mapStateToProps = (state) => {

    return {
        chatHere: state.chatHere,
        newMessageText: state.chatHere.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) =>{
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);