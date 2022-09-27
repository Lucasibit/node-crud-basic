const Sequelize = require('sequelize')

const database = new Sequelize('AulaNodeComSql', 'lucas', 'admin123',
    {
        dialect:'mssql', host:'localhost', port: 8119
    });

database.sync();

module.exports = database;