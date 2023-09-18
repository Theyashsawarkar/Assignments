// Import the 'blog' model to interact with the MongoDB collection
const blog = require("../models/blogModel");

// Define an asynchronous function to handle creating a new blog post
exports.handlePostBlog = async (request, response) => {
  try {
    // Extract the 'title', 'description', 'comment', and 'like' fields from the request body
    const { title, description, comment, like } = request.body;

    // Use the 'blog' model to create a new blog post document with the provided data
    const createdBlog = await blog.create({
      title,
      description,
      comment,
      like,
    });

    // Respond with a 200 status code, indicating success, and send a JSON response
    response.status(200).json({
      success: true,
      data: createdBlog,
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
