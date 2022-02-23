const express = require("express");
const { showHome, showExplorer, showProfile } = require("../controllers/publicController");
const publicRouter = express.Router();
const isAuth = require("../middlewares/isAuth");

publicRouter.get("/home", showHome);
publicRouter.get("/explorer", showExplorer);
publicRouter.get("/user", showProfile);
/* publicRouter.get("/:id", publicController.showProfile); */

module.exports = publicRouter;
