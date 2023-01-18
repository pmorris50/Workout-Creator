const router = require ('express').Router();
const { User } = require('../../models');

//CREATE new user 
router.post('/', async (req, res)=> {
    try {
        const dbUser= await User.create ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.loggedIn = true;
        res.status(200).json(dbUser);
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router; 