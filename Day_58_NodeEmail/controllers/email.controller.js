console.log('email.controler');
const sendMail = require('../utils/mail');
const model = require("../models/index");
const User = model.User;
const HistoryEmail = model.HistoryEmail;

module.exports = {
	index: async (req, res, next) => {
		const email = 'Email';
		res.render('email/index', { email });
	},
	add: (req, res) => {
		// const errors = req.flash("errors");
		res.render('email/add', { req });
	},

	handleAdd: async (req, res) => {
		console.log('controller handleAdd');
		/*
    Validate:
    - Tên: Bắt buộc, không bị trùng
    - Giá: Bắt buộc, số
    Insert Database
    Redirect kèm thông báo
    */
		// const body = await req.validate(req.body, {
		// 	email: string().required('Email bắt buộc phải nhập'),
		// 	// .test("check-unique", "Email tới sai hoặc chưa tồn tại", async (value) => {
		// 	//   return await courseModel.courseUnique(value);
		// 	// })
		// 	title: string().required('Tiêu đề bắt buộc phải nhập'),
		// 	content: string().required('Nội dung bắt buộc phải nhập'),
		// });

		const body = req.body;
		console.log('handleAdd send body', body, typeof body);

		const info = await sendMail(
			body.email_to,
			body.title,
			body.content,
		);
		// console.log('handleAdd send info', info);

		try {
			const historyEmail = await HistoryEmail.create(body);
			console.log('handleAdd res historyEmail', historyEmail);
		} catch (error) {
			console.log(error);
		}

		// res.json(info);
		return res.redirect('/email/add');
	}
};
