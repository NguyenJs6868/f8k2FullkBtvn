// import React from 'react';
import { useEffect, useState } from 'react';
import notify from './utils/toastify';
import Login from './pages/Login/Login';
// import Trello from './pages/Trello/Trello';
// import Trello2 from './pages/Trello/Trello2';
import { ToastContainer } from 'react-toastify';

import Homepage from './pages/Homepage';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [apiKey, setApiKey] = useState(null);

	// const apiKeyLocal = useSelector((state) => state.trello.apiKey);
	// console.log('apiKeyLocal: ', apiKeyLocal);

	useEffect(() => {
		let apiKey = localStorage.getItem('apiKey');
		if (apiKey) {
			setApiKey(apiKey);
			notify('Chào mừng đến với Trello', 'success');
		} else {
			notify('Vui lòng đăng nhập để lên việc', 'warning');
		}
	}, []);

	const handleLogin = (apiKey, email) => {
		notify('Chào bạn ' + email.slice(0, email.indexOf('@')), 'success');
		// console.log('handleLogin', apiKey, email);
		localStorage.setItem('apiKey', apiKey);
		localStorage.setItem('email', email);
		setApiKey(apiKey);
	};

	return (
		<>
			<DndProvider backend={Backend}>
				<div className="trello-page">
					{/* {!apiKey ? <Login onLogin={handleLogin}/> : <Trello />} */}
					{!apiKey ? <Login onLogin={handleLogin}/> : <Homepage />
}
					<ToastContainer />
				</div>
			</DndProvider>
		</>
	);
}

export default App;
