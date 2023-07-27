const { check } = require('express-validator');

const createPostValidator = [
    check('title').notEmpty().withMessage('Title is required.'),
    check('description').notEmpty().withMessage('Description is required.'),
  ];
  
  module.exports = {
    createPostValidator,
  };