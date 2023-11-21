import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const serviceId = import.meta.env.VITE_ID_SERVICE_EMAILJS
const templateId = import.meta.env.VITE_ID_TEMPLATE_EMAILJS
const apiKeys = import.meta.env.VITE_KEY_EMAILJS

function AuthEmailjs() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log('user, isAuthenticated, isLoading', user, isAuthenticated, isLoading);
	console.log('Đã vào Profile - AuthEmailjs');

	const { logout } = useAuth0();

	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
				.sendForm(
						serviceId,
						templateId,
						e.target,
						apiKeys
				)
				.then(
						(response) => {
								setLoading(false);
								console.log('SUCCESS!', response.status, response.text);
								toast.success(`Gửi thành công !`);
						},
						(err) => {
								setLoading(false);
								console.log('FAILED...', err);
								toast.error(`Gửi thất bại !`);
						}
				);
};


	if (isLoading || loading) {
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

								<form action="" onSubmit={handleSubmit} className="form-input">
									<label htmlFor="email">Email của bạn* </label>
									<input
										type="text"
										name="email"
										id="email"
										className="form-input__your-email"
										placeholder="Email của bạn *"
										defaultValue="nguyentrungnguyenth14@gmail.com"
									/>

									<label htmlFor="message">Tin nhắn </label>
									<textarea
										name="message"
										id="message"
										className="form-input-message"
										type="text"
										placeholder="Tin nhắn *"
										defaultValue={`Tôi cần trợ giúp bài tập về nhà!`}
									/>
								</form>

								<button type="submit" className="form-input__action">
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
