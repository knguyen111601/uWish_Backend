require("dotenv").config()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {Router, response} = require("express")
const router = Router()
const {SECRET} = process.env

router.post("/signup", async (req, res)=>{
    try {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const newUser = await User.create(req.body)
    res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({error})
    }
});

router.post("/login", async (req, res)=>{
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if (user) {
            const match = await bcrypt.compare(password, user.password)
            const id = user._id
            const bio = user.bio
            const pfp = user.pfp
            if (match) {
                const token = await jwt.sign({username}, SECRET)
                res.status(200).json({token, username, id, bio, pfp})
            } else {
                res.status(400).json({error: "PASSWORD DOES NOT MATCH"})
            }
        } else {
            res.status(400).json({error: "USER DOES NOT EXIST"})
        }
    } catch (error) {
        res.status(400).json({error})
    }
})

router.get("/:id", async (req,res)=>{
    try{
        res.status(200).json(await User.findById(req.params.id))
    } catch (error) {
        res.status(400).json({error})
    }
})

router.put("/:id", async(req, res)=>{
    try{
        res.status(200).json(await User.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router