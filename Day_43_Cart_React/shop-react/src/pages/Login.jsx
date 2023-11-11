// import React from 'react'
import getApiKey from '../helpers/getApiKey';
import { emailRegex } from '../helpers/regex';
import { ToastContainer } from 'react-toastify';
import getProfile from '../helpers/getProfile';
// import { rootReducer } from "../core/rootReducer";
import { useDispatch } from '../core/hook';

function Login() {
	// const { products } = useSelector();
	const dispatch = useDispatch();

	const handleLogin = event => {
		event.preventDefault();
		const emailLogin = event.target.email.value;

		if (emailRegex(emailLogin)) {
			getApiKey(emailLogin).then(async res => {
				if (res.response.status === 200) {
					localStorage.setItem('apiKey', res.apiKey);
					localStorage.setItem('email', res.email);

					const dataProfile = await getProfile(res.apiKey);
					if (dataProfile) {
						dispatch({
							type: 'auth/profile',
							payload: dataProfile
						});
					}
				}
			});
		}
	};

	return (
		<>
			<form className="login-page" onSubmit={handleLogin}>
				<label className="login-page__label" htmlFor="email">
					Email:
				</label>

				<input
					className="login-page__input"
					id="email"
					defaultValue={'nguyentrungnguyenth14@gmail.com'}
					name="email"
					placeholder="example@example.com"
				/>

				<button>Submit</button>
			</form>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
}

export default Login;
