import React from "react";
import "./Users.css"

let Users = (props) => {
    if (props.users.lenght === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg',
                followed: true,
                fullName: 'Aibek',
                status: 'ya aibek',
                location: { city: 'Osh', country: 'kg' }
            },
            {
                id: 2,
                photoUrl: 'https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg',
                followed: true,
                fullName: 'Maksat',
                status: 'ya krutoi bala',
                location: {
                    city: 'Batken',
                    country: 'kg'
                }
            },
            {
                id: 3,
                photoUrl: 'https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg',
                followed: false,
                fullName: 'Bakyt',
                status: 'ya loh',
                location: { city: 'Naryn', country: 'kg' }
            }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className='userPhoto' />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> :
                            <button onClick={() => (props.follow(u.id))}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;