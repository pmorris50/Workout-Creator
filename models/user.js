const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },


        first_name: {
            type: DataTypes.STRING,
            allNull: false,
        },


        last_name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, //only one account per email
            validate:{
                isEmail: true, //checks to see if it is an actual email
            },
        },
        password: {
            type: DataTypes.STRING,
            allwoNull: false,
            validate:{
                len: [8], //must be 8 characters
                notEmpty: true, //will not allow empty strings
                matches: {
                    args: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/, //makes sure password matches below message
                    msg: "Password must contain at least one capital letter, one number, and one special character"
                  } 
            }
        }, //all above is needed(allowNull: false) and user can create profile with just this information

        //if any below is null, then user will have a modal pop up asking to please complete profile with a not now button/complete profile button
        equipment: {
            type: DataTypes.STRING,
            equipment_list: {
            type: DataTypes.ENUM('Dumbbells', 'Barbell', 'Rack'), //Exercise table will need to know what equipment the User has
            array: true, 
            },
            //setting equipment_list then an ENUM list, set to array allows multiple to be selected to user_equipment col
            allNull: true,
        },
        goal: {
            type: DataTypes.ENUM('Add Mass', 'Fat loss', 'Increase Max Strength', 'Increase Endurance'),
            allowNull: false, //exercise will also need this field. Each exercise will have a one to one relationship with this field.  //probably will want to put in another table? or maybe just get rid of this b/c its to much work
        }
    }  
)