const mongoose = require("mongoose");

const UserSechma = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    city:String
})

const   UserModel = mongoose.model("users", UserSechma);
module.exports = UserModel;
