import React, { Component } from "react";
import { ProductConsumer } from "./context";
import PropTypes from "prop-types";

export default class Product extends Component {
	render() {
		const { id, name, price, inCart } = this.props.product;
		return (
			<div>
				<ProductConsumer>
					{(value) => (
						<div>
							<span>Name: {name}</span>
							<span>Price: {price}EUR</span>
							<button
								disabled={inCart ? true : false}
								onClick={() => {
									debugger;
									value.addToCart(id);
								}}
							>
								{inCart ? <p disabled>In cart</p> : <p>Add to cart</p>}
							</button>
						</div>
					)}
				</ProductConsumer>
			</div>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
	}).isRequired,
};
