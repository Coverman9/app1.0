import React from "react";
import { addCommentActionCreator, updateCommentActionCreator } from "../../redux/reviews-reducer";
import StoreContext from "../../StoreContext";
import Reviews from "./reviews";

const ReviewsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                    let state = store.getState();

                    let onAddComment = () => {
                        store.dispatch(addCommentActionCreator());
                    }
                    let onPostChange = (text) => {
                        let action = updateCommentActionCreator(text)
                        store.dispatch(action);
                    }

                    return <Reviews updateComment={onPostChange}
                        addComment={onAddComment}
                        reviews={state.reviews}
                        newPostText={state.newPostText} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default ReviewsContainer;