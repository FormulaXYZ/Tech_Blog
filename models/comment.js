const sequelize = require('sequelize');
const connection = require('..config/connection');
const comment = require('./user');

const comment = connection.define('comment',{

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
        },
        post_id: {
          type:DataTypes.INTEGER,
          allowNull:false,
          reference:{
             model:'post',
             key:'id'
          }
      }
    }
    },
      {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
      
})


module.exports = comment;