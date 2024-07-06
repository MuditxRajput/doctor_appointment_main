
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import img from '../../images/hero_image.png';

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity // Repeat the animation
    }
  },
  tap: {
    scale: 0.9
  }
};

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative  ">
      <div className="relative  h-96 sm:h-[680px]  ">
        <div className=" h-[500px] sm:w-full">
          <Image src={img} alt="hero-img" layout="fill" objectFit="cover" />
        </div>
        <div className="absolute bg-slate-600 opacity-50 top-0 w-full h-full"></div>
        <div className=" m-10 mt-16  sm:m-56 absolute top-0 flex flex-col justify-center items-center sm:block ">
          <h1 className=" text-3xl  sm:text-7xl text-white font-bold">Meet The</h1>
          <h1 className=" text-5xl sm:text-7xl sm:mt-5 text-white font-bold">Best Doctor</h1>
          <p className="text-slate-300 mt-4 text-sm sm:text-lg">
            Great doctor if you need your family member to get effective immediate<br />
            assistance, emergency treatment or a simple consultation.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-black"
            onClick={()=>router.push('/Components/Appointment')}
          >
            Appointment
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
