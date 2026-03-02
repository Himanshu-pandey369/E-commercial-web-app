const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullName:{String,
        minLength:3,
        trim:true
    },
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