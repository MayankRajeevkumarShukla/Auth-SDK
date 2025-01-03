const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{type:String,require:true,trim:true},
    password:{type:String,require:true,minlength:6},
    email:{type:String,require:true,unique:true,lowercase:true},
    createdAt:{ type: Date, default: Date.now }
})
const User = mongoose.model('User',userSchema)
module.exports=User