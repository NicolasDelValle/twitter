const express = require("express");
const { showHome, showExplorer, showProfile } = require("../controllers/publicController");
const publicRouter = express.Router();
const { isAuthLogged } = require("../middlewares/isAuth");

publicRouter.get("/home", isAuthLogged, showHome);
publicRouter.get("/explorer", showExplorer);
publicRouter.get("/profile", isAuthLogged, showProfile);
/* publicRouter.get("/:id", publicController.showProfile); */

module.exports = publicRouter;
