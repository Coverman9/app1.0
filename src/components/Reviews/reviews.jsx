import React from "react";
import "./reviews.css";
import Comment from "./comment"
import { addComment } from "../../redux/state";



const Reviews = (props) => {
    let Comments = props.Reviews.commentsData.map(
        c => <Comment comment={c.comment} />)

    let newCommentElement = React.createRef();
        
    let addComment1 = () => {
        let text = newCommentElement.current.value;
        addComment(text);
    }

    return (
        <div className="reviewsBlock">
            <h3>Reviews</h3>
            <div>
                <div>
                    <textarea ref={newCommentElement}></textarea>
                </div>
                <div>
                    <button className="addCommentButton" onClick={addComment1}>Add comment</button>
                </div>
            </div>
            <div>
                {Comments}
            </div>
        </div>
    )
}

export default Reviews;