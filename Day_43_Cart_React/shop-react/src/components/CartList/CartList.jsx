// import React from 'react'

import ItemRow from "../ItemRow";

 function CartList() {
    return (
        <frameElement>
            <div className="shop-page-cart-layout">
                <div className="shop-page-cart-layout__table-infor">

                  <div className='table-infor-table'>
                    <div className='table-infor-table__head'>
                      <span>TÊN SẢN PHẨM</span>
                      <span>SỐ LƯỢNG</span>
                      <span>CÒN LẠI</span>
                      <span>TỔNG TIỀN</span>
                    </div>

                    <div className='table-infor-table__body'>
                      <ItemRow />
                      <ItemRow />
                      <ItemRow />
                      <ItemRow />
                    </div>

                  </div>

                </div>

                <div className="shop-page-cart-layout__table-action">
                  <button className='btn-pay'>Thanh toán</button>
                </div>


              </div>
        </frameElement>
    )
}


export default CartList;