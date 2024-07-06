import { NextResponse } from "next/server";

export async function POST()
{
    try {
        const res =  NextResponse.json({msg:"Logout Success",success:true})
        res.cookies.set("token","",{httpOnly:true})
        return res;
        
    } catch (error) {
        return NextResponse.json({ error, success: false });
    }
}