const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const username = process.env.user;
const password = process.env.password;
const host = process.env.host;
const dbName = "Bookmarks";

const url = `mongodb+srv://${username}:${password}@${host}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookmarkSchema = new mongoose.Schema({
  title: String,
  name: String,
  url: String,
  description: String,
  imageUrl: String,
});

const Bookmark = mongoose.model("linkData", bookmarkSchema, "linkData");

async function getAllBookmarks() {
  try {
    // Fetch all bookmarks from the database
    const allBookmarks = await Bookmark.find();

    console.log("All Bookmarks:", allBookmarks);
  } catch (error) {
    console.error("Error fetching bookmarks:", error.message);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Example usage:
getAllBookmarks();
