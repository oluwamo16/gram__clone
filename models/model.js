import mongoose from 'mongoose'
const mongoosePaginate = require("mongoose-pagination-wizard")



const Types = mongoose.Schema.Types




const UserDataSc = new mongoose.Schema({

    password:{type:String,required:true},
    username:{type:String,required:true},
    site:{type:String,required:true},
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      },
  
    })

UserDataSc.plugin(mongoosePaginate)

export const UserData =  mongoose.models.UserMod ||  mongoose.model('UserMod', UserDataSc);


