const key = require('../config/dbConfig')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(key.database, key.username, key.password, {
    host: 'localhost',
    dialect: 'mysql'
})

const User = sequelize.define('user',{
    user: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    }
})

module.exports = {
    sequelize: sequelize,
    User: User
}

