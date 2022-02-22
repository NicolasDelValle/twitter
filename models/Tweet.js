const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  content: String,
  user: String,
  createdAt: Date,
  likes: [],
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
