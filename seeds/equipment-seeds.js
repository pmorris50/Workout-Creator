const Equipment = require('../models/equipment');
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
}
]




const seedEquipment = () => Equipment.bulkCreate(equipmentData);

module.exports = seedEquipment;