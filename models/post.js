const sequelize = require('sequelize');
const connection = require('..config/connection');
const post = require('./user');

const post = connection.define('post',{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      content: {
        type: DataTypes.TEXT,
        allowNull: false
              },
    user_id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        reference:{
           model:'user',
           key:'id'
        }
    }
    },
      {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
      
})


module.exports = post;