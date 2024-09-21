const express = require("express");

const router = express.Router();

const {SignupController} = require("../controller/SingupController");

router.post("/user" , SignupController)

module.exports = router