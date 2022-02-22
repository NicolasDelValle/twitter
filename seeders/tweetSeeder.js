const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Tweet = require("../models/Tweet");
const authRouter = require("../routes/authRoutes");

faker.locale = "es";

module.exports = async () => {
  const tweets = [];

  for (let i = 0; i < 3; i++) {
    /* const autor = await User.find */
    tweets.push({
      content: faker.lorem.paragraphs(10),
      user: autor,
    });
  }
  await User.create(tweets);
  console.log("[Database] Se corrió el seeder de users.");
};
