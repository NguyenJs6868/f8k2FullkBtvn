// import React from 'react'

import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div>
			<div className="logo">
			<Link to={'/product-list'}>Logo</Link>
			</div>
			<div className="cart">
				<Link to={'/cart'}>Cart</Link>
			</div>
		</div>
	);
}

export default Sidebar;
