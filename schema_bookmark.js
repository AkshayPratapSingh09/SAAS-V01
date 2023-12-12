const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    title: String,
    name: String,
    url: String,
    description: String,
    imageUrl: String,
  });
  
   const Bookmark = mongoose.model("linkData", bookmarkSchema, "linkData");

   module.export = Bookmark
  