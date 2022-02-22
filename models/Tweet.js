const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    content: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: Date,
    likes: [],
  },
  { timestamps: true },
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
