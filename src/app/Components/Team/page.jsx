"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import d1 from '../../images/d1.webp';
import d2 from '../../images/d2.webp';
import d3 from '../../images/d3.webp';
import d4 from '../../images/d4.webp';

const Team = () => {
  const dr = [
    {
      name: "Dr. Sabrina Khan",
      dep: "Skin Specialist",
      img: d1,
    },
    {
      name: "Dr. Sohan Deo",
      dep: "Dentist Specialist",
      img: d2,
    },
    {
      name: "Dr. Happy Heya",
      dep: "Gynecologist",
      img: d3,
    },
    {
      name: "Dr. Jon Miller",
      dep: "Cancer Specialist",
      img: d4,
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
    <div ref={ref} className="mt-16 mb-10 px-10">
      <div className="flex justify-center items-center flex-col">
        <p className="mb-4 text-blue-700 font-semibold"> | Our Team</p>
        <p className="mb-4 text-2xl sm:text-5xl font-semibold">Meet Our Team Members</p>
      </div>
      <div className="p-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-7">
          {dr?.map((val, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg bg-blue-100 shadow-md shadow-slate-500 flex flex-col justify-center items-center "
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="  ">
                <Image src={val.img} alt="dr-img" />
              </div>
              <div className="absolute rounded-lg bottom-0 left-0 w-full bg-gradient-to-t from-slate-700 to-transparent p-4 hover:from-blue-600 hover:to-transparent hover:transition-all hover:delay-75">

                <h4 className="text-xl text-white font-bold mb-2 ">{val.name}</h4>
                <p className="text-white">{val.dep}</p>
  
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
