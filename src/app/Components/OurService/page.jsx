"use client"
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import img1 from '../../images/1.webp';
import img2 from '../../images/2.webp';
import img3 from '../../images/3.png';
import img4 from '../../images/4.webp';

const OurService = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ y: 0, opacity: 1, transition: { duration: 0.6 } });
        } else {
          controls.start({ y: 100, opacity: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const serviceVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const count = [
    {
      title: "Health Monitoring",
      desc: "Lorem ipsum dolor <br> sit amet conses <br> adipisceli sed do eiusmod",
      img: img2
    },
    {
      title: "Holter Eye Surgery",
      desc: "Lorem ipsum dolor <br> sit amet conses <br> adipisceli sed do eiusmod",
      img: img4
    },
    {
      title: "Health and Research",
      desc: "Lorem ipsum dolor <br> sit amet conses <br> adipisceli sed do eiusmod",
      img: img1
    },
    {
      title: "X-Ray imaginary",
      desc: "Lorem ipsum dolor <br> sit amet conses <br> adipisceli sed do eiusmod",
      img: img3
    }
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={serviceVariants}
      className="mt-16 mb-1"
    >
      <div className="flex flex-col justify-center items-center mb-20">
        <p className="text-blue-700 font-semibold mb-5">| Our Services</p>
        <p className=" text-3xl sm:text-5xl font-bold mb-14">Our Medical Services</p>
        <div className=" flex justify-center gap-7 flex-col sm:flex-row ">
          {count?.map((val, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md shadow-slate-400"
              whileHover={{ scale: 1.05 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: index * 0.2 } }}
            >
              <div>
                <Image src={val.img} alt="box1" />
              </div>
              <div className="px-3 mt-3">
                <p className="font-bold text-xl">{val.title}</p>
                <p dangerouslySetInnerHTML={{ __html: val.desc }}></p>
              </div>
              <div className="px-3">
                <motion.button
                  className="px-2 py-1 bg-black text-white font-semibold rounded-lg mt-3 mb-4"
                  whileHover={{ scale: 1.05, backgroundColor: "blue" }}
                >
                  Read more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OurService;
