const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors')

const  { errorHandler } = require('./Middleware/errorHandler');
const mailRouter = require('./Router/mailRoute')

//external middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//all Router
app.use('/api', mailRouter)

//for error handler
app.use(errorHandler)


//local host connection
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
 console.log('server is running...');
});
