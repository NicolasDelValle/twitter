const { User } = require("../models");
const passport = require("passport");

async function showLandingLogin(req, res) {
  res.render("landingLogin");
}

async function showRegistro(req, res) {
  res.render("register");
}

async function storeRegistro(req, res) {
  const [user, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    },
  });

  if (created) {
    req.login(user, () => res.redirect("/"));
  } else {
    res.redirect("back");
  }
}

async function showLogin(req, res) {
  res.render("login");
}

function login(req, res) {
  passport.authenticate("local", {
    successRedirect: req.session.redirectTo ? req.session.redirectTo : "/",
    failureRedirect: "/login",
  })(req, res);
}

async function logout(req, res, next) {
  req.logout();
  res.redirect("/");
}

module.exports = {
  showLandingLogin,
  showRegistro,
  storeRegistro,
  showLogin,
  logout,
  login,
};
