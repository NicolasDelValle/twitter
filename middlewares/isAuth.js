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
function isYourProfile(req, res, next) {
  if (req.user.username === req.params.username) {
    res.end("no es tu perfil >:(");
  } else {
    return next();
  }
}
module.exports = { isAuthLogged, isAuthUnlogged, isYourProfile };
