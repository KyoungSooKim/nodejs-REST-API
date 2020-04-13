const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const controller = require('./gps.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(verifyToken);

module.exports = router;
// show list
router.get('/', controller.list);
// show author
router.get('/:author', controller.read);
// delete author
router.delete('/:author', controller.delete);
// create row
router.post('/', controller.create);

router.post('/test', controller.test)

//Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization']
    // Check if bearer is udefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        //Forbidden
        console.log(req.headers)
        res.sendStatus(403);
    }
}