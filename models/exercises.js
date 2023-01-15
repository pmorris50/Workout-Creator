const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        muscle_group:{
            type: DataTypes.ENUM('Core', 'Legs', 'Chest', 'Back', 'Arms'),
            allowNull: false
            //ENUM allows for a list to be input as the data. IE can select from x, y, z. NOT TESTED  //enum only allows for one option
        }, 
        //demo links from https://www.muscleandstrength.com/
        demo_link: { 
                type: DataTypes.STRING,
                allowNull: true
            
        }, 



    },
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'exercise'
    },
);

module.exports = Exercise;