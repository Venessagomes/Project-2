const User = require('../models/user');
const Recipe = require('../models/recipe')
  
  
   function index(req, res,next) {
      res.render('index', { user: req.user});
    };
  
  
  module.exports = { index };
  