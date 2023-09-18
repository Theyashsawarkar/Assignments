const blog = require("../models/blogModel");

exports.handlePostBlog = async (request, response) => {
  try {
    const { title, description, comment, like } = request.body;

    const createdBlog = await blog.create({
      title,
      description,
      comment,
      like,
    });

    response.status(200).json({
      success: true,
      data: createdBlog,
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      data: err,
    });
    console.error(err);
  }
};
