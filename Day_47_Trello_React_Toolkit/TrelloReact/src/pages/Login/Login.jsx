/* eslint-disable no-undef */
// import React from 'react'

import { useState } from 'react';
import { emailRegex } from '../../utils/regex';
import getApiKey from '../../utils/getApiKey';
// import notify from '../../utils/toastify';
import { toast } from 'react-toastify'

import { useDispatch, useSelector } from "react-redux";


import { trelloSlice } from '../../redux/slices/trelloSlice';
const { saveApiKey, saveEmail } = trelloSlice.actions;


function Login({ onLogin }) { // {onLogin}
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	// const apiKey = useSelector((state) => state.trello.apiKey);
	// const email = useSelector((state) => state.trello.email);
	// console.log('apiKey selector', apiKey);
	// console.log('email selector', email);


	const handleSubmitLogin = event => {
		event.preventDefault();

		const emailUser = event.target.email.value;
		if (emailRegex(emailUser)) {
			setLoading(true);
			getApiKey(emailUser).then(responseData => {
				setLoading(false);
				const { apiKey, email, response } = responseData;

				if (apiKey && email && response.ok) {
					onLogin(apiKey, email);
					localStorage.setItem('apiKey', apiKey);
					localStorage.setItem('email', email);
					dispatch(saveApiKey(apiKey));
					dispatch(saveEmail(email));

				} else {
					toast(`${responseData.message}`);
					localStorage.removeItem('apiKey');
					localStorage.removeItem('email');
				}
			});
		} else {
			toast('Vui lòng nhập đúng định dạng Email!');
		}
	};

	return (
		<>
			{/* <div className="login-page"> */}
			<form className="login-form" onSubmit={handleSubmitLogin}>
				<label htmlFor="email" className="login-form__title">
					{loading ? 'Loadding ...' : 'Enter the Email!'}
				</label>
				<input
					className="login-form__input"
					type="email"
					id="email"
					defaultValue={'nguyentrungnguyenth14@gmail.com'}
				/>
			</form>
			{/* </div> */}
		</>
	);
}

export default Login;
