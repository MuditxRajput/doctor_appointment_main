"use client"
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import img from "../../images/reg.webp";
const Registration = () => {
  const { toast } = useToast()
  const router = useRouter();
const[user,setUser] = useState({
  email:'',
  password:'',

})
  const handle=(e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setUser(preVal => ({...preVal,[name]:value}))
  }
const submit=async(e)=>{
  e.preventDefault();
   try {
     const res  =   await axios.post("http://localhost:3000/api/registration",user)
     if(res.data.success)
      {
        toast({
          
          title: "success ",
          description: "User is register",
        })
        router.push("/Components/login")
      }
      else{
        toast({
          variant: "destructive",
          title: "Failed ",
          description: "User is already register",
        })
      }
   } catch (error) {
    console.log(error);
   }

}
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src={img} alt="reg-img" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-slate-600 opacity-50"></div>
      </div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(e)=>handle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={user.password}
                onChange={(e)=>handle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              onClick={(e)=>submit(e)}
              className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link href={"/Components/login"} className="font-medium text-red-500 hover:text-black text-primary-600 hover:underline dark:text-primary-500">
                  Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
