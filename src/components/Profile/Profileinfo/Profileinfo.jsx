import React from 'react';
import s from './Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileDiv}>
            <div>
                <img alt=' ' className={s.mainImg}
                    src='https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80'/>
            </div>
            <div className={s.descriptionBlock}>
                <img alt=' ' src={props.profile.photos.small} />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;