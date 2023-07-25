const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

//call url
router.post('/register', [
     check('name', 'Name is Required').notEmpty(),
     check('email', 'Email is Required').notEmpty(),
     check('password', 'Password must be 6 characters Long').isLength({
        min:6,
     }),
], authController.register);

router.post('/login',[
    check('email', 'Email is Required').notEmpty(),
    check('password', 'Password is Required').notEmpty()
], authController.login);

module.exports = router;