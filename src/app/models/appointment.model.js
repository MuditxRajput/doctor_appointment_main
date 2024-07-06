import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema({
    patient_name:{
        type:String,
        required : true,
    },
    department_id:{
        type: mongoose.Types.ObjectId,
        ref : "Department",
        required : true,
    },
    doctor_id:{
        type: mongoose.Types.ObjectId,
        ref : "Doctor",
        required : true,
    },
    dateOfAppointment:{
        type:Date,
        required:true,
    }

},{timestamps:true})


export const Appointment = mongoose.models.Appointment || mongoose.model("Appointment",appointmentSchema);