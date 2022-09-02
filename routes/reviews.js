var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');


router.post('/:id', reviewsCtrl.create);
router.post('/:recipeId/:reviewId/delete', reviewsCtrl.delete);
router.post('/:recipeId/:reviewId/update', reviewsCtrl.update);


module.exports = router;