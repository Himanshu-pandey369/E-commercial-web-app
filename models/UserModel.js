const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017")

const userSchema = mongoose.Schema({
    fullName:String,
    Email:String,
    Password:String,
    cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contect:Number,
    picture:String

})

module.exports = mongoose.model("user",userSchema)