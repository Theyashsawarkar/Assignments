const express = require("express");
const { handlePostBlog } = require("../Controllers/handlePostBlog");
const { handleDeletePost } = require("../Controllers/handleDeletePost");
const { handleUpdateBlog } = require("../Controllers/handleUpdateBlog");
const {
  handleGiveAllBlogPosts,
} = require("../Controllers/handleGiveAllBlogPosts");
const router = express.Router();

// adds new entry to database
router.post("/postBlog", handlePostBlog);

// deletes an entry from database
router.delete("/deletePost/:id", handleDeletePost);

// // returns all the entries
router.get("/giveAllBlogPosts", handleGiveAllBlogPosts);

// // updates the specified blog post
router.put("/updateBlog/:id", handleUpdateBlog);

// // toggles like and dislike
// router.put("/like/:id", handleLike);

// // updates comment
// router.put("/comment", handleComment);

module.exports = router;
