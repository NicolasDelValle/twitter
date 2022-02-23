const { Tweet } = require("../models");

async function showHome(req, res) {
  const tweets = await Tweet.find();
  res.render("home", { page: "home", tweets });
}

async function showExplorer(req, res) {
  res.render("explorer", { page: "explorer" });
}

async function showProfile(req, res) {
  res.render("profile", { page: "profile" });
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
  showExplorer,
  showProfile,
  showContact,
  showAboutUs,
};
