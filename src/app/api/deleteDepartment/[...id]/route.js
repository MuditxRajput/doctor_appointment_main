import { databaseConnection } from "@/app/database/database";
import { Department } from "@/app/models/department.model";
import { Doctor } from "@/app/models/doctor.model";
import { NextResponse } from "next/server";
export async function DELETE(request,context)
{
   await databaseConnection();
    try {
        
        const {id} = context.params;
   
        const existedDepartment =    await Department.findById(id[0])
                          console.log(existedDepartment);
        if(!existedDepartment) return NextResponse.json({msg:"Department is not present..",sucess:false});
        
            const existedDoctor = await Doctor.find({department:existedDepartment._id})
            console.log(existedDoctor);
            if(existedDoctor)
                {
                    return NextResponse.json({msg:"Doctor is present in it...",sucess:false});
                }
       await Department.deleteOne(existedDepartment._id);
  
        return NextResponse.json({msg:"Department is delete",sucess:true})
    } catch (error) {
        return NextResponse.json({error,sucess:false})
    }
}