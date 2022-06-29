import React from 'react';
import ProfileInfo from './Profileinfo/Profileinfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                saveProfile={props.saveProfile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;