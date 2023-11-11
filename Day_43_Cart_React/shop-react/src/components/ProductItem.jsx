// import React from 'react'

import { useDispatch } from '../core/hook';

function ProductItem({ item }) {
	const dispatch = useDispatch();

	function handleAddCart() {
		dispatch({
			type: 'add/cart',
			payload: { ...item, amount: 1 }
		});
	}

	return (
		<>
			<div className="product-item">
				<div className="product-item__img">
					<img src={item.image} alt="" />
				</div>

				<div className="product-item__infor">
					<div className="product-item__infor-name">{item.name}</div>
					<div className="product-item__infor-price">
						{item.price}$
					</div>
					<button
						onClick={handleAddCart}
						className="product-item__btn"
					>
						Add to cart!
					</button>
				</div>
			</div>
		</>
	);
}

export default ProductItem;
