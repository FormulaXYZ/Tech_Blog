const sequelize = require('sequelize');
const connection = require('..config/connection');
const bcrypt = require('bcrypt');
const user = connection.define('user',{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10],
        },
      }
    
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
      
})
user.beforeCreate(async user =>{userDat.password = await bcrypt.hash(userData.password, 10);});

module.exports = user;