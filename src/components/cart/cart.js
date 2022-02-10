import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import CartList from "./cardList";
import CartTotals from "./cartTotal";

export default class Cart extends Component {
	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<ProductConsumer>
					{(value) => {
						const { cart } = value;
						if (cart.length > 0) {
							return (
								<div>
									<h1>Your cart</h1>
									<CartList value={value} />
									<CartTotals value={value} />
									<Link to="/cart/checkout">
										<button>Proceed to Checkout</button>
									</Link>
								</div>
							);
						} else {
							return <div>Your cart is empty</div>;
						}
					}}
				</ProductConsumer>
			</div>
		);
	}
}
