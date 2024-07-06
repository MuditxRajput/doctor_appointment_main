"use client"
import { setUserDetail } from "@/app/Store/UserSlice";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import img from "../../images/reg.webp";
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
    const { toast } = useToast()
    const[user,setUser] = useState({
        email:'',
        password:'',
    })

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUser(preVal=>({...preVal,
            [name]:value,
    }))
    }
    const hitLogin=async()=>{
        try {
            const res =  await axios.post("http://localhost:3000/api/login",user);
            console.log(res);
            if(res.data.success)
                {
                 
                  localStorage.setItem("user",JSON.stringify(user));
                  dispatch(setUserDetail(user))
                  router.push('/Components/Appointment')
                    toast({
                        title: "success ",
                        description: "User is login",
                      })
                      
                }
                else{
                    toast({
                        variant: "destructive",
                        title: "Failed ",
                        description: "User is already register",
                      })
                }
        } catch (error) {
            
        }

    }
    const handleSubmit=(e)=>{
            e.preventDefault();
            hitLogin();
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
            Login your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={user.email}
                
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
                onChange={handleChange}
                value={user.password}
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
           
            
            <button
              type="submit"

              className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Not Register yet?{" "}
              <Link href={"/Components/Registration"} className=" text-red-500 hover:text-black font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login