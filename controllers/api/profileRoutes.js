const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Exercise, Equipment } = require('../../models');
const { appendFile } = require('fs');

// get all Equipment
router.get('/', async (req, res)=>{
    try{
        const newEquipment = await Equipment.findAll(
            {
                include: [{ model:Exercise}]
            }
        );
        res.status(200).json(newEquipment);
    }catch (err){
        res.status(500).json(err);
    }
});

// get equipment by id 
router.get ('/:id', async (req, res)=> {
    try{
        const newEquipment = await Equipment. findByPk(req.params.id, {
            include: [{ model: Exercise}]
        });
        if (!newEquipment){
            res.status(404).json({message: 'No Equipment with this ID'});
            return;
        };
        res.status(200).json(newEquipment);
    }catch (err){
        res.status (500).json(err);
    }
});

//create a new equipment 
router.post('/', async (req, res)=>{
    try {
        const newEquipment = await Equipment.create({
            id: req.body.id,
            equipment_name: req.body.equipment_name,
        });
        res.status(200).json(newEquipment);
    }catch (err){
        res.status(400).json(err);
    };
});


// delet equipment by ID 
router.delete('/:id', async (req, res)=> {
    try{
        const newEquipment = await  Equipment.destroy({
            where:{
                id: req.params.id,
            }
        });
        if (!newEquipment){
            res.status(404).json({message: 'No equipment with this id'});
            return;
        };
        res.status(200).json(newEquipment);
    }catch (err){
        res.status(500).json(err);
    };
});




module.exports = router;

