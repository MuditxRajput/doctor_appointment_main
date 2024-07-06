import { databaseConnection } from "@/app/database/database";
import { Department } from "@/app/models/department.model";
import { Doctor } from "@/app/models/doctor.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  await databaseConnection();
  try {

    const data = await request.json();

    const { name, email, contact_number, yr_of_exp, department } = data;
      console.log(department);
    const existedDepartment = await Department.findById(department);
    if (!existedDepartment) {
      return NextResponse.json({
        msg: "Department is not present..",
        sucess: false,
      });
    } else {
      
      const doctor = new Doctor({
        name,
        email,
        contact_number,
        yr_of_exp,
        department: existedDepartment._id,
      });
      const reponseFromdb = await doctor.save();
    }
    return NextResponse.json({
      msg: "Doctor data is saved successfully..",
      sucess: true,
    });
  } catch (error) {
    return NextResponse.json({ sucess: false, error });
  }
}
