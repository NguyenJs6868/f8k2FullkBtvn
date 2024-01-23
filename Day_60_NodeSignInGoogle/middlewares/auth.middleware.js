console.log('auth.middleware');
module.exports = (req, res, next) => {
  if (req.user) {
    console.log('auth.middleware req.user next()');
    return next();
  }
  console.log('auth.middleware redirect("/auth/login")');
  return res.redirect("/auth/login");
};
