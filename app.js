const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const api = require('./routes/api');


//cors
app.use(cors());

//db connection
connectDB();

// Middleware to parse JSON data in the request body
app.use(express.json());

//routes
app.use('/api',api);


//get req
app.get('/', (req,res) =>{
   res.send("Hello");
});

//listen port
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
