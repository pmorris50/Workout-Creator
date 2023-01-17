const sequelize = require('../config/connection');
const seedEquipment = require('./equipment-seeds');
const seedExercises = require('./exercises-seeds');
const seedUsers = require('./user');



const seedDatabase = async () => {
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedExercises();
    console.log(('\n----- EXERCISES SEEDED -----\n'));
    await seedEquipment()
    console.log('\n----------EQUIPMENT SEEDED-------\n')
    await seedUsers();
    console.log('\n----------USERS SEEDED-------\n')



    process.exit(0);
    };
    




seedDatabase();
