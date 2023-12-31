// import React from 'react'
import ProductItem from '../ProductItem';

function ProductList({ productList }) {
	return (
		<>
			<div className="shop-page-product-layout">
				<div className="shop-page-products-layout__title">
					<span>Welcome to Shop!</span>
				</div>

				<div className="shop-page-products-layout__products-grid">
					{productList &&
						productList.map(item => {
							return <ProductItem key={item._id} item={item} />;
						})}
				</div>
			</div>
		</>
	);
}

export default ProductList;
