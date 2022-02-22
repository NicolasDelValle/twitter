const express = require("express");
const publicRouter = express.Router();

publicRouter.get("/", (req, res) => {
  res.render("home");
});

module.exports = publicRouter;
