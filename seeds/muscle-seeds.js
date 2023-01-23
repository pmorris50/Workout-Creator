const { Muscle } = require('../models');
const muscleData = [
    {
        "name": "Core"
    },
    {
        "name": "Arms"
    },
    {
        "name": "Legs"
    },
    {
        "name": "Back"
    },
    {
        "name": "Chest"
    }
]




const seedMuscle = () => Muscle.bulkCreate(muscleData);

module.exports = seedMuscle;