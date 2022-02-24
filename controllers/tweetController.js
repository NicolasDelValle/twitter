const { id } = require("date-fns/locale");
const { User, Tweet } = require("../models");

// Display the specified resource.
async function showTweet(req, res) {
  const { id } = req.params;
  console.log(req.params);
  const tweet = await Tweet.findById(id).populate("user");

  res.render("tweetPage", { page: "tweetPage", tweet });
}

//Reply tweet with tweet
async function replyTweet(req, res) {
  const tweet = await new Tweet({
    content: req.body.content,
    user: req.user._id,
  });
  tweet.save();
  res.redirect("/tweetPage/:id");
}

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
async function destroyTweet(req, res) {
  try {
    await Tweet.findByIdAndDelete(req.params.id);
    res.redirect("/home");
  } catch (error) {
    console.log(error);
    res.status(502).json({ message: "Ups, algo ha salido mal." });
  }
}

async function like(req, res) {}

// Otros handlers...
// ...

module.exports = {
  showTweet,
  replyTweet,
  createTweet,
  destroyTweet,
  like,
};
