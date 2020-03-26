const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const controller = require('./user.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;
// show list
router.get('/', controller.list);
// show author
router.get('/:author', controller.read);
// delete author
router.delete('/:author', controller.delete);
// create row
router.post('/', controller.create);