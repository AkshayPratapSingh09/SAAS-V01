const mongoose = require("mongoose");
const faker = require("faker");
const UserModel = require("./schema.js");
const { connectDB, closeDB } = require("./connect.js");



const AddAllUsers = async () => {
  const UsersCollection = mongoose.model("User");
  try {
    function getRandomDateOfBirth() {
      const start = new Date("2000-01-01");
      const end = new Date("2020-01-01");
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    const sampleUsers = [];
    for (let i = 0; i < 10; i++) {
      const sampleUser = new UserModel({
        username: faker.internet.userName(),
        password: `password${i + 1}`,
        email: faker.internet.email(),
        dateOfBirth: getRandomDateOfBirth(),
        verified: i % 2 === 0, // Alternate between true and false for verification
        subscribed: i % 3 === 0, // One-third of users are subscribed
      });

      sampleUsers.push(sampleUser);
    }
    await Promise.all(sampleUsers.map((user) => user.save()))
      .then((savedUsers) => {
        console.log("Sample users added successfully:", savedUsers);
      })
      .catch((error) => {
        console.error("Error adding sample users:", error);
      });

    const users = await UsersCollection.find({}).toArray();
    console.log("Users:", users);
  } catch (e) {
    console.error("Error fetching users:", e);
  } finally {
    closeDB();
  }
};

connectDB().then(() => {
  AddAllUsers();
});
