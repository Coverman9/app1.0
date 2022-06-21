import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {
    let postsElements =
        [...props.posts].reverse().map( p => <Post message={p.message} likesCount={p.likesCount}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostElement);
    }

    

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
               <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
             <div>
                 <Field component={Textarea} name="newPostElement" placeholder="New Post"
                 validate={[required, maxLength10]} />
        
                </div>
                <div>
                    <button >Add post</button>
                </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "addNewPostForm"})(AddPostForm)

export default MyPosts;