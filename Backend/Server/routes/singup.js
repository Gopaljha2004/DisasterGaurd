const express = require('express');
const router = express.Router();

// Example controller function (you might be missing this or have incorrect syntax)
const {Singup} = require("../controllers/Singup");
// Define your route with the correct callback function
router.post("/sigup" , Singup)

module.exports = router;
