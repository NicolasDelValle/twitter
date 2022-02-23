const express = require("express");
const { showHome, showExplorer } = require("../controllers/publicController");
const publicRouter = express.Router();
const isAuth = require("../middlewares/isAuth");

publicRouter.get("/", showHome);
publicRouter.get("/explorer", showExplorer);
/* publicRouter.get("/:id", publicController.showProfile); */

module.exports = publicRouter;
