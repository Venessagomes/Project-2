var express = require('express');
var router = require('express').Router();
var usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.index);



module.exports = router;
