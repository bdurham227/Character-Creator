const router = require('express').Router();
const { Character, Account } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//         const characterData = await Character.findAll({
//             // attributes: ["character_name", "character_class", "character_level"],
//             include: [
//                 {
//                     model: Account,
//                     // attributes: ["account_name"],
//                 },
//             ],
//         });
//         const characters = characterData.map((character) => character.get({ plain: true }));
//         res.render('all', { characters })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes:  ["character_name", "character_class", "character_level"],
            include: [
                {
                    model: Account,
                    attributes: ["account_name"],
                }
            ]
        });
        const characters = characterData.map((character) => character.get({ plain: true }));
        res.render('all', { characters });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/character/:id', async (req, res) => {
    try {
        const characterData = await Character.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!characterData) {
            res.status(404).json({ message: `No Character found with the ID ${req.params.id} `});
            return;
        }
        const character = characterData.get({ plain: true });
        res.render('character', character);



    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router;