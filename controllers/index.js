const router = require('express').Router();
const apiRoutes = require('./api');
//getting routes from controllers to render templates
const charRoutes = require('./api/character-routes');
const userRoutes = require('./api/user-routes');
const accountRoutes = require('./api/acccount-routes');


router.use('/api', apiRoutes);
// router.use('/', userRoutes);
// router.use('/', accountRoutes);
router.use('/', charRoutes);


router.use((req,res) => {
    res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;