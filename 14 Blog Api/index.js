// Import the Express.js framework
const express = require("express");
// Create an instance of the Express application
const app = express();

// Start the server on port 3000 and display a message when it's live
app.listen(3000, () => {
  console.log("app is live now");
});

// Define a route for the root URL ("/") that responds with a simple message
app.get("/", (request, response) => {
  response.send("yash ka pehla api");
});

// Enable JSON request and response handling for the application
// it should be above the routes as it parses them , so it should be executed first
app.use(express.json());

// Connect to the database by importing and executing a database configuration file
const db = require("./Config/database");
db();

// Import and use a router for handling routes related to posting blogs
const router = require("./Routes/postBlog");
app.use("/app", router); // we are mounting / appending all the routes after /app

// Error handling middleware that catches and handles various types of errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  // Check for a 400 status error (Bad Request) due to invalid JSON
  if (err.status === 400) {
    res.status(400).json({ message: "Bad Request: Invalid JSON" });
  } else if (err.name === "ValidationError") {
    // Handle Mongoose validation errors by sending a 422 status (Unprocessable Entity)
    res.status(422).json({ message: "Validation Error", errors: err.errors });
  } else {
    // For all other errors, respond with a 500 status (Internal Server Error)
    res.status(500).json({ message: "Something went wrong!" });
  }
});
