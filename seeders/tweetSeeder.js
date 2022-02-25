const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Tweet = require("../models/Tweet");

faker.locale = "es";

module.exports = async () => {
  const tweets = [];

  for (let i = 0; i < 500; i++) {
    const random = faker.datatype.number({ min: 0, max: 2 });
    const user = await User.findOne().skip(random);
    const tweet = new Tweet({
      content: faker.lorem.paragraphs(1),
      user: user,
    });
    user.tweets.push(tweet);
    user.save();
    tweets.push(tweet);
  }
  await Tweet.create(tweets);
  console.log("[Database] Se corrió el seeder de Tweets.");
};
