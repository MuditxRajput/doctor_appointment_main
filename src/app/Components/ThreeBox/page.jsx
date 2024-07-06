import { BsHeartPulseFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { IoMedkit } from "react-icons/io5";
const ThreeBox = () => {
  return (
    <div className=" absolute -mt-10    w-full flex flex-col sm:flex sm:flex-row justify-center items-center">
        <div className=" rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-l-2xl  bg-slate-200 p-10">
            <div className="mb-3">
               <BsHeartPulseFill className="text-blue-600 text-3xl"/>
            </div>
            <div className="mb-3">
                <p className="font-semibold text-lg">Emergency Case</p>
            </div>
            <div>
             <p className=" text-slate-500 ">This is required when, for example,<br></br> the is not yet available. Dummy text<br></br> is also known as</p>
            </div>
        </div>
        <div className="  bg-white p-10 ">
            <div className="mb-3">
               <IoMedkit  className="text-blue-600 text-3xl"/>
            </div>
            <div className="mb-3">
                <p className="font-semibold text-lg">Doctors Timetable</p>
            </div>
            <div>
             <p className=" text-slate-500">This is required when, for example,<br></br> the is not yet available. Dummy text<br></br> is also known as</p>
            </div>
        </div>
        <div className="  rounded-bl-2xl sm:rounded-bl-none rounded-br-2xl sm:rounded-r-2xl  bg-slate-200 p-10 ">
            <div className="mb-3">
               <FaClock className="text-blue-600 text-3xl"/>
            </div>
            <div className="mb-3">
                <p className="font-semibold text-lg">Opening Hours</p>
            </div>
            <div>
             <p className=" text-slate-500">This is required when, for example,<br></br> the is not yet available. Dummy text<br></br> is also known as</p>
            </div>
        </div>
       
    </div>
  )
}

export default ThreeBox