const router = require('express').Router();
// const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes')
// actual sub route so far is /api
// router.use('/auth', authRoutes);
router.use('/users', userRoutes)

module.exports = router;
