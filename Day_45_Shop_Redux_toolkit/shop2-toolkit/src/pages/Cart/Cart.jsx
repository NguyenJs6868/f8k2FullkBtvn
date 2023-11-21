// import React from 'react'
import { useSelector } from 'react-redux';
import TrashIcon from '../../components/atoms/TrashIcon';
import './Cart.scss';
import { Fragment } from 'react';
import removeAccent from '../../helpers/removeAccent';
import { NavLink } from 'react-router-dom';

function Cart() {
	const cartListLocal = useSelector(state => state.cart.cartListLocal);
	console.log('Cart', cartListLocal);

	return (
		<>
			<div className="cart-page">
				<h1 className="cart-page__title">SHOPPING CART</h1>
				<div className="cart-page__list">
					{/*  */}
					{cartListLocal &&
						cartListLocal.map((item, index) => {
							return (
								<Fragment key={index}>
									<div className="cart-item">
										<div className="cart-item__left">
											<NavLink to={`/detail/name~${removeAccent(item.name)}/${item._id}`} className="cart-item__img">
												<img src={item.image}	alt="image"	/>
											</NavLink>
											<div className="cart-item__controle-amount">
												<button>-</button>
												<span>3</span>
												<button>-</button>
											</div>
										</div>

										<div className="cart-item__right">
											<div id="cart-item__brand">
												{item.brand}
											</div>
											<div
												id="name"
												className="cart-item__title"
											>
												{item.name}
											</div>

											<div className="cart-item__price">
												<span>$</span>
												<span>{item.price}</span>
											</div>

											<div className="cart-item__remaining-amount">
												<span>Còn lại: </span>
												<span>{item.quantity}</span>
											</div>

											<div className="cart-item__sum">
												<span>$</span>
												<span>{item.amount}</span>
												<span className="cart-item__delete-btn">
													<TrashIcon />
												</span>
											</div>
										</div>
									</div>
								</Fragment>
							);
						})
						
					}

					{/*  */}
				</div>
			</div>
		</>
	);
}

export default Cart;
