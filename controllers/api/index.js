const router = require('express').Router();
const authRoutes = require('./authRoutes');
const homeRoutes = require('../homeRoutes')
router.use('/auth', authRoutes);
router.use('/home', homeRoutes);

module.exports = router;
