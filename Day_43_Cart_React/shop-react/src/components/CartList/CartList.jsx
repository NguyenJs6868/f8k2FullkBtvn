// import React from 'react'

import { useEffect } from 'react';
import { useSelector } from '../../core/hook';
import ItemRow from '../ItemRow';
import HttpClient from '../../configs/client';
const client = new HttpClient();

function CartList() {
	const { cart } = useSelector();
	console.log(cart);

	// useEffect(() => {
	// }, []);
	function handlePay() {
		const apiKeyLocal = localStorage.getItem('apiKey');

		if (cart.length > 0) {
			console.log('thanh toasn');
			const body = cart.map(item => {
				// console.log('item :', item);
				// return { ...item, productId: item._id, quantity: item.amount, left: item.quantity };
        return  {
          productId: item._id,
          quantity: item.amount, // Số lượng sản phẩm cần thanh toán
        }
			});

			// console.log('body :', body);

			const resPay = client.post('/orders', body, {}, apiKeyLocal);
      console.log('resPay', resPay);
		}
	}

	return (
		<div className="shop-page-cart-layout">
			<div className="shop-page-cart-layout__table-infor">
				<div className="table-infor-table">
					<div className="table-infor-table__head">
						<span>TÊN SẢN PHẨM</span>
						<span>SỐ LƯỢNG</span>
						<span>CÒN LẠI</span>
						<span>TỔNG TIỀN</span>
					</div>

					<div className="table-infor-table__body">
						{cart.map((item, i) => (
							<ItemRow {...item} key={i} />
						))}
					</div>
				</div>
			</div>
			<div className="shop-page-cart-layout__table-action">
				<button onClick={handlePay} className="btn-pay">
					Thanh toán
				</button>
			</div>
		</div>
	);
}

export default CartList;
// ban đầu check arr lengh > 0
