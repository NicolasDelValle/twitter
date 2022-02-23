const publicRoutes = require("./publicRoutes");
const tweetRoutes = require("./tweetRoutes");
const authRoutes = require("./authRoutes");
const userGlobally = require("../middlewares/userGlobally");

module.exports = (app) => {
  app.use(userGlobally);
  app.use(publicRoutes);
  app.use(tweetRoutes);
  app.use(authRoutes);
};
