import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
	const { cartTotalTotal, clearCart } = value;
	return (
		<div>
			<Link to="/">
				<button onClick={() => clearCart()}>Clear cart</button>
			</Link>

			<span>Total: {cartTotalTotal}EUR</span>
		</div>
	);
}
