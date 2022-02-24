const express = require("express");
const {
  showHome,
  showExplorer,
  showProfile,
  showSorry,
} = require("../controllers/publicController");
const publicRouter = express.Router();
const { isAuthLogged } = require("../middlewares/isAuth");

publicRouter.get("/home", isAuthLogged, showHome);
publicRouter.get("/explorer", showExplorer);
publicRouter.get("/profile/:username", isAuthLogged, showProfile);
publicRouter.get("/sorry", showSorry);
/* publicRouter.get("/:id", publicController.showProfile); */

module.exports = publicRouter;
