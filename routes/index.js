const publicRoutes = require("./publicRoutes");
const authRoutes = require("./authRoutes");
const userGlobally = require("../middlewares/userGlobally");

module.exports = (app) => {
  app.use(publicRoutes), app.use("/login", authRoutes);
  app.use(userGlobally);
};
