import React from 'react';

const Item = props => {
	const removeItem = (item) =>{
		console.log(props.cart);
		const newCart = props.cart.filter(product=> product.id !== props.id)
		console.log("item id is", item.id)
		props.setCart(newCart);
	};
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
