// Import the Mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Define an asynchronous function called 'db' to establish a database connection
db = async () => {
  try {
    // Use Mongoose to connect to the MongoDB server at the specified URL
    await mongoose.connect("mongodb://0.0.0.0:27017/blogsDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // If the connection is successful, log a connection established message
    console.log("Connection is established");
  } catch (err) {
    // If an error occurs during the connection attempt, log an error message
    console.log("Error occurred: " + err);
  }
};

// Export the 'db' function to make it available for use in other parts of the application
module.exports = db;
