import { databaseConnection } from "@/app/database/database";
import { Doctor } from "@/app/models/doctor.model";
import { NextResponse } from "next/server";

export async function GET()
{
   await databaseConnection()
    try {
        const employee = await Doctor.find();
        if(!employee)
            {
                return NextResponse.json({sucess:false,msg:"Error in fetching the data.."})
            }
        return NextResponse.json({suces:true,employee})
    } catch (error) {
        return NextResponse.json({msg:false,error})
    }
}