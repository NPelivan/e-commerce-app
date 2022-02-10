import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<NavLink to="/">
					<h1>Logo</h1>
				</NavLink>

				<NavLink to="/cart">My Cart</NavLink>
			</div>
		);
	}
}
