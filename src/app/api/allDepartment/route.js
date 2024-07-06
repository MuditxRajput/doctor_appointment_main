import { databaseConnection } from "@/app/database/database";
import { Department } from "@/app/models/department.model";
import { NextResponse } from "next/server";

export async function GET(request)
{
    await databaseConnection()
        try {
          const allDepartment = await Department.find();
          return NextResponse.json({sucess:true,allDepartment})
        } catch (error) {
            return NextResponse.json({sucess:false,error})
        }
}