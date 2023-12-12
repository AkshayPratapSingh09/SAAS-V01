const axios = require("axios");
const mongoose = require("mongoose");
const {closeDB} = require("./connect")
const dotenv = require("dotenv");
dotenv.config();

const username = process.env.user;
const password = process.env.password;

const url = `mongodb+srv://${username}:${password}@${process.env.host}/?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Bookmarks",
});

const bookmarkSchema = new mongoose.Schema({
    title: String,
    name: String,
    url: String,
    description: String,
    imageUrl: String,
  });
  
  const Bookmark = mongoose.model("linkData", bookmarkSchema, "linkData");
  
  async function addBookmark(url) {
    try {
      // Fetch data from the link preview API
      const response = await axios.get(
        `https://link-previews.stephanbogner.de/api?url=${encodeURIComponent(
          url
        )}`
      );
      const linkPreviewData = response.data;
  
      // Create a new bookmark based on the schema
      const newBookmark = new Bookmark({
        title: linkPreviewData.title,
        name: linkPreviewData.name,
        url: linkPreviewData.url,
        description: linkPreviewData.description,
        imageUrl: linkPreviewData.image,
      });
  
      // Save the new bookmark to the database
      const savedBookmark = await newBookmark.save();
  
      console.log("Bookmark added:", savedBookmark);
    } catch (error) {
      console.error("Error adding bookmark:", error.message);
    }
  }
  
  // Example usage:
  // Replace 'https://example.com' with the URL you want to add to the database
  addBookmark("https://huggingface.co/spaces/huggingface-projects/QR-code-AI-art-generator").then(() => {
    mongoose.connection.close();
  });

  module.exports = {addBookmark}