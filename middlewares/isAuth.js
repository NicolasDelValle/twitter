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
  if (req.user._id === req.params.id) {
    console.log(req.user._id);
    console.log(req.params.id);
    console.log("Es tu perfil");
  } else {
    console.log("no es tu perfil");
    return next();
  }
}
module.exports = { isAuthLogged, isAuthUnlogged, isYourProfile };
