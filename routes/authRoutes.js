const express = require("express");
const authRouter = express.Router();
const passport = require("passport");

authRouter.get("/", (req, res) => {
  res.render("login");
});

authRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);
module.exports = authRouter;
