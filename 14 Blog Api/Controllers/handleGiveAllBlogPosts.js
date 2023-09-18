// Import the 'blog' model to interact with the MongoDB collection
const blog = require("../models/blogModel");

// Define an asynchronous function to handle retrieving all blog posts
exports.handleGiveAllBlogPosts = async (request, response) => {
  try {
    // No 'id' parameter is used in this function

    // Use the 'blog' model to find and retrieve all blog posts
    const updatedBlog = await blog.find({});

    // Respond with a 200 status code, indicating success, and send a JSON response
    response.status(200).json({
      success: true,
      data: updatedBlog,
    });
  } catch (err) {
    // If an error occurs, respond with a 500 status code and send an error message
    response.status(500).json({
      success: false,
      data: err,
    });
    // Log the error to the console for debugging purposes
    console.error(err);
  }
};
