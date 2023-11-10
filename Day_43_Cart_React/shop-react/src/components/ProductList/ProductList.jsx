// import React from 'react'
import ProductItem from "../ProductItem";

 function ProductList() {
    return (
        <frameElement>
          <div className="shop-page-product-layout">
            <div className="shop-page-products-layout__title">
              <span>Welcome to Shop!</span>
            </div>

            <div className="shop-page-products-layout__products-grid">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />

            </div>
          </div>
        </frameElement>
    )
}


export default ProductList;