const { User } = require("../models");
const passport = require("passport");

async function showLandingLogin(req, res) {
  res.render("landingLogin");
}

async function showRegistro(req, res) {
  res.render("register");
}

async function storeRegistro(req, res) {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    avatar: req.body.avatar,
    bio: req.body.bio,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  user.save();
  res.redirect("/home");
}

async function showLogin(req, res) {
  res.render("login");
}

function login(req, res) {
  passport.authenticate("local", {
    successRedirect: req.session.redirectTo ? req.session.redirectTo : "/home",
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
