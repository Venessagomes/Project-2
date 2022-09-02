const Recipe = require('../models/recipe')
const User = require('../models/user');


async function index(req,res,next) {
    try{
        let allRecipes = await Recipe.find({})
        res.render('recipes/index', {allRecipes, user: req.user})
    }catch(error) {
        console.log(error)
    }
}


async function show(req,res,next) {
    try{
       let recipe = await Recipe.findById(req.params.id)
       res.render('recipes/show', {recipe})
    }catch(error){
        console.log(error)
    }
}



module.exports = { index, show}