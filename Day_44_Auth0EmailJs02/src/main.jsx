import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

import { ToastContainer } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_CLIENT_ID

console.log('domain: ', domain);
console.log('clientId: ', clientId);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: window.location.origin
			}}
		>
			<App />
			<ToastContainer autoClose={1000} pauseOnHover={false}/>

		</Auth0Provider>
	</React.StrictMode>
);
