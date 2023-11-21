/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import CartIcon from '../../components/atoms/CartIcon';

import getProduct from '../../helpers/getProduct';
import { Fragment, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { config } from '../../configs/config';
import queryString from 'query-string';
import { ToastContainer } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
// import notify from "../../helpers/toastify.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import removeAccent from "../../helpers/removeAccent";

import { cartSlice } from '../../redux/slices/cartSlice';
const { addCart } = cartSlice.actions;

import './ProductList.scss';


function ProductList() {
	const [loading, setLoading] = useState(true);
	const [productListData, setProductListData] = useState([]);
	const [pageCount] = useState(0); // setPageCount
	const location = useLocation();

	const paramsRef = useRef({
		limit: config.LIMIT,
		page: 1,
		totalPage: 0
	});

	const totalPageRef = useRef(0);

	const isFirstPage = +paramsRef.current.page === 1;

	const isLastPage = +paramsRef.current.page === totalPageRef.current.length;

	let pageParams = location.search.slice(1).split('&')[0].split('=')[1];

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const newFilter = { ...paramsRef.current, page: pageParams };

		const paramString = queryString.stringify({
			limit: newFilter.limit,
			page: newFilter.page
		});

		getProduct(paramString)
			.then(data => {
				// Gán arr data từ api
				setProductListData(data.listProduct);
				// console.log('getProduct', data.listProduct);
				// Gán tổng số bản ghi từ api
				paramsRef.current = { ...newFilter, totalPage: data.totalPage };

				if (
					data.listProduct.length === 0 ||
					!location.search.startsWith('?page=') ||
					!location.pathname.startsWith('/products') ||
					isNaN(+pageParams)
				) {
					navigate('/products?page=1');
				}

				setTimeout(() => {
					setLoading(false);
				}, 1000);
			})
			.catch(() => {
				toast('Error fetching product data:', 'error');
				setLoading(false);
			});
	}, [location.search]);

	const handlePageClick = data => {
		console.log('data :', data);
	};

	const handleAddToCart = (item) => {
    dispatch(addCart({...item}));
    toast(`Đã thêm ${item.name} vào giỏ hàng`, "thành công");
  };

	const handleClickImg = item => {
		localStorage.setItem('detail', JSON.stringify(item));
	};

	return (
		<>
			<div className="product-list-page">
				<div className="product-list__title">PRODUCTS</div>

				<div className="product-list__category">
					{/*  */}
					{productListData.map((item, index) => {
						const nameEle = removeAccent(item.name);
						return (
							<Fragment key={index}>
								<div className="product-item">
									<NavLink
										to={`/product-detail/name~${nameEle}${item._id}`}
										className="product-item__img"
										onClick={() => {
											handleClickImg(item);
										}}
									>
										<img src={item.image} />
									</NavLink>

									<div className="product-item__name">
										{item.name}
									</div>

									<div className="product-item__price">
										<span>$</span>
										<span>
											{item.price.toLocaleString()}
										</span>
									</div>

									<div className="product-item__action btn"    onClick={() => handleAddToCart(item)}>
										ADD CART <CartIcon />
									</div>
								</div>
								;
							</Fragment>
						);
					})}
				</div>

				<ReactPaginate
					breakLabel="..."
					nextLabel={isLastPage ? null : 'Next >'}
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel={isFirstPage ? null : '< Previous'}
					renderOnZeroPageCount={null}
					containerClassName="pagination"
					pageLinkClassName="page-num"
					previousLinkClassName="page-num"
					nextLinkClassName="page-num"
					activeLinkClassName="active"
					initialPage={+pageParams - 1}
				/>
			</div>
			{loading && <Loading />}
			<ToastContainer />
		</>
	);
}

export default ProductList;
