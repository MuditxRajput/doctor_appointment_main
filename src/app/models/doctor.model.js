import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
       type:String,
       required : true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    contact_number:{
        type:Number,
        required:true,
        unique:true,
    },
    yr_of_exp:{
        type:Number,
        required:true,
        min:0,
    },
    photo:{
        type:String,
    },
    department:{
        type:mongoose.Types.ObjectId,
        ref : "Department",
        required:true,
    }
},{timestamps:true})

export const Doctor = mongoose.models.Doctor || mongoose.model("Doctor",doctorSchema);