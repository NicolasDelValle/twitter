const { Tweet, User } = require("../models");

async function showHome(req, res) {
  const tweets = await Tweet.find().populate("user");
  const topUsers = await User.find();
  res.render("home", { page: "home", tweets, topUsers });
}

async function showExplorer(req, res) {
  const tweets = await Tweet.find().populate("user");
  res.render("explorer", { page: "explorer", tweets });
}

async function showProfile(req, res) {
  const tweets = await Tweet.find({ user: req.user._id }).populate("user");
  res.render("profile", { page: "profile", tweets });
}

async function showSorry(req, res) {
  res.render("sorry", { page: "sorry" });
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

async function follow(req, res) {
  const user = await User.findById(req.params.id);
  if (!user.following.includes(req.user._id)) {
    user.following.push(req.user._id);
    user.save();
    includesUser = true;
  } else {
    const index = user.following.indexOf(req.user._id);
    user.following.splice(index);
    user.save();
  }
  res.json({ user });
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showExplorer,
  showProfile,
  showSorry,
  showContact,
  showAboutUs,
  follow,
};
