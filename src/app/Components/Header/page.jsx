"use client";
import { setUserDetail } from "@/app/Store/UserSlice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo1.png";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isUserPresent = useSelector((state) => state.user?.userDetail);
  // const isUserPresent = localStorage.getItem("user");

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/logout");
      localStorage.removeItem("user");
      if (!localStorage.removeItem("user")) {
        dispatch(setUserDetail({}));
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="z-50 w-full absolute flex justify-between items-center px-10 opacity-100 py-2 sm:py-0">
      <div>
        <Link href={"/"}><Image src={logo} alt="logo" className="w-20 sm:w-36" /> </Link>
        
      </div>
      <div className="hidden sm:flex">
        <ul className="flex gap-5 text-white ">
          <Link href={"/"}>
            <li className="hover:underline cursor-pointer font-semibold hover:text-black">
              Home
            </li>
          </Link>
          <Link href={"/"}>
            {" "}
            <li className="hover:underline cursor-pointer font-semibold hover:text-black">
              Doctors
            </li>
          </Link>
          <Link href={"/"}>
            <li className="hover:underline cursor-pointer font-semibold hover:text-black">
              Patients
            </li>
          </Link>
          <Link href={"/"}>
            <li className="hover:underline cursor-pointer font-semibold hover:text-black">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className=" flex gap-5">
        <Link href="../Components/Appointment">
          <button className="bg-black text-white rounded-md text-xs px-4 py-2">
            Make Appointment
          </button>
        </Link>
        {isUserPresent.email ? (
          <div>
            <button
              onClick={handleLogout}
              className="bg-black text-white rounded-md text-xs px-4 py-2"
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
