const { faker } = require("@faker-js/faker");
const User = require("../models/User");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 3; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: "user" + i,
      password: "123",
      email: faker.internet.email(),
      bio: "esta es la bio si muy bien :D",
      avatar: faker.image.avatar(),
      background: faker.image.abstract(),
    });
  }
  await User.create(users);
  console.log("[Database] Se corrió el seeder de users.");
};
