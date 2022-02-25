const { id } = require("date-fns/locale");
const { links } = require("express/lib/response");
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

async function like(req, res) {
  const tweet = await Tweet.findById(req.params.id);
  let includesUser = false;
  if (!tweet.likes.includes(req.user._id)) {
    tweet.likes.push(req.user._id);
    tweet.save();
    includesUser = true;
  } else {
    const index = tweet.likes.indexOf(req.user._id);
    tweet.likes.splice(index);
    tweet.save();
  }
  res.json({ tweet, includesUser });
}

// Otros handlers...
// ...

module.exports = {
  showTweet,
  replyTweet,
  createTweet,
  destroyTweet,
  like,
};
