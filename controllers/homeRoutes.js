const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Equipment, Exercise } = require('../models')

router.get('/', (req, res) => {
    console.log('/ get homepage');
    res.render('homepage');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findbyPK(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Equipment }, { model: Exercise }],
        });
        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    console.log('have we been tricked?')
    // if (req.session?.loggedIn === undefined || !req.session?.loggedIn) {
    if (!req.session.loggedIn) {
        res.render('login');
    } else {
        res.redirect('/profile');
        return;
    }
})

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/profile');
//         return;
//     }
//     res.render('login');
// })

module.exports = router;
