import jwt from "jsonwebtoken";
export async function getUserData(request) {
  try {
    const data = request.cookies.get("token")?.value;
        console.log(data);
    if (!data )
      { 
        return {valid:false,error:"Token is not found"};
      }
      try {
        const user = jwt.verify(data, process.env.secret);
        return {valid:true,user};
        
      } catch (error) {
        return {valid:false,error:"Token verification failed"}
      }

  } catch (error) {
    console.error("Error in getUserData:", error);
    return { valid: false, error: "Unexpected error" };
  }
}
