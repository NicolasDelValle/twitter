const express = require("express");
const publicController = require("../controllers/publicController");
const publicRouter = express.Router();
const isAuth = require("../middlewares/isAuth");

publicRouter.get("/", publicController.showHome);
/* publicRouter.get("/:id", publicController.showProfile); */

module.exports = publicRouter;
