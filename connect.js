const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    const username = process.env.user;
    const password = process.env.password;
    const url = `mongodb+srv://${username}:${password}@saas-login.xbalqfg.mongodb.net/?retryWrites=true&w=majority`;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

const closeDB = () => {
  mongoose.connection.close();
  console.log("Disconnected from the database");
};

connectDB()
module.exports = { connectDB, closeDB};
