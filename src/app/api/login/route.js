import { databaseConnection } from "@/app/database/database";
import { Regsitration } from "@/app/models/registration.model";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
export async function POST(request) {
  await databaseConnection();
  try {
    const data = await request.json();
    const { email, password } = data;
    console.log(email);
    const existedPatient = await Regsitration.findOne({ email });
    if (!existedPatient)
      return NextResponse.json({ msg: "No user found", success: false });
    // password checking...;
     const passwordCheck =  await bcrypt.compare(password,existedPatient.password);
     if(!passwordCheck) return NextResponse.json({msg:"Password is incorrect",success:false})
    // generate the json webtoken.....
    const payload = {
       email:existedPatient.email,
       id:existedPatient._id,
       
    }
    const token =  jwt.sign(payload,process.env.secret,{ expiresIn: '24h' })
    const Response = NextResponse.json({msg:"Login sucessfully",success:true});

  Response.cookies.set("token",token,{httpOnly:true})
  return Response;
  } catch (error) {
    return NextResponse.json({ error, success: false });
  }
}
