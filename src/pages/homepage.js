import React, { Component } from "react";
import { ProductConsumer } from "../components/context";
import Product from "../components/product";

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<h1>Products</h1>
				<ProductConsumer>
					{(value) => {
						return value.products.map((product) => {
							return <Product key={product.id} product={product} />;
						});
					}}
				</ProductConsumer>
			</div>
		);
	}
}
