const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

// falta importar un middleware en el loginController

authRouter.get("/", authController.showLandingLogin);
authRouter.get("/registro", authController.showRegistro); // ventana para nuevo usuario
authRouter.post("/registro", authController.storeRegistro); // guardar registro en BD
authRouter.get("/login", authController.showLogin); // ventana para logearse
authRouter.post("/login", authController.login); // chequeo de user + password
authRouter.get("/logout", authController.logout); // salir
/* authRouter.get("*", showError404); */

module.exports = authRouter;
