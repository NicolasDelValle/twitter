function isAuthLogged(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    res.redirect("/login");
  }
}

function isAuthUnlogged(req, res, next) {
  if (req.isAuthenticated()) {
    req.session.redirectTo = req.query.redirectTo;
    res.redirect("/home");
  } else {
    return next();
  }
}

module.exports = { isAuthLogged, isAuthUnlogged };
