const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Tweet = require("../models/Tweet");
const authRouter = require("../routes/authRoutes");

faker.locale = "es";

module.exports = async () => {
  const tweets = [];

  for (let i = 0; i < 3; i++) {
    const random = faker.datatype.number({ min: 0, max: 2 });
    const user = await User.findOne().skip(random);

    tweets.push({
      content: faker.lorem.paragraphs(3),
      user: user,
    });
  }
  await Tweet.create(tweets);
  console.log("[Database] Se corrió el seeder de users.");
};
