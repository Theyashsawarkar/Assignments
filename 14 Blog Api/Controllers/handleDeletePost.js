const blog = require("../models/blogModel");

exports.handleDeletePost = async (request, response) => {
  try {
    const id = request.params.id;

    const deletedBlog = await blog.findByIdAndDelete(id);

    response.status(200).json({
      success: true,
      data: deletedBlog,
      remark: "deleted succesfully",
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      data: err,
    });
    console.error(err);
  }
};
