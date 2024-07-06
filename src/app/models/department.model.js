import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    department_name:{
        type:String,
    }
},{timestamps:true})

export const Department = mongoose.models.Department || mongoose.model("Department",departmentSchema)