"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BiSolidReport } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useInView } from "react-intersection-observer";

const Process = () => {
  const count = [
    {
      title: "Select Services",
      desc: "There are many variations <br> of pasLorem Ipsum available, <br> but the is have suffered.",
      logo: <CiSearch />,
    },
    {
      title: "Book An Appointment",
      desc: "There are many variations <br> of pasLorem Ipsum available, <br> but the is have suffered.",
      logo: <SlCalender />,
    },
    {
      title: "Complete Payment",
      desc: "There are many variations <br> of pasLorem Ipsum available, <br> but the is have suffered.",
      logo: <MdOutlinePayment />,
    },
    {
      title: "Get Reports",
      desc: "There are many variations <br> of pasLorem Ipsum available, <br> but the is have suffered.",
      logo: <BiSolidReport />,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Optional: You can add more complex animations here using Framer Motion controls
    }
  }, [inView]);

  return (
    <div ref={ref} className="mt-16 mb-1">
      <div className="flex justify-center items-center flex-col">
        <p className="mb-4 text-blue-700 font-semibold"> | How We Work</p>
        <p className="mb-4 text-2xl sm:text-5xl font-semibold">Our Working Process</p>
      </div>
      <div className="p-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-7">
          {count?.map((val, index) => (
            <motion.div
              key={index}
              className="rounded-md bg-blue-100 shadow-md shadow-slate-500 flex flex-col justify-center items-center p-9"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold text-purple-600 mb-4">{val.logo}</p>
              <h4 className="text-xl font-semibold mb-4 hover:text-purple-700 hover:font-bold">
                {val.title}
              </h4>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: val.desc }}></p>
              <p className="font-bold text-purple-600 hover:underline transition-all duration-600">
                Read more
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
