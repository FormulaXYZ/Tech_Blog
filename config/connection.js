const sequelize = require('sequelize');
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelizeConnection = process.env.JAWSDB_URL
? new sequelize(process.env.JAWSDB_URL)
: new sequelize(process.env.DB_name,process.env.DB_USER,process.env.DB_PW,{
    host:'localhost',
    dialect:'mysql',
    port: 3306
});

module.exports = sequelize;