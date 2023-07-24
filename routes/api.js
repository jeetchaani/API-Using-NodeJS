const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//call url
router.get('/register',authController.register);

module.exports = router;