import React, { Component } from "react";
import { ProductConsumer } from "../components/context";
import Product from "../components/product";
import Navbar from "../components/navbar";

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<h1>Products</h1>
				<Navbar />
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
