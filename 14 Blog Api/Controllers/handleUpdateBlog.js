// Import the 'blog' model to interact with the MongoDB collection
const blog = require("../models/blogModel");

// Define an asynchronous function to handle updating a blog post by its ID
exports.handleUpdateBlog = async (request, response) => {
  try {
    // Extract the 'id', 'title', 'description', 'comment', and 'like' fields from the request
    const id = request.params.id;
    const { title, description, comment, like } = request.body;

    // Use the 'blog' model to find and update a blog post by its ID
    const oldBlog = await blog.findByIdAndUpdate(
      { _id: id },
      { title, description, comment, like }
    );

    // Respond with a 200 status code, indicating success, and send a JSON response
    response.status(200).json({
      success: true,
      data: oldBlog,
      remark: "this blog has been updated",
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