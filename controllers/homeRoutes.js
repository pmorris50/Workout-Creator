const router = require('express').Router();

router.get('/', (req, res)=>{
    console.log('/ get homepage');
    res.render('homepage');
    
});

module.exports = router;