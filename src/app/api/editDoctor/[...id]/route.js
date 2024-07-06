import { databaseConnection } from "@/app/database/database";
import { Department } from "@/app/models/department.model";
import { Doctor } from "@/app/models/doctor.model";
import { NextResponse } from "next/server";

export async function POST(request,context)
{
    await databaseConnection()
        // first we get the id of the doctor which we want to edit.....
        // we need to check is the doctor is available in database or not...
        // if not present send error msg...
        // if present we the details and update the doctor detail by using update by id...

        try {
            
            const {id} = context.params;
             const existedDoctor =  await Doctor.findById(id[0]);
             if(!existedDoctor) return NextResponse.json({msg:"doctor is not present..",success:false})
            const data = await request.json();
            const{name,email,contact_number,yr_of_exp,photo,department} = data;
            // check whether the department is present or not...
              const existedDepartment = await Department.findById(department);
            existedDoctor.name = name,
            existedDoctor.email = email,
            existedDoctor.contact_number= contact_number,
            existedDoctor.yr_of_exp= yr_of_exp,
            existedDoctor.department=existedDepartment._id,
            await existedDoctor.save();
            return NextResponse.json({msg:"Details is update",sucess:true,})
                } 
                catch (error) {
            return NextResponse.json({success:false,error});
        }
}