const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'TAGST', //DB NAME
    'postgres', //USERNAME
    'm00nlex', //PASS
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
