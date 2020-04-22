const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/gps', require('./api/gps/index'))
app.use('/user', require('./api/user/index'))

app.listen(port, () => {
    console.log('API sever work!')

    const ORM = require('./models/rawdata')
    ORM.sequelize.sync({force: false})
    .then(() => {
        console.log('Databases sync')
    })

    const ORM2 = require('./models/user')
    ORM2.sequelize.sync({force: false})
    .then(() => {
        console.log('user table sync')
    })
})