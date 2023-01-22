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
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('message send: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('homepage', { msg: 'email has been sent' })
    });

});

module.exports = router; 