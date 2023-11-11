// import React from 'react'

function ProductItem({item}) {

  // console.log('_id, name, price, image, quantity', _id, name, price, image, quantity);
		return (
      <>
        <div className="product-item">

          <div className="product-item__img">
            <img src={item.image} alt="" />
          </div>

          <div className="product-item__infor">
            <div className="product-item__infor-name">{item.name}</div>
            <div className="product-item__infor-price">{item.price}$</div>
            <button className="product-item__btn">Add to cart!</button>
          </div>

        </div>
      </>
		)
}


export default ProductItem;