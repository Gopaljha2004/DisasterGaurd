
const express = require("express");
const router = express.Router();

// Import your UserNetworkStatus model
const UserNetworkStatus = require("../controller/SingupController");

// POST route to update network status
router.post("/update", (req, res) => {
  const { userId, onlineStatus } = req.body;

  UserNetworkStatus.findOneAndUpdate(
    { userId },
    { onlineStatus, lastUpdated: Date.now() },
    { upsert: true } // Create the document if it doesn't exist
  )
    .then(() => {
      res.json({ message: "Network status updated successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Error updating network status" });
    });
});

module.exports = router;
