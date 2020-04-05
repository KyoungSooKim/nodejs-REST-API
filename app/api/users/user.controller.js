const models = require('./../../models/rawdata')

exports.list = function(req, res) {
    console.log("request come in")
    models.GpsDatas.findAll()
    .then(GpsData => res.json(GpsData))
}

exports.read = function(req, res) {
    var author = req.params.author
    console.log(author)
    models.GpsDatas.findAll({
        where: {
            author: author
        }
    }).then(GpsData => {
        if(!GpsData){
            return res.status(404).json({
                success: "No",
                err: 'No User'
            })
        }
        return res.json(GpsData)
    })
}

exports.create = function(req, res) {
    var obj = req.body
    for(i = 0; i < obj.length; i++){
        tmp = function(i){       
            models.GpsDatas.findOne({
                where: {
                    author: obj[i].author,
                    latitude: obj[i].latitude,
                    longitude: obj[i].longitude
                }
            }).then(function(GpsData){
                if(!GpsData){
                    models.GpsDatas.create({
                        author: obj[i].author,
                        latitude: obj[i].latitude,
                        longitude: obj[i].longitude,
                        maxDistance: obj[i].maxDistance,
                        meanDistance: obj[i].meanDistance,
                        timeRatio: obj[i].timeRatio,
                        hourSpent: obj[i].hourSpent
                    }) 
                }
            })
        }
        tmp(i)
    }
    res.status(201).json({success: "Yes"})
}

exports.delete = function(req, res) {
    var author = req.params.author
    models.GpsDatas.findOne({
        where: {
            author: author
        }
    }).then(GpsData => {
        if(!GpsData){
            return res.status(404).json({
                success: 'No',
                err: 'Not Found'
            })
        }else {
            models.GpsDatas.destroy({
                where: {
                    author: author
                }
            }).then(() => res.status(204).json({success: "Yes"})) // responce not work
        }
    })
}

exports.test = function(req, res) {
    console.log(req.body)
}
