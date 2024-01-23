console.log('authRouter');

var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');

router.get('/forget-password', authController.forgetPassword);
router.post('/forget-password', authController.handleForgetPassword);

router.get('/password-reset', authController.passwordReset);
router.post('/password-reset', authController.handlePasswordReset);

router.get('/login', authController.login);
router.post('/login',passport.authenticate('local', {
		failureRedirect: '/auth/login',
		failureFlash: true,
		successRedirect: '/'
	})
	// (req, res) => {
	//   const user = req.user;
	//   res.json({ user });
	// },
);
router.get('/logout', (req, res) => {
	req.logout(err => {});
	return res.redirect('/auth/login');
});

module.exports = router;
