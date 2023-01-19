const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Equipment, Exercise } = require('../models')





router.get('/', (req, res) => {
    console.log('/ get homepage');
    res.render('homepage');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const equipmentData = await Equipment.findAll({})
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            // include: [{ model: Equipment }, { model: Exercise }],
        });
        const equipment = await equipmentData.map((element) => {
            return element.get({plain: true})
        })
        console.log("SERIALIZED", equipment)
        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
           equipment,
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

router.get('/signup', (req, res) => {
    console.log('/ get homepage');
    res.render('createUser');
});

module.exports = router;
