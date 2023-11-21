// import { useState } from 'react'

import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import Error from "./pages/Error";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="shop">
        <div className="container">
          <Header />
          <div className="shop-pages">
            <Routes>
              <Route index element={<Navigate to="/product-list" replace />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ProductList />} />
            </Routes>
          </div>

          <ToastContainer />
        </div>

      </div>
    </>
  )

}

export default App

/*
Navigate to="/product-list" replace  vào / rỗng tự chuyển hướng về link nào đó
*/

{/* <Todo />; */}
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'