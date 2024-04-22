const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    fullname: { type: String, required: ['Fullname is required'] },
    email: { type: String, required: ['Email is required'] },
    password: { type: String, required: ['Email is required'] }

}, { timestamps: true })

const userModel = mongoose.model("User", UserSchema)
module.exports =  userModel