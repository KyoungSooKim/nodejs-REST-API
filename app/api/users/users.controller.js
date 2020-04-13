const models = require('./../../models/users')
const secretObj = require('./../../config/jwt')
const jwt = require('jsonwebtoken')
exports.create = function(req, res) {
    var obj = req.body
    for(i = 0; i < obj.length; i++){
        tmp = function(i){       
            models.User.findOne({
                where: {
                    name: obj[i].name
                }
            }).then(function(User){
                if(!User){
                    models.User.create({
                        name: obj[i].name,
                        password: obj[i].password,
                    }) 
                }
            })
        }
    }
    res.status(201).json({success: "Yes"})
}

exports.login = function(req, res) {
    let token = jwt.sign({
        name: req.query.name
    },
    secretObj.secret ,
    {
        expiresIn: '10m'
    })
    
    models.User.findOne({
        where: {
            name: req.query.name,
        }
    }).then(function(User){
        if(User.password == req.query.password){
            res.json({
                token: token
            })
        }
    })
}


