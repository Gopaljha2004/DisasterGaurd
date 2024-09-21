const express = require("express");

const router = express.Router();

const {SignupController} = require("../controller/SingupController");
const {getAllUser} = require("../controller/getAllUser")

router.post("/user" , SignupController)
router.get("/getAllusers" , getAllUser)

module.exports = router