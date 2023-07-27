const Post = require('../models/Post');
const { validationResult } = require('express-validator');

const createPost = async (req, res) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
          try {
               //const { title, description, post_status } = req.body;
                  

                 const  userId  = req.user;
                 return res.json({ userId });
          } catch (error) {
            
          }
}

module.exports = { createPost };