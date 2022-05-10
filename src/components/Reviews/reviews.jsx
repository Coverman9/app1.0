import React from "react";
import "./reviews.css";
import Comment from "./comment"





const Reviews = (props) => {

    let Comments = props.state.commentsData.map(
        c => <Comment comment={c.comment} />)

    let addComment = () => {
        let text = newComment.current.value;
        props.addComments(text);
    }

    let newComment = React.createRef();


    return (
        <div className="reviewsBlock">
            <h3>Reviews</h3>
            <div>
                <div>
                    <textarea ref={newComment}></textarea>
                </div>
                <div>
                    <button className="addCommentButton" onClick={addComment}>Add comment</button>
                </div>
            </div>
            <div>
                {Comments}
            </div>
        </div>
    )
}

export default Reviews;