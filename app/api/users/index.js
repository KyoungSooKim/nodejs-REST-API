const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const controller = require('./users.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;
// show list
router.get('/', controller.login);
// // show author
// router.get('/:author', controller.read);
// // delete author
// router.delete('/:author', controller.delete);
// // create row
router.post('/', controller.create);

// router.post('/test', controller.test)