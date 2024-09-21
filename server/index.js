const express = require("express");
const cors = require("cors");
const app = express();

// body parser
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
  })
);

// dotenv config
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Connect to DB
const dbConnect = require("./config/database");
dbConnect();

// Routes
const signup = require("./routes/signup");
const userNetworkStatus = require("./routes/UserNetworkStatus");

// Mounting routes
app.use("/api/v1/signup", signup);
app.use("/api/v1/network-status", userNetworkStatus);

// Start server
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});

// Fetch user data endpoint
app.get("/fetch-user-data", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error("Error fetching user data:", err);
      res.status(500).json({ error: "Failed to fetch user data" });
    });
});
