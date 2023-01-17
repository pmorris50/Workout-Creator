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
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    console.log('have we been tricked?')
    if (req.session?.logged_in === undefined || !req.session?.logged_in) {
        res.render('login')
    } else {
        res.redirect('/profile');
        return;
    }
})

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/profile');
//         return;
//     }
//     res.render('login');
// })

module.exports = router;
