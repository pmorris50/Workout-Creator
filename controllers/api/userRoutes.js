const router = require('express').Router();
const { User } = require('../../models'); //object destructuring

// signup route via api -> POST /api/users
// router.post('/', async (req, res) => {
//     try {
        
//         const userData = await User.create(req.body);
//         req.session.save(() => {

//             req.session.user_id = userData.id;
//             req.session.logged_in = true;
//             res.status(200).json(userData);
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// login route -> POST /api/users/login
router.post('/login', async (req, res) => {
    console.log(req.body)
    // console.log('email', req.body.email)
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log('email', req.body.email)
        if (!userData) {
            console.log('invalid user email')
            res.status(500).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }
        console.log('email was found successfully')
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            console.log("invalid password");
            res.status(500).json({
                message: 'Incorrect email or password, please try again'
            });
            return;
        }
        console.log('password', req.body.password)
        console.log('password check complete')
        req.session.save(() => {

            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// logout route -> POST /api/users/logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;

