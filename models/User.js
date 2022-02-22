const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  bio: String,
  image: String,
  tweetList: { type: Schema.Types.ObjectId, ref: "Tweet" },
  following: [],
  followers: [],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
