import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function Login() {
	// const { loginWithRedirect, isAuthenticated } = useAuth0();
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		<>
			{/* !isAuthenticated &&  */}
			{!isAuthenticated && (
				<div className="auth-emailjs-page-login">
					<div className="page-login__title">
						Cảm ơn bạn đã sử dụng dịch vụ của F8
					</div>

					<div className="page-login__help">
						Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và
						đặt câu hỏi tại đây!
					</div>

					<button
						onClick={() => loginWithRedirect()}
						className="page-login__action"
					>
						<span>Đăng nhập || Đăng ký</span>
					</button>
				</div>
			)}
		</>
	);
}
