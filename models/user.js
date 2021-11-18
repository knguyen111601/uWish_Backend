const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    pfp: {type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
    bio: {type: String, default: ""}
}, {timestamps: true})

const User = model("User", userSchema)

module.exports = User