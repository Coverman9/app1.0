import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


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

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
             <div>
                 <Field component="textarea" name="newPostElement" placeholder="New Post" />
        
                </div>
                <div>
                    <button >Add post</button>
                </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "addNewPostForm"})(AddPostForm)

export default MyPosts;