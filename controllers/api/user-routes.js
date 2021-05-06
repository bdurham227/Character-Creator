const { User, Account, Character } = require('../../models');
const router = require('express').Router();


//get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        const users = userData.map((user) => user.get({ plain: true }));
        res.render('all', { users });
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;