const key = require('./../config/dbConfig')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(key.database, key.username, key.password, {
    host: 'localhost',
    dialect: 'mysql'
})

const GpsDatas = sequelize.define('gpsDatas',{
    author: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    latitude: {
        type: Sequelize.FLOAT,
        primaryKey: true
    },
    longitude: {
        type: Sequelize.FLOAT,
        primaryKey: true
    },
    maxDistance: {
        type: Sequelize.FLOAT
    },
    meanDistance: {
        type: Sequelize.FLOAT
    },
    timeRatio: {
        type: Sequelize.FLOAT
    },
    hourSpent: {
        type: Sequelize.FLOAT
    }
})

module.exports = {
    sequelize: sequelize,
    GpsDatas: GpsDatas
}


