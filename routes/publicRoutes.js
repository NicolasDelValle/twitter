const express = require("express");
const {
  showHome,
  showExplorer,
  showProfile,
  showSorry,
  follow,
} = require("../controllers/publicController");
const publicRouter = express.Router();
const { isAuthLogged, isYourProfile } = require("../middlewares/isAuth");

publicRouter.get("/home", isAuthLogged, showHome);
publicRouter.get("/explorer", showExplorer);
publicRouter.get("/profile/:username", showProfile);
publicRouter.get("/sorry", showSorry);
publicRouter.get("/follow", isAuthLogged, isYourProfile, follow);

module.exports = publicRouter;
