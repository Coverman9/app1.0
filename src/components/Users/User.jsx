import React from "react";
import { NavLink } from "react-router-dom";
import userimg from "../../assets/images/userimg.png";
import "./Users.css";
import { Button } from 'react-bootstrap';




let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt="surot" src={user.photos.small != null ? user.photos.small : userimg} className='userPhoto' />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <Button variant="secondary" disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</Button>
                        : <Button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</Button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)
}


export default User;