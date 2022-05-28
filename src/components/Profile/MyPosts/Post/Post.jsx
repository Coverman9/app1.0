import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  console.log(props)
  return (
    <div className={s.item}>
      <img src='https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;