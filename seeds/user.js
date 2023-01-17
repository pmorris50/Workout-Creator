const { User } = require('../models'); //putting curly brackets around exercise cause it to become undefined?
const userData = [
    {
        "first_name": "Patrick",
        "last_name": "Morris",
        "email": "Patrickmorris532@gmail.com",
        "password": "Password123!"
    },
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUsers;