import './App.scss';
import React, { useLayoutEffect } from 'react';
// import Loading from './components/Loading/Loading';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shop from './pages/Shop';
import Login from './pages/Login';
import getProfile from './helpers/getProfile';
import { useDispatch, useSelector } from './core/hook';

export const AppContext = React.createContext();

function App() {
	const dispatch = useDispatch();
	const { profile } = useSelector();

	useLayoutEffect(() => {
		// get profile ->  context login = true
		const apiKeyLocal = localStorage.getItem('apiKey');
		if (apiKeyLocal) {
			getProfile(apiKeyLocal).then(profile => {
				if (profile) {
					dispatch({
						type: 'auth/profile',
						payload: profile
					});
				}
			});
		}
	}, []);

	return <>{profile ? <Shop /> : <Login />}</>;
}

export default App;
