const mongoose = require("mongoose")

const  UserSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true,
      },
      phoneno:{
        type:Number,
        required:true,
      }
})


module.exports = mongoose.UserSchema("User" ,UserSchema)