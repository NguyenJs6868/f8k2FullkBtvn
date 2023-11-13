import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { useAuth0 } from '@auth0/auth0-react';

import './index.css';

const root = createRoot(document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	// </React.StrictMode>,

	// <Auth0Provider
	// 	domain="dev-8prru56l7hz2c4q4.us.auth0.com"
	// 	clientId="PpDh1GnOvUDbvl7z9rYaNH8C6XdFFoWP"
	// 	authorizationParams={{
	// 		redirect_uri: window.location.origin
	// 	}}
	// >
	//
	// </Auth0Provider>
	<App />
);
