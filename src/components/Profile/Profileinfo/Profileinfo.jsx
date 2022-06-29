import React from 'react';
import s from './Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userimg from "../../../assets/images/userimg.png"
import { useState } from 'react';
import ProfileDataForum from './ProfileDataForum';



const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={s.profileDiv}>
            <div>
                <img alt=' ' className={s.mainImg}
                    src='https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80' />
            </div>
            <div className={s.descriptionBlock}>
                <img alt=' ' src={props.profile.photos.large || userimg} className={s.mainPhoto} />
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

                {editMode
                    ? <ProfileDataForum initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
        <div>
            <b>Full name: </b> {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job: </b> {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b> {props.profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <b>About me: </b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;