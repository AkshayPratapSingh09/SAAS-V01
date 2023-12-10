const mongoose = require("mongoose");
const { connectDB, closeDB } = require("./connect.js");
const dotenv = require('dotenv');
dotenv.config();

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema, process.env.collection);

async function checkUserExists(username, password) {

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      console.log("User exists!");
    } else {
      console.log("User does not exist.");
    }
  } finally {
    await mongoose.disconnect();
  }
}

const usernameToCheck = "Isaias_Gusikowski";
const passwordToCheck = "password7";

connectDB().then(() => {
    checkUserExists(usernameToCheck, passwordToCheck);
});


