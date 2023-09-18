// Import the Mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Define the structure of the blog document using Mongoose Schema
const blogSchema = new mongoose.Schema({
  // Define a 'title' field of type String, which is required
  title: {
    type: String,
    required: true,
  },
  // Define a 'description' field of type String, which is required
  description: {
    type: String,
    required: true,
  },
  // Define a 'comment' field of type String, which is required
  comment: {
    type: String,
    required: true,
  },
  // Define a 'like' field of type Boolean, which is required
  like: {
    type: Boolean,
    required: true,
  },
});

// Export a Mongoose model named "blog" based on the defined schema
module.exports = mongoose.model("blog", blogSchema);
