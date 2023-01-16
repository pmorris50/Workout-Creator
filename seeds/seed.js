const sequelize = require('../config/connection');
const Exercise  = require('../models/exercises');

const exerciseList = require('./exercisesData.json');

const seedDatabase = async () => {
    await sequelize.sync({force: true});
    const exercise = await Exercise.bulkCreate(exerciseList, {
        returning: true
    });


    process.exit(0);
}

seedDatabase();
