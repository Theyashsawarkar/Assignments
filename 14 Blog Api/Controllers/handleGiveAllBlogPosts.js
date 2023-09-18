const blog = require("../models/blogModel");

exports.handleGiveAllBlogPosts = async (request, response) => {
  try {
    const id = request.params.id;

    const updaatedBlog = await blog.findOneAndUpdate({});

    response.status(200).json({
      success: true,
      data: updaatedBlog,
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      data: err,
    });
    console.error(err);
  }
};
