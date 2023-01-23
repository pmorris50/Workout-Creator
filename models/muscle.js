const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Muscle extends Model {}

Muscle.init(
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
    modelName: 'muscle'
},  
),





module.exports = Muscle