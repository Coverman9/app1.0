import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = (props) => {
	console.log(props);
	return (
		<div>
			<header className="header">
				<div className="container">
					<a href=" " className="logo">
						<img src="images/" alt="" />
					</a>
					<nav className="navbar">
						<NavLink to="/home">Home</NavLink>
						<NavLink to="/dialogs">Chat here</NavLink>
						<NavLink to="/aboutme">About Me</NavLink>
						<NavLink to="/reviews">Reviews</NavLink>
						<NavLink to="/profile" >Profile</NavLink>
						<NavLink to="/users" >Users</NavLink>
						<div className="loginBlock">
							{props.isAuth
								? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
								: <NavLink to={'/login'}>Login</NavLink>}
						</div>

					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header;