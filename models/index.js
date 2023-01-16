const User = require('./user');
const Exercise = require('./exercises');
const Equipment = require('./equipment')



User.hasMany(Equipment, {
    onDelete: 'SET NULL'  //When equipment is deleted we do not want to delete the User. When a user is deleted we do not want to delete the equipment
    //not sure what goes in here 
})


Equipment.hasMany(User,{ 
    onDelete: 'SET NULL' //do not want to delete parent
    //not sure what goes in here 
})


Exercise.hasOne(Equipment, {

})


Equipment.hasMany(Exercise,  {
    onDelete: 'CASCADE' //when a piece of equipment is deleted all accociated exercises are deleted
    //not sure what goes in here 
})

