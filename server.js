require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const session = require("express-session");
const passport = require("./passport");
const methodOverride = require("method-override");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
passport(app);
app.use(methodOverride("_method"));
routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

console.log("http://localhost:3000");

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto Servidor ${APP_PORT}!\n`),
);
