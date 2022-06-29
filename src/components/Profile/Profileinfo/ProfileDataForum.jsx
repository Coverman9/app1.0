import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"
import s from './Profile.module.css';
import "../../Login/Login.css"


const ProfileDataForum = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><button>save</button></div>
        {props.error && <div className="formSummaryError">
            {props.error}
        </div>
        }
        <div>
            <b>Full name: </b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job: </b>
            {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>

        <div>
            <b>My professional skills: </b> {props.profile.lookingForAJobDescription}
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            <b>About me: </b> {props.profile.aboutMe}
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)} </b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataForumReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForum)

export default ProfileDataForumReduxForm;