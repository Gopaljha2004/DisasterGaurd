const express = require('express');
const router = express.Router();

// Example controller function (you might be missing this or have incorrect syntax)
const {signupController} = require("../controllers/signupController")
// Define your route with the correct callback function
router.post('/signup', signupController);

module.exports = router;
