import React, { Component } from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		cart: [],
		cartTotal: 0,
	};

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach((item) => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});
		this.setState(() => {
			return { products: tempProducts };
		});
	};

	getItem = (id) => {
		const product = this.state.products.find((item) => item.id === id);
		return product;
	};

	addToCart = (id) => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		this.setState(() => {
			return { products: tempProducts, cart: [...this.state.cart, product] };
		});
	};

	increment = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find((item) => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];

		product.count = product.count + 1;
		product.total = product.count * product.price;

		this.setState(() => {
			return {
				cart: [...tempCart],
			};
		});
	};

	decrement = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find((item) => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];

		product.count = product.count - 1;

		if (product.count === 0) {
			this.removeItem(id);
		} else {
			product.total = product.count * product.price;
			this.setState(() => {
				return {
					cart: [...tempCart],
				};
			});
		}
	};

	removeItem = (id) => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];

		tempCart = tempCart.filter((item) => item.id !== id);

		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		this.setState(() => {
			return {
				cart: [...tempCart],
				products: [...tempProducts],
			};
		});
	};

	clearCart = () => {
		this.setState(
			() => {
				return {
					cart: [],
				};
			},
			() => {
				this.setProducts();
			}
		);
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					addToCart: this.addToCart,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
