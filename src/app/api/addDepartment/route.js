import { databaseConnection } from "@/app/database/database";
import { Department } from "@/app/models/department.model";
import { NextResponse } from "next/server";

export async function POST(request)
{
    await databaseConnection();
    try {
        // we use .json() because in http request body we get the json data like department name and to work in 
        // server we need to change back into js object 
  
       const data = await request.json();
       const{department_name} = data;
       console.log(department_name);
       const existed_department =  await Department.findOne({department_name:department_name});
       if(existed_department)
        {
            return NextResponse.json({msg:"Department is present... try adding some other name",sucess:false})
        }
        const department = new Department({
            department_name,
        })
       const responseFromDb =  await department.save();
       return NextResponse.json({msg:"Department is saved",sucess:true});
  
    } catch (error) {
        console.log(error);
        return NextResponse.json({error,sucess:false});
    }
}