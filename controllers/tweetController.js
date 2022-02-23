const { User, Tweet } = require("../models");

// Display the specified resource.
async function showTweet(req, res) {}

// Store a newly created resource in storage.
async function createTweet(req, res) {
  const tweet = await new Tweet({
    content: req.body.content,
    user: req.user._id,
  });
  tweet.save();
  res.redirect("/home");
}

// Remove the specified resource from storage.
async function destroyTweet(req, res) {}

// Otros handlers...
// ...

module.exports = {
  showTweet,
  createTweet,
  destroyTweet,
};
