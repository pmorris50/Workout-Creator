const router = require('express').Router();
const User = require('../models/user');
const Equipment = require('../models/equipment');
const Exercise = require('../models/exercises');
const withAuth = require('../utils/auth');


router.get('/', (req, res)=>{
    console.log('/ get homepage');
    res.render('homepage');
});
module.exports = router;



router.get('/profile', withAuth, async (req, res) =>{
    try{
        const userData = await User.findbyPK(req.session.user_id,{
            attributes: {exclude: ['password']}, 
            include: [{model: Equipment}, {model: Exercise}],
        });
        const user = userData.get({plain: true});
        res.render('profile',{
            ...user, 
            logged_in: true
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/login', (req, res)=> {
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('login');
})



module.exports = router;
