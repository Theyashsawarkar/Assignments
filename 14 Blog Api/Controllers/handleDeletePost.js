// Import the 'blog' model to interact with the MongoDB collection
const blog = require("../models/blogModel");

// Define an asynchronous function to handle deleting a blog post by its ID
exports.handleDeletePost = async (request, response) => {
  try {
    // Extract the 'id' parameter from the request URL
    const id = request.params.id;

    // Use the 'blog' model to find and delete a blog post by its ID
    const deletedBlog = await blog.findByIdAndDelete(id);

    // Respond with a 200 status code, indicating success, and send a JSON response
    response.status(200).json({
      success: true,
      data: deletedBlog,
      remark: "deleted successfully",
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
