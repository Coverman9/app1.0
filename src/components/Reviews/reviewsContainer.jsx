import React from "react";
import { connect } from "react-redux";
import { addCommentActionCreator, updateCommentActionCreator } from "../../redux/reviews-reducer";
import Reviews from "./reviews";



let mapStateToProps = (state) => {
    return {
        commentsData: state.reviews.commentsData,
        newPostText: state.reviews.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateComment: (text) => {
            let action = updateCommentActionCreator(text)
            dispatch(action);
        },
        addComment: () =>
            dispatch(addCommentActionCreator())
    }
}

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews)

export default ReviewsContainer;