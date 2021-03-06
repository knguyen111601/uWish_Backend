require("dotenv").config()
const mongoose = require("mongoose")

const {DATABASE_URL} = process.env

// connect to mongoose
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

// connection events
mongoose.connection
.on("open", ()=>{console.log("You are connected to Mongo")})
.on("close", ()=>{console.log("Disconnected from Mongo")})
.on("error", (error)=>{console.log(error)})

module.exports = mongoose