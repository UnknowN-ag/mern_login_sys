var express = require('express');
var userController = require('../controller/user.controller');
var router = express.Router();

router.post('/user', userController.create);
router.get('/user', userController.login);

module.exports = router;