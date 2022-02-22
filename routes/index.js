const publicRoutes = require("./publicRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  app.use(publicRoutes), app.use("/login", authRoutes);
};
