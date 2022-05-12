import React from "react";
import "./reviews.css";
import Comment from "./comment"



const Reviews = (props) => {
    let Comments = props.Reviews.commentsData.map(
        c => <Comment comment={c.comment} />)

    let newCommentElement = React.createRef();
        
    let addComment1 = () => {
        props.addComment();
    }
    let onPostChange = () => {
        let text = newCommentElement.current.value;
        props.updateComment(text);
    }

    return (
        <div className="reviewsBlock">
            <h3>Reviews</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newCommentElement}
                     value={props.newPostText}/>
                </div>
                <div>
                    <button className="addCommentButton" 
                    onClick={addComment1}>Add comment</button>
                </div>
            </div>
            <div>
                {Comments}
            </div>
        </div>
    )
}

export default Reviews;