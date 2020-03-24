const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', require('./api/users/index'))

app.listen(port, () => {
    console.log('API sever work!')

    const ORM = require('./models/rawdata')
    ORM.sequelize.sync({force: false})
    .then(() => {
        console.log('Databases sync')
    })
})

module.exports = app;