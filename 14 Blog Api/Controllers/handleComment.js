const blog = require("../models/blogModel");

exports.handleComment = async (request, response) => {
  try {
    const id = request.params.id;
    const { comment } = request.body;

    const oldBlog = await blog.findByIdAndUpdate({ _id: id }, { comment });

    response.status(200).json({
      success: true,
      data: oldBlog,
      remark: "comment has bee updated",
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      data: err,
    });
    console.error(err);
  }
};
