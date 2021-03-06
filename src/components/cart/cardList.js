import React from "react";
import CartItem from "./cartItem";

export default function CardList({ value }) {
	const { cart } = value;
	return (
		<div>
			{cart.map((item) => {
				return <CartItem key={item.id} item={item} value={value} />;
			})}
		</div>
	);
}
