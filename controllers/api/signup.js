const router = require ('express').Router();
const { User } = require('../../models');

//CREATE new user 
router.post('/', async (req, res)=> {
    console.log('Create route hit')
    try {
        const dbUser= await User.create ({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(()=>{
            req.session.user_id = dbUser.id;
            req.session.logged_in = true;
            res.status(200).json(dbUser);
        }) //FIX THIS
        // req.session.loggedIn = true;
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router; 