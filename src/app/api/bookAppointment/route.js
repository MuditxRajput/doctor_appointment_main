import { databaseConnection } from "@/app/database/database";
import { Appointment } from "@/app/models/appointment.model";
import { Doctor } from "@/app/models/doctor.model";
import EmailTemplate from "@/app/utils/EmailTemplate";
import { getUserData } from "@/app/utils/getUserData";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.email_api);
export async function POST(request)
{
    await databaseConnection()
  try {

    const userData = await getUserData(request);
    console.log(userData);

     if(!userData.valid)
      {
        if(userData.error==="Token is not found")
          {
            return NextResponse.json({msg:"Registration",success:false})
          }
          else if(userData.error==="Token verification failed")
            {
                return NextResponse.json({msg:"Login",success:false})
            }
            else{
              return NextResponse.json({msg:"Registration",success:false})
            }
      }
      // const user = userData.user;
       const data = await request.json();
        const{patient_name,department_id,doctor_id,dateOfAppointment} = data;
        console.log("this is doctor_id->>>>",doctor_id);
       const doctor = await Doctor.findById(doctor_id);
       const  {name} = doctor;
      
        const existedDateOfAppointment = await Appointment.find({dateOfAppointment})
       
        if(existedDateOfAppointment.length>5) return NextResponse.json({msg:"All slot are booked select other data",success:false})
        const appointment = new Appointment({
            patient_name,
            department_id,
            doctor_id,
            dateOfAppointment
      
        })
       const res =  await appointment.save();
       const emailData = {
        from: 'Dr Ready Hospital <onboarding@resend.dev>',
        to: [userData.user.email], // Assuming user.email exists in your user model
        subject: 'Appointment Confirmation',
        react: <EmailTemplate 
        firstName={patient_name} 
         date={dateOfAppointment}
         doctorName ={name}  />, // Pass user's first name to EmailTemplate
      };
  
      const { data: emailResponse, error: emailError } = await resend.emails.send(emailData);
  
      if (emailError) {
        console.error('Error sending email:', emailError);
        // Handle email sending error
      }
      
    
    return NextResponse.json({msg:"Appointment booked",success:true,res})
  } catch (error) {
    return NextResponse.json({success:false,error})
  }
}