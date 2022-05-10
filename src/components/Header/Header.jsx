import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
	return (
		<div>
			<header className="header">
				<div className="container">
					<a href="" class="logo">
						<img src="images/" alt="" />
					</a>
					<nav class="navbar">
						<NavLink to="/home">Home</NavLink>
						<NavLink to="/dialogs">Chat here</NavLink>
						<NavLink to="/aboutme">About Me</NavLink>
						<NavLink to="/reviews">Reviews</NavLink>
						<a >My works</a>
						<a >Contact me</a>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header;