import React from "react";
import "./reviews.css";
import Comment from "./comment"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reviews = (props) => {
    let Comments = props.commentsData.map(
        c => <Comment comment={c.comment} />)

    let newCommentElement = React.createRef();

    let onAddComment = () => {
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
                        value={props.newPostText} />
                </div>
                <div>
                    <Button variant="info" style={{paddingRight:100}} className="addCommentButton "
                        onClick={onAddComment}>Add comment</Button>
                </div>
            </div>
            <div>
                {Comments}
            </div>
        </div>
    )
}

export default Reviews;