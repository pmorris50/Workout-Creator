const sequelize = require('../config/connection');
const Exercise  = require('../models/exercises');
const seedExercises = require('./exercises-seeds');



const seedDatabase = async () => {
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedExercises();
    console.log(('\n----- EXERCISES SEEDED -----\n');
    
    process.exit(0);
    };
    




seedDatabase();
