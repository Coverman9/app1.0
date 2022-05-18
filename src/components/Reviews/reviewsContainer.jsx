import React from "react";
import { addCommentActionCreator, updateCommentActionCreator } from "../../redux/reviews-reducer";
import Reviews from "./reviews";

const ReviewsContainer = (props) => {
    let state = props.store.getState();

    let onAddComment = () => {
        props.store.dispatch(addCommentActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateCommentActionCreator(text)
        props.store.dispatch(action);
    }
    return (
       <Reviews updateComment = {onPostChange} 
                addComment = {onAddComment}
                reviews = {state.reviews}
                newPostText = {state.reviews.newPostText}/>)
}

export default ReviewsContainer;