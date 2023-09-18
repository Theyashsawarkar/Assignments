const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("app is live now");
});

app.get("/", (request, response) => {
  response.send("yash ka pehla api");
});

app.use(express.json());

const db = require("./Config/database");
db();

const router = require("./Routes/postBlog");
app.use("/app", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.status === 400) {
    res.status(400).json({ message: "Bad Request: Invalid JSON" });
  } else if (err.name === "ValidationError") {
    // Handle Mongoose validation errors
    res.status(422).json({ message: "Validation Error", errors: err.errors });
  } else {
    res.status(500).json({ message: "Something went wrong!" });
  }
});
