const { Tweet, User } = require("../models");

async function showHome(req, res) {
  const tweets = await Tweet.find().populate("user");
  const topUsers = await User.find().sort({ followers: -1 }).limit(5);
  console.log(tweets);
  res.render("home", { page: "home", tweets, topUsers });
}

async function showExplorer(req, res) {
  const tweets = await Tweet.find().populate("user");
  res.render("explorer", { page: "explorer", tweets });
}

async function showProfile(req, res) {
  const userProfile = await User.findOne({
    username: req.params.username,
  }).populate("tweets");
  const topUsers = await User.find().sort({ followers: -1 }).limit(5);
  res.render("profile", { page: "profile", userProfile, topUsers });
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
  const followed = await User.findById(req.params.id);
  if (followed.followers.includes(req.user._id)) {
    const index = followed.followers.indexOf(req.user._id);
    followed.followers.splice(index);
    followed.save();
  } else {
    followed.followers.push(req.user._id);
    followed.save();
  }
  console.log(followed.followers);
  res.json(followed);
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
