// import React from 'react'
import Login from './Login';
import ProductList from '../components/ProductList/ProductList';
import CartList from '../components/CartList/CartList';

 function Shop() {
    return (
        <frameElement>
          <div className="shop-page">
            <div className="shop-page-container container">
              <div className="shop-page-wrap">
              <ProductList />
              <CartList />
              </div>
          </div>
          <Login />
        </div>
      </frameElement>
    )
}


export default Shop;