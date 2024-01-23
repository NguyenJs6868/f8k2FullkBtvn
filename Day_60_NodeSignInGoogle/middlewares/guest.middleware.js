console.log('guestMiddleware guest.middleware');

module.exports = (req, res, next) => {
  const pathname = req.baseUrl + req.path;
  // /auth/logout
  if (req.user && pathname !== "/auth/logout") {
    console.log('req.user && pathname !== "/auth/logout"');
    return res.redirect("/");
  }
  console.log('guestMiddleware next()');
  return next();
};
