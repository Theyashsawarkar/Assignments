const mongoose = require("mongoose");

db = async () => {
  await mongoose
    .connect("mongodb://0.0.0.0:27017/blogsDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection is established");
    })
    .catch((err) => {
      console.log("error ocuured" + err);
    });
};

module.exports = db;
