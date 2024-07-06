import { databaseConnection } from "@/app/database/database";

import { Regsitration } from "@/app/models/registration.model";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
export async function POST(request) {
  await databaseConnection();

  try {
    const data = await request.json();
    const {
      email,
      password,
    } = data;
    console.log(email);
    const existedPatient = await Regsitration.findOne({email});
    if (existedPatient)
      return NextResponse.json({
        msg: "User is already register",
        success: false,
      });
       // hashed password.... here we use the bcyrpt 
            const hashedPassword = await bcrypt.hash(password,10)
    const regsitration = new Regsitration({
      email,
      password : hashedPassword,
    });
    await regsitration.save();
    return NextResponse.json({ msg: "User is register", success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
