// Import the Express.js framework
const express = require("express");
// Import controller functions to handle various actions
const { handlePostBlog } = require("../Controllers/handlePostBlog");
const { handleDeletePost } = require("../Controllers/handleDeletePost");
const { handleUpdateBlog } = require("../Controllers/handleUpdateBlog");
const { handleLike } = require("../Controllers/handleLike");
const { handleComment } = require("../Controllers/handleComment");
const {
  handleGiveAllBlogPosts,
} = require("../Controllers/handleGiveAllBlogPosts");

// Create an Express Router to define and organize routes
const router = express.Router();

// Define routes and specify the controller functions to handle them

// Route to add a new blog entry to the database (HTTP POST)
router.post("/postBlog", handlePostBlog);

// Route to delete a blog entry from the database by ID (HTTP DELETE)
router.delete("/deletePost/:id", handleDeletePost);

// Route to retrieve all blog posts from the database (HTTP GET)
router.get("/giveAllBlogPosts", handleGiveAllBlogPosts);

// Route to update a specific blog post by ID (HTTP PUT)
router.put("/updateBlog/:id", handleUpdateBlog);

// Route to toggle like and dislike for a specific blog post by ID (HTTP PUT)
router.put("/like/:id", handleLike);

// Route to update a comment for a specific blog post by ID (HTTP PUT)
router.put("/comment/:id", handleComment);

// Export the router to be used in the main application
module.exports = router;
