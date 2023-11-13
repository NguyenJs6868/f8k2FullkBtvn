import React from 'react';

export default function Login() {
	return (
		<div className="auth-emailjs-page-login">
			<div className="page-login__title">
				Cảm ơn bạn đã sử dụng dịch vụ của F8
			</div>
			<div className="page-login__help">
				Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu
				hỏi tại đây!
			</div>
			<button className="page-login__action">
				<span>Đăng nhập || Đăng ký</span>
			</button>
		</div>
	);
}
