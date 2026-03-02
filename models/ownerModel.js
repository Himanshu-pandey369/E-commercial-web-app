const mongoose = require("mongoose")

const ownerSchema = mongoose.Schema({
    fullName:{String,
        minLength:3,
        trim:true
    },
    Email:String,
    Password:String,
    product:{
        type:Array,
        default:[]
    },
    picture:String,
    Gstin:String

})

module.exports = mongoose.model("owner",ownerSchema);