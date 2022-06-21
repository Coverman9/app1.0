import React from "react";
import Paginator from "../common/Paginator/Paginator";
import "./Users.css";
import User from "./User"



let Users = ({ users, currentPage, totalUserCount, pageSize, onPageChanged, ...props }) => {


    console.log(props);

    return <div className="usersPage">

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalUserCount={totalUserCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)
            }
        </div>
    </div>
}

export default Users;