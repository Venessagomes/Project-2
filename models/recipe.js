const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema ({
content: {
    type: String,
    required: true
},
rating: {
    type: Number,
    min: 1, max: 5,
    default: 5
},
user: {
type: Schema.Types.ObjectId,
ref: "User"
}
}) 


const recipeSchema = new Schema ({
title: {
    type: String
},
ingredients: {
    type: Array
},
instructions: {
    type: String
},
img: {
    type: String
},
reviews: [reviewSchema]
})



module.exports = mongoose.model('Recipe', recipeSchema)