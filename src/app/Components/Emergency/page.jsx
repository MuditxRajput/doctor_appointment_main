"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emergency from "../../images/Emergency.png";

const Emergency = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-20 bg-cyan-100 p-4 lg:p-10">
      <div className="flex flex-1 justify-center lg:justify-start lg:ml-10 mb-8 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={emergency} alt="emg-img" className="w-full h-auto max-w-sm lg:max-w-none" />
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 px-4 lg:px-0">
        <div className="flex flex-col mb-10">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 text-blue-700 font-semibold">| Emergency Helpline</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <p className="mb-4 text-2xl sm:text-5xl font-semibold">Need Emergency Contact</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mt-4 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> 
              inci ut labore et dolore magna aliqua.<br /> 
              Quis ipsum susp endisse ultrices gravida tempor.
            </p>
          </motion.div>
          <ul className="list-disc list-inside">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <li className="text-lg mb-1">24/7 Contact Our Hospital.</li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
            >
              <li className="text-lg mb-1">Emergency Contact Our Phone Number.</li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6 }}
            >
              <li className="text-lg mb-1">24/7 Contact Our Hospital.</li>
            </motion.div>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-10">
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-4 py-2 flex items-center shadow-sm shadow-slate-400 bg-white rounded-xl w-full lg:w-auto"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center justify-center mr-4 text-xl">
              <FaPhone />
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-bold text-lg">Phone</p>
              <p className="text-gray-600">+8808 9586 6652</p>
            </div>
          </motion.button>
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-4 py-2 flex items-center shadow-sm shadow-slate-400 bg-white rounded-xl w-full lg:w-auto"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="mr-4 text-xl">
              <MdEmail />
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-bold text-lg">Email</p>
              <p className="text-gray-600">xyz@gmail.com</p>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
