const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors')


//@desc      user sending mail
//@route    POST '/api/send'
//@access    public
router.post('/send', asyncHandler( cors(), async (req, res)=>{
  
   //the body container
    let {text} = req.body;

    //creating transport for the mail using our .env infor
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_Host,
      port: process.env.MAIL_Port,
      auth: {
          user: process.env.MAIL_Username,
          password: process.env.MAIL_Password
      }
    })
   
    await transport.sendMail({
        from: process.env.MAIL_From,
        to: "to@smtp.mailtrap.io",
        subject: "test email",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, chidera</p>
         </div>
    `
    })

}));



module.exports = router;