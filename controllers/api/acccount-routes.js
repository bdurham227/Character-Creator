const router = require('express').Router();
const { User, Account, Character } = require('../../models');


//get all accounts
router.get('/', async (req, res) => {
    try {
        const accountData = await Account.findAll();
        const accounts = accountData.map((account) => account.get({ plain: true}));
        res.render('all', { accounts });


    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;