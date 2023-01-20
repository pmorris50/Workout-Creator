const router = require("express").Router();
const { Exercise } = require('../../models');
//api/exercises
router.post('/', async (req, res) => {

    try {
        console.log('Hit Route')
        const UserEquip = await Exercise.findAll({
            where: { equipment_id: req.body.equipId }
        })
        console.log('user Equipment:', UserEquip)
        const exercises = UserEquip.map((eachEquip) => eachEquip.get({ plain: true }));
        console.log(exercises)
        res.json(exercises)

    } catch (err) {
        console.log(err)
    }
})




module.exports = router