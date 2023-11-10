// import React from 'react'

function ProductItem() {
  const img = 'https://cdn.tgdd.vn/Products/Images/2282/148787/bhx/thung-24-lon-bia-heineken-sleek-330ml-202003250707536087.JPG';

		return (
				<frameElement>
					<div className="product-item">

            <div className="product-item__img">
              <img src={img} alt="" />
            </div>

            <div className="product-item__infor">
              <div className="product-item__infor-name">Product name</div>
              <div className="product-item__infor-price">10000$</div>
              <button className="product-item__btn">Add to cart!</button>
            </div>
          </div>
				</frameElement>
		)
}


export default ProductItem;