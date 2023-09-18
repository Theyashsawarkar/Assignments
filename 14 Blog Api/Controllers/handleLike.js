const blog = require("../models/blogModel");

exports.handleLike = async (request, response) => {
  try {
    const id = request.params.id;
    const { like } = request.body;

    const oldBlog = await blog.findByIdAndUpdate({ _id: id }, { like });

    response.status(200).json({
      success: true,
      data: oldBlog,
      remark: "like prefrence has bee updated",
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      data: err,
    });
    console.error(err);
  }
};
