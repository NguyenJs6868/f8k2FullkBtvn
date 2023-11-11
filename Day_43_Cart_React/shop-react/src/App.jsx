import './App.scss'
import React from 'react';
// import Loading from './components/Loading/Loading';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shop from './pages/Shop';
import Login from './pages/Login';
import { useState } from 'react';


export const AppContext = React.createContext();

function App() {
  const [ isLogin, setIsLogin ] = useState(false);

  const handLogin = (value) => {
    console.log('handLogin', value);

    setIsLogin(value);

    console.log('isLogin: ', isLogin);
  };



  return (
    <>
      {
        isLogin ? <Shop /> : <Login onLogin={handLogin} />
      }


    </>
  )
}

export default App
