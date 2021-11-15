///////////////////////////////////////////////////////
// Import dependencies 
///////////////////////////////////////////////////////
const mongoose = require("../db/connection")

///////////////////////////////////////////////////////
// Create Wishlist Model
///////////////////////////////////////////////////////
const {model, Schema} = mongoose

// Wishlist Schema
const wishlistSchema = new Schema({
    name: String,
    image: String,
    price: String,
    url: String
})

const Wishlist = model("Wishlist", wishlistSchema)

// Export model
module.exports = Wishlist