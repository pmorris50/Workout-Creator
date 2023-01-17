const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Equipment extends Model {}

Equipment.init(
    {
  id: {
    type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }

  },    {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'equipment'
},  
),





module.exports = Equipment