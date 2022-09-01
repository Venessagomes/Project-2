const Recipe = require('../models/recipe');



async function create(req, res) {
   let recipe = await Recipe.findById(req.params.id) 
   let newObj = {user:req.user.id,...req.body}
      recipe.reviews.push(newObj);
     await recipe.save()
        res.redirect(`/recipes/${recipe._id}`);
      };


async function delReview(req,res,next) {
    try{
 let recipe = await Recipe.findById(req.params.recipeId)
 let idx = recipe.reviews.findIndex(rev=>rev._id.toString() === req.params.reviewId.toString())
  recipe.reviews.splice(idx,1)
  recipe.save()
  res.redirect(`/recipes/${req.params.recipeId}`)
    }catch(error) {
        console.log(error)
    }
}

async function updateRev(req,res,next) {
    try{
 let recipe = await Recipe.findById(req.params.recipeId)
 let idx = recipe.reviews.findIndex(rev=>rev._id.toString() === req.params.reviewId.toString())
  recipe.reviews[idx].content = req.body.content
  recipe.reviews[idx].rating = req.body.rating
  recipe.save()
  res.redirect(`/recipes/${req.params.recipeId}`)
    }catch(error) {
        console.log(error)
    }
}



module.exports = { create, delete:delReview, update:updateRev};