const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_Equipment extends Model { }

User_Equipment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },  equipment_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'equipment',
                key: 'id',
            }
    }


    })




/**
 * UE TABLE
 * id   userid  eid
 * 1    3       4
 * 2    3       6
 * 3    3       12
 * 
 * 64bits max   64 bits max 64 bits max => every record is 64x3 bits
 * so if im looking for the id of 4 mysql just jumps 64x3x4bits ahead in the binary vesion of the data
 * 
 * find all in ue table where user id = 3 =>
 */