// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Provider from './core/Provider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//
//   </React.StrictMode>,
	<Provider>
		<App />
	</Provider>
)
