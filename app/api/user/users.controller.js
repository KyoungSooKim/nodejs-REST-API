const models = require('../../models/user')
const secretObj = require('../../config/jwt')
const jwt = require('jsonwebtoken')

exports.create = function(req, res) {
    var obj = req.body
    for(i = 0; i < obj.length; i++){
        tmp = function(i){     
            models.User.findOne({
                where: {
                    user: obj[i].user
                }
            }).then(function(resUsers){
                if(!resUsers){
                    models.User.create({
                        user: obj[i].user,
                        password: obj[i].password,
                    }) 
                }
            })
        }
        tmp(i)
    }
    res.status(201).json({success: "Yes"})
}

exports.auth = function(req, res) {
    let token = jwt.sign({
        user: req.query.user
    },
    secretObj.secret ,
    {
        expiresIn: '10m'
    })
    
    models.User.findOne({
        where: {
            user: req.query.user,
        }
    }).then(function(resUsers){
        if(resUsers.password == req.query.password){
            res.json({
                token: token
            })
        }
    })
}


