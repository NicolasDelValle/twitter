const { Article } = require("../models");

async function showHome(req, res) {
  res.render("home");
}

async function showProfile(req, res) {
  res.render("home");
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showProfile,
  showContact,
  showAboutUs,
};
