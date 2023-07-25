const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');


const register = async (req,res) =>{
        const { name, email, password } = req.body;
        //validate user input
        const errors = validationResult(req);
        if(!errors.isEmpty()){
              return res.status(400).json({ message : 'Validation Errors',
                errors: errors.array() });
        }

           try {
                  let user = await User.findOne({ email });
                  if(user){
                    return res.status(400).json({ message : 'User Already Exist' });
                  }  
                const salt = await bcrypt.genSalt(10);
                const hassedPassword = await bcrypt.hash(password, salt);
               user = new User({
                name,
                email,
                password :hassedPassword
               });
              await user.save();
              res.status(201).json({
                  message: 'User Created',
                  user: user
              });
           } catch (error) {
                  res.status(500).json({
                       message :'Internal Server Error'
                  });
           }
    
}

const login = async (req, res) =>{
      const { email, password } = req.body;

      //validate the errors
     const errors = validationResult(req);
       if(!errors.isEmpty()){
        return res.status(400).json({ message: 'Validation Error',
          errors: errors.array()
         });
       }
       
       try {
            const user = await User.findOne({ email });
            if(!user) {
              return res.status(400).json({ message: 'Invalid Credentials' });
            }
           const isPasswordValid = await bcrypt.compare(password, user.password);
             if(!isPasswordValid){
                return res.status(400).json({ message: 'Invalid Password' });
             }
           const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, {
            expiresIn : '1d'
           });
           return res.status(200).json({ message : 'Login',
            token: token });
            
       } catch (error) {
          console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
       }
}

module.exports = { register, login };