const sequelize = require('../db/db.js')
const {DataTypes} = require('sequelize')

const Tag = sequelize.define('tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

module.exports = {
    Tag
}