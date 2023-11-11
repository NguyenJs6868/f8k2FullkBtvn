// import React from 'react'

function ItemRow({ name, quantity, price, amount }) {
	return (
		<>
			<div className="item-row border-l border-r border-b">
				<span>{name}</span>
				<span>{amount}</span>
				<span>{quantity}</span>
				<span>{price.toLocaleString('vi-VN', { currency: 'VND' })} VND</span>
			</div>
		</>
	);
}

export default ItemRow;
