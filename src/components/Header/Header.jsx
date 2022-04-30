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
					<nav class="main-nav">
						<NavLink to="/home" className = { navData => navData.isActive ? 'active' : 'main-nav' }>Home</NavLink>
						<NavLink to="/dialogs" className = { navData => navData.isActive ? 'active' : 'main-nav' }>Chat here</NavLink>
						<NavLink to="/aboutme" className = { navData => navData.isActive ? 'active' : 'main-nav' }>About Me</NavLink>
						<a >Services</a>
						<a >My works</a>
						<a >Contact me</a>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header;