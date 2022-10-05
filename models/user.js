const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connection');
const bcrypt = require('bcrypt');
const user = connection.define('user', {

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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6],
    },
  }

},
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',

  })
user.beforeCreate(async user => {
  const userData = user.dataValues; userData.password = await bcrypt.hash(userData.password, 10);
});



module.exports = user;