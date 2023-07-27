const { check } = require('express-validator');

const loginValidation = [
    check('email', 'Email is Required').notEmpty(),
    check('password', 'Password is Required').notEmpty()
];

const registerValidation = [
    check('name', 'Name is Required').notEmpty(),
    check('email', 'Email is Required').notEmpty(),
    check('password', 'Password must be 6 characters Long').isLength({
       min:6,
    }),
];

module.exports = { loginValidation, registerValidation };