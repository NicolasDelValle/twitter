const db = require("./models");
const mongoose = require("mongoose");

module.exports = async () => {
  await require("mongoose").connection.dropDatabase();
  // Ejecutar seeders (datos de prueba):
  await require("./seeders/userSeeder")();
  await require("./seeders/tweetSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
