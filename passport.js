const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./models");

module.exports = (app) => {
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
      async function verify(username, password, cb) {
        try {
          const user = await User.findOne({ username });

          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          if (!(await user.validPassword(password))) {
            return cb(null, false, { message: "Incorrect username or password" });
          }
          return cb(null, user);
        } catch (error) {
          return cb(error);
        }
      },
    ),
  );

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (_id, done) {
    User.findById(_id)
      .then((user) => {
        done(null, user); // Usuario queda disponible en req.user.
      })
      .catch((error) => {
        done(error, user);
      });
  });
};
