import mongoose from "mongoose";

const registrationScheme = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        
        type:String,
        required:true,
    }
    // },
},{timestamps:true})

export const Regsitration = mongoose.models.Regsitration || mongoose.model("Regsitration",registrationScheme);