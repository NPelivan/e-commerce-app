import React from "react";

export default function CartItem({ item, value }) {
	const { id, name, price, total, count } = item;
	const { increment, decrement, removeItem } = value;
	return (
		<div>
			<span>Product: {name}</span>
			<span>Price: {price}EUR</span>
			<div>
				<button onClick={() => decrement(id)}>-</button>
				<span>{count}</span>
				<button onClick={() => increment(id)}>+</button>
			</div>
			<button onClick={() => removeItem(id)}>Remove Item</button>
			<strong>Item total: {total}EUR</strong>
		</div>
	);
}
