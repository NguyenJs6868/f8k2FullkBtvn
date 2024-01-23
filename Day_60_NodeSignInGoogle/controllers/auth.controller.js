console.log('auth.controller');
const sendMail = require('../utils/mail');
const { User } = require("../models/index");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

module.exports = {
	login: (req, res) => {
		const error = req.flash('error');
		res.render('auth/login', { error });
	},
	forgetPassword: (req, res) => {
		res.render('auth/forget-password');
	},
	handleForgetPassword: async (req, res) => {

    const generateToken = () => {
      // Tạo payload (dữ liệu chứa trong token)
      const payload = {
        user_id: 123,
        username: 'example_user'
      };

      // Tạo mã token với thời gian sống là 15 phút (900 giây)
      const token = jwt.sign(payload, 'your_secret_key', { expiresIn: '15m' });
			console.log('token', token);
      // return token;
    };

		generateToken();

		const baseUrl = process.env.BASE_URL;
		const body = req.body;
		console.log('body', body);

    const emailRequire = body.email;
		const tokenJWT = `%242y%2410%24FGWWAZNqQffXwXcMReVwe.itk5STogOPhH1RbmgKGVV7EDs6F7p.u`;
    const title = 'Quên mật khẩu / Đặt lại mật khẩu';
    const content =
		`
			<strong>Bạn vui lòng đặt lại mật khẩu qua đường dẫn này:  </strong>
			<a href="${baseUrl}/auth/password-reset?email=${emailRequire}&token=${tokenJWT}">url</a>
		`;

		console.log('url Vs token', tokenJWT);

		const info = await sendMail(
			email,
			title,
			content,
		);
		if (info) {
			console.log('URL đặt lại mật khẩu đã được gửi đến địa chỉ email của bạn', info);
			res.render('auth/forget-password');
		} else {
			res.render('auth/forget-password');
		}

		// res.json(info);
	},

  passwordReset: (req, res) => {
		res.render('auth/password-reset');
	},

  handlePasswordReset: (req, res) => {
    const body = req.body;
		console.log('handlePasswordReset body', body);

		const newPassword  = body.newPassword;
		console.log('newPassword newPassword', newPassword, typeof newPassword);

		res.render('auth/password-reset');

	},

};
