// import React from 'react'
import ProductList from '../components/ProductList/ProductList';
import CartList from '../components/CartList/CartList';

import { endpoint } from '../configs/config';

import HttpClient from '../configs/client';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from '../core/hook';
const client = new HttpClient();

function Shop() {
	const [productList, setProductList] = useState([]);
	const { cart } = useSelector();

	useEffect(() => {
		const querry = {
			limit: 8
		};
		getProducList(querry);
	}, []);

	const getProducList = async querry => {
		const querryString = new URLSearchParams(querry);

		const apiKeyLocal = localStorage.getItem('apiKey');
		if (apiKeyLocal) {
			const { res, data } = await client.get(
				`${endpoint.products}?${querryString}`,
				{},
				apiKeyLocal
			);
			if (res.ok) {
				setProductList(data.data);
			}
		}
	};

	// console.log('productList', productList);

	return (
		<>
			<div className="shop-page">
				<div className="shop-page-container container">
					<div className="shop-page-wrap">
						<ProductList productList={productList} />
						{cart?.length > 0 && <CartList />}
					</div>
				</div>
			</div>
		</>
	);
}

export default Shop;
