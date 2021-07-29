const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    Surname: String,
    year: Number
})

const User = mongoose.model("User" , userSchema)

module.exports = User