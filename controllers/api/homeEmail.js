const nodemailer = require("nodemailer")
const { createTransport } = require("nodemailer");

const router = require("express").Router();

router.post('/', async (req, res) => {
    console.log(req.body)
    const output =
        `<p>You have a new contact request</p>
    <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
        </ul>
    <p>Message: ${req.body.message}</p>    
        `;
    //create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'bootycampcoach@gmail.com',
            pass: 'vrdbxzeqnbayntuc'
        },
    });

    //setup email data with unicode symbols
    let mailOptions = {
        from: '"Booty Camper Contact" <bootycampcoach@gmail.com.com>',  //sender address
        to: 'bootycampcoach@gmail.com',                   //list of receivers
        subject: "Bootycamp Contact Request",              //subject line
        text: 'Hello World',                 //plain text body      
        html: output,                 //html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('message send: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('homepage', {msg: 'email has been sent'})
    });

});






module.exports = router