"use client";
import { setAllDepartment, setAllDoctor } from "@/app/Store/AppointmentSlice";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../images/reg.webp";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const Appointment = () => {
    const { toast } = useToast()
    const router = useRouter();
  const dispatch = useDispatch();
  const [department, setDepartment] = useState(null);
  const [doctor, setDoctor] = useState([]);
  const [doctorId, setDoctorId] = useState();
  const [patientName, setPatientName] = useState();
  const [date, setDate] = useState(); 

  const departmentFromRedux = useSelector((state) => state?.appointment?.allDepartment);
  const doctorFromRedux = useSelector((state) => state?.appointment?.allDoctor);

  const getAllDepartment = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/allDepartment");
      dispatch(setAllDepartment(res.data.allDepartment));
    } catch (error) {
      console.log("all department fetching error", error);
    }
  };

  useEffect(() => {
    getAllDepartment();
  }, []);

  const getAllDoctor = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/allEmployee");
      dispatch(setAllDoctor(res.data.employee));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDoctor();
  }, []);

  const getDoctorList = async () => {
    if (department != null) {
      try {
        const res = await axios.get("http://localhost:3000/api/allEmployee");
        const allDoctor = res.data?.employee.filter((val) => val.department === department);
        setDoctor(allDoctor);
      } catch (error) {
        console.log("error in fetching doctor", error);
      }
    }
  };

  useEffect(() => {
    getDoctorList();
  }, [department]);

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleDoctorChange = (e) => {
    setDoctorId(e.target.value);
  };

  const bookAppointment = async () => {
    const user = {
      patient_name: patientName,
      department_id: department,
      doctor_id: doctorId,
      dateOfAppointment: date,
    };

    try {
      const token = getCookie('token');
      const res = await axios.post(
        'http://localhost:3000/api/bookAppointment',
        user,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log(res);
      if(res.data.msg==="Appointment booked")
        {
            toast({
                title: "success ",
                description: "Appointment is Booked",
              })
              router.push('/')
        }
        else if(res.data.msg==="Login")
            {
                    router.push('/Components/login')

        }
        else router.push("/Components/Registration");
    } catch (error) {
      console.log("error in booking.", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookAppointment();
  };

  const handleChange = (e) => {
    setPatientName(e.target.value);
  };

  const dateHandle = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src={img} alt="reg-img" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-slate-600 opacity-50"></div>
      </div>
      <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Doctor Appointment
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="patient_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Patient Name
              </label>
              <input
                type="text"
                name="patient_name"
                id="patient_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your patient name"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Department
              </label>
              <select
                onChange={handleDepartmentChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                <option value="" disabled selected>
                  Select Department
                </option>
                {departmentFromRedux?.map((val) => (
                  <option key={val._id} value={val._id}>
                    {val.department_name}
                  </option>
                ))}
              </select>
            </div>
            {doctor.length > 0 && (
              <div>
                <label htmlFor="doctor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Select Doctor
                </label>
                <select onChange={handleDoctorChange} className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200">
                  <option value="" disabled selected>
                    Select Doctor
                  </option>
                  {doctor.map((val) => (
                    <option key={val._id} value={val._id}>
                       <p> {val.name} , {val.yr_of_exp} yr of expirence  </p> 
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label htmlFor="dateOfAppointment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Appointment Date
              </label>
              <input
                type="date"
                onChange={dateHandle}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
