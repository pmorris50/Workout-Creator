const router = require('express').Router();
// const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes')
const exerciseRoutes = require('./exerciseRoutes')
const signupRoutes = require('./signup')
const homeEmail = require('./homeEmail')
// actual sub route so far is /api
// router.use('/auth', authRoutes);
router.use('/users', userRoutes)
router.use('/exercises', exerciseRoutes)
router.use('/signup', signupRoutes)
router.use('/homeEmail', homeEmail)


module.exports = router;
