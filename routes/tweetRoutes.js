const express = require("express");
const { showTweet, createTweet, destroyTweet } = require("../controllers/tweetController");
const tweetRouter = express.Router();
const { isAuthLogged } = require("../middlewares/isAuth");

tweetRouter.get("/tweet", showTweet);
tweetRouter.post("/tweet", isAuthLogged, createTweet);
tweetRouter.delete("/tweet", isAuthLogged, destroyTweet);
/* publicRouter.get("/:id", publicController.showProfile); */

module.exports = tweetRouter;
