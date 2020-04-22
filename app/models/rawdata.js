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
        type: Sequelize.STRING,
        primaryKey: true
    },
    longitude: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    maxDistance: {
        type: Sequelize.STRING
    },
    meanDistance: {
        type: Sequelize.STRING
    },
    timeRatio: {
        type: Sequelize.STRING
    },
    hourSpent: {
        type: Sequelize.STRING
    },
    count: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
})

module.exports = {
    sequelize: sequelize,
    GpsDatas: GpsDatas
}


