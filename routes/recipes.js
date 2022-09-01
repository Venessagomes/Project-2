var express = require('express');
var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');


router.get('/', recipesCtrl.index);
router.get('/:id',recipesCtrl.show);


module.exports = router