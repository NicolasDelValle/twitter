function userGlobally(req, res, next) {
  res.locals.user = req.user;
  url = req.originalUrl;
  next();
}

module.exports = userGlobally;
