const User = require('./user');
const Exercise = require('./exercises');
const Equipment = require('./equipment')



User.belongsToMany(Equipment, {
    through: 'user_equipment',
    onDelete: 'SET NULL'  //When equipment is deleted we do not want to delete the User. When a user is deleted we do not want to delete the equipment
    //not sure what goes in here 
})


// Equipment.belongsToMany(User,{
//     through: 'equipment_user', 
//    // onDelete: 'SET NULL' //do not want to delete parent
//     //not sure what goes in here 
// })


Exercise.hasOne(Equipment, {
    foreignKey: 'equipment_id',
    allowNull: true,
    //onDelete: 'CASCADE'
})


Equipment.hasMany(Exercise, {
    foreignKey: ''
    // onDelete: 'SET NULL' //when a piece of equipment is deleted all accociated exercises are deleted
    //not sure what goes in here 
})


module.exports = {
    Equipment, Exercise, User
}
