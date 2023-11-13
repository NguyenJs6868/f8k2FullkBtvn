import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function AuthEmailjs() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log('Đã vào Profile');
	const { logout } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		<>
			{/* isAuthenticated && */}
			{isAuthenticated && (
				<div className="auth-emailjs-page">
					<div className="auth-emailjs-page-container">
						<div className="auth-emailjs-page-wrap">
							<form className="auth-emailjs-page-form">
								<div className="form-avata">
									<img
										src="https://lh3.googleusercontent.com/a/ACg8ocIPCuos9HrTMvezuZpDg0DhsfrQMDPuj1nvJLG3nkZE=s96-c"
										alt=""
									/>
								</div>

								<div className="form-text">
									<div className="form-text__greeting">
										<span>
											Xin Chào Nguyên Nguyễn Trung !
										</span>
									</div>

									<div className="form-text__location">
										<span>Vị trí: Tiếng Việt</span>
									</div>

									<div className="form-text__email">
										<div>
											<span>Email:</span>
											<a href="">
												fullstack8k2@gmail.com
											</a>
										</div>
									</div>
								</div>

								<div className="form-input">
									<input
										type="text"
										className="form-input__your-email"
										placeholder="Email của bạn *"
										defaultValue="nguyentrungnguyenth14@gmail.com"
									/>
									<textarea
										className="form-input-message"
										type="text"
										placeholder="Tin nhắn *"
										defaultValue={`Tôi cần trợ giúp bài tập về nhà!`}
									/>
								</div>

								<button className="form-input__action">
									<span>Yêu cầu hỗ trợ!</span>
								</button>
							</form>

							<button
								onClick={() =>
									logout({
										logoutParams: {
											returnTo: window.location.origin
										}
									})
								}
								className="auth-emailjs-page-action"
							>
								<span>Đăng xuất</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default AuthEmailjs;
