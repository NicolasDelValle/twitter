const express = require("express");
const { showTweet, createTweet, destroyTweet, like } = require("../controllers/tweetController");
const tweetRouter = express.Router();
const { isAuthLogged, isYourProfile } = require("../middlewares/isAuth");

tweetRouter.get("/tweetPage/:id", showTweet);
tweetRouter.post("/tweet", isAuthLogged, createTweet);
tweetRouter.delete("/tweet/:id", isAuthLogged, destroyTweet);
tweetRouter.get("/tweet/like/:id", isAuthLogged, isYourProfile, like);

module.exports = tweetRouter;
