const router = require('express').Router();
const nodemailer = require("nodemailer");
const { createTransport } = require("nodemailer");
const { User } = require('../../models');

//CREATE new user 
router.post('/', async (req, res) => {
    const newUserOutput = `<p>A new user has signed up for bootycamp</p>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
      `
    const welcomeEmail = `<body style="font-family: Arial, sans-serif;">
    <div style="background-color: #3f51b5; color: white; padding: 20px; text-align: center;">
      <h1 style="margin: 0;">Welcome to BootyCamp</h1>
    </div>
    <div style="padding: 20px;">
      <p>Dear, <b>${req.body.firstName} ${req.body.lastName}</b>,</p>
      <p>We are thrilled to have you join our BootyCamp community! We are excited to help you on your fitness journey and reach your goals.</p>
      <p>You can access your account by logging in with the following email: <b>${req.body.email}</b></p>
      <p>Please let us know if you have any questions or concerns. We are here to help.</p>
      <p>Best regards,</p>
      <p>The BootyCamp Team</p>
    </div>
  </body>`
    console.log('Create route hit')
    try {
        const dbUser = await User.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.user_id = dbUser.id;
            req.session.logged_in = true;
            res.status(200).json(dbUser);
        }) //FIX THIS
        // req.session.loggedIn = true;
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'bootycampcoach@gmail.com',
            pass: 'vrdbxzeqnbayntuc'
        }
    });

    let mailOptions = {
        from: '"Booty Camper Contact" <bootycampcoach@gmail.com.com>',
        to: 'bootycampcoach@gmail.com',
        subject: "Bootycamp New User",
        text: 'Hello World',
        html: newUserOutput,
    };
    let sendToUser = {
        from: '"Booty Camper Contact" <bootycampcoach@gmail.com.com>',
        to: `${req.body.email}`,
        subject: "Your Journey Begins",
        text: 'Hello World',
        html: welcomeEmail,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('message send: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('homepage', { msg: 'email has been sent' })
    });

    transporter.sendMail(sendToUser, (error,info) =>{
        if (error) {
            return console.log(error);
        }
        console.log('message send: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('homepage', { msg: 'email has been sent' })
        
    })

});

module.exports = router; 