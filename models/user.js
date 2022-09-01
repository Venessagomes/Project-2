const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    googleId: {
        type: String
  }}, {
    timestamps: true 
  });
  
  module.exports = mongoose.model('User', userSchema);