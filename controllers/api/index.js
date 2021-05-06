const router = require('express').Router();

//require routes to hit url endpoints
const userRoutes = require('./user-routes');
const accountRoutes = require('./acccount-routes');
const characterRoutes = require('./character-routes');

//middleware
router.use('/user', userRoutes);
router.use('/account', accountRoutes);
router.use('/character', characterRoutes);

module.exports = router;