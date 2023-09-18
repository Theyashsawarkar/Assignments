const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("blog", blogSchema);
