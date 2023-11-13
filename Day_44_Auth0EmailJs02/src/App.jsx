import { useAuth0 } from '@auth0/auth0-react';
// import { useState } from 'react';
import Login from './components/Login/Login';
import AuthEmailjs from './components/AuthEmailjs/AuthEmailjs';

import './App.scss';
import { useState } from 'react';

function App() {
	// const [isAuthen, setIsAuthen] = useState(false);
	const { isAuthenticated } = useAuth0();
  
	console.log('App isAuthenticated: ', isAuthenticated);

	return (
		<div>
			{
				// !isAuthenticated ?
				<>
					<Login />
					<AuthEmailjs />
				</>
			}
		</div>
	);
}

export default App;

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
