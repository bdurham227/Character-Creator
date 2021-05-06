const router = require('express').Router();

//require routes to hit url endpoints
const userRoutes = require('../api/user-routes');
const accountRoutes = require('../api/acccount-routes');
const characterRoutes = require('../api/character-routes');

//middleware
router.use('/user', userRoutes);
router.use('/account', accountRoutes);
router.use('/character', characterRoutes);

module.exports = router;