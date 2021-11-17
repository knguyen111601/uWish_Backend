///////////////////////////////////////////////////////
// Import dependencies 
///////////////////////////////////////////////////////
const express = require("express") // express for the router
const Wishlist = require("../models/wishlist") // wishlist model
const auth = require("../auth")
// THE WAY THIS WORKS IS BY PUTTING AUTH BEFORE (REQ,RES) IN EVERY ROUTE
// DO THIS LATER AFTER WE GOT THE SITE ALL WORKING
///////////////////////////////////////////////////////
// Create Router
///////////////////////////////////////////////////////
const router = express.Router()

///////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////

// Index Route - get route
router.get("/wishlist", async (req,res)=>{
    try {
        res.json(await Wishlist.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create Route - post request
router.post("/wishlist", async (req, res)=>{
    try {
        res.json(await Wishlist.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update Route - put request
router.put("/wishlist/:id", async (req,res)=>{
    try {
        res.json(await Wishlist.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Delete Route - delete request
router.delete("/wishlist/:id", async (req, res)=>{
    try {
        res.json(await Wishlist.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Export Router
module.exports = router