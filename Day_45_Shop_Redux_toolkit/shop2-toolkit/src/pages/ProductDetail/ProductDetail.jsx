//
// import React from 'react'

import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

function ProductDetail() {
	let { id } = useParams();
	console.log('ProductDetail id :', id);

	return (
		<>
			<div className="product-detail-page">
				<div className="product-detail__img">
					<img
						src="https://fastly.picsum.photos/id/941/200/200.jpg?hmac=kQpV3E7TgV1yMW4b1IDbV6zJqEvKVw9CTK4RkI14kmQ"
						alt="product-1"
					/>
				</div>
				{/*  */}
				<div className="product-detail__infors">
					<div id="infor-product-brand">Unilever</div>
					<div id="infor-product__title">Title</div>
					<div id="infor-product__description">description</div>
					<div id="infor-product__classify">category: Thể thao nước</div>
					<div id="infor-product__price">
							<span>$</span>
							<span>402.012</span>
					</div>
					<div className="infor-product__actions">
						<button id="add-cart">Add to cart</button>
						<button id="go-home">Go home</button>
					</div>
				</div>
				{/*  */}
			</div>
		</>
	);
}

export default ProductDetail;
