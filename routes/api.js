const express = require('express');
const router = express.Router();
const { loginValidation, registerValidation } = require('../middlewares/authValidation');
const { createPostValidator } = require('../middlewares/postValidation');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const postController = require('../controllers/postController');

//call url
router.post('/register', registerValidation, authController.register);

router.post('/login',loginValidation , authController.login);


//protected routes for post
router.post('/post', authMiddleware, createPostValidator, postController.createPost );


module.exports = router;