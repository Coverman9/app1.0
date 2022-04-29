import React from "react";
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
						<a href="/home">Home</a>
						<a href="/dialogs">Chat here</a>
						<a href="#">UI kits</a>
						<a href="#">Services</a>
						<a href="#">My works</a>
						<a href="#">Contact me</a>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header;