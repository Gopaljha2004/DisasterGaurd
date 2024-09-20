const express = require('express');
const router = express.Router();
const SingupController = require("../controller/SingupController")

router.post('/signup', SingupController);

module.exports = router;
