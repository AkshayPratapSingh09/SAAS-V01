const mongoose = require("mongoose");
const UserModel = require("./schema.js");
const { connectDB, closeDB } = require("./connect.js");

const AddUser = async () => {
  const UsersCollection = mongoose.model("User");

  try {
    const userToAdd = new UserModel({
      username: "Trial Arpan",
      password: "trial@123",
      email: "",
      dateOfBirth: new Date("2005-4-12"), // Set the desired date of birth
      verified: false, // Set the verification status
      subscribed: true, // Set the subscription status
    });

    const savedUser = await userToAdd.save();
    console.log("User added successfully:", savedUser);

    const users = await UsersCollection.find({}).toArray();
    console.log("All users:", users);
  } catch (error) {
    console.error("Error adding user:", error);
  } finally {
    closeDB();
  }
};

connectDB().then(() => {
  AddUser();
});
