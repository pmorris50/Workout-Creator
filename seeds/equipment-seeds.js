const { Equipment } = require('../models');
const equipmentData = [
    {
        "name": "Bench"
    },
    {
        "name": "Barbell"
    },
    {
        "name": "Dumbbells"
    },
    {
        "name": "Rack"
    },
    {
        "name": "No_Equipment"
    }
]




const seedEquipment = () => Equipment.bulkCreate(equipmentData);

module.exports = seedEquipment;