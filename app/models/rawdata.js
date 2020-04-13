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
        type: Sequelize.DOUBLE(18,14),
        primaryKey: true
    },
    longitude: {
        type: Sequelize.DOUBLE(18,14),
        primaryKey: true
    },
    maxDistance: {
        type: Sequelize.DOUBLE(8,6)
    },
    meanDistance: {
        type: Sequelize.DOUBLE(8,6)
    },
    timeRatio: {
        type: Sequelize.DOUBLE(8,6)
    },
    hourSpent: {
        type: Sequelize.DOUBLE(8,6)
    },
    count: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
})

module.exports = {
    sequelize: sequelize,
    GpsDatas: GpsDatas
}


