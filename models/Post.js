const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
     user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
     },
     title:{
        type: String,
        required: true,
        trim: true,
     },
     description: {
        type: String,
        required: true,
     },
     post_status:{
        type: String,
        enum: ['draft', 'published', 'trashed'],
        default: 'draft',
     },
     timestamp:{
        type: Date,
        default: Date.now,
     }

});

const Post = mongoose.model('posts', postSchema);

module.exports = Post;