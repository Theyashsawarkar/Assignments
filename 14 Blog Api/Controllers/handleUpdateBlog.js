const blog = require("../models/blogModel");

exports.handleUpdateBlog = async (request, response) => {
  try {
    const id = request.params.id;
    const { title, description, comment, like } = request.body;

    const oldBlog = await blog.findByIdAndUpdate(
      { _id: id },
      { title, description, comment, like }
    );

    response.status(200).json({
      success: true,
      data: oldBlog,
      remark: "this blog has been updated",
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      data: err,
    });
    console.error(err);
  }
};
