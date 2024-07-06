import Image from "next/image";
import img from "../../images/footer.webp";
import logo from '../../images/logo1.png';
const Footer = () => {
  return (
    <div
      className="relative flex flex-col justify-between w-full bg-cover bg-center h-auto"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-90"></div>
      <div className="relative z-10 w-full p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0">
        <div className="flex flex-1 flex-col p-6 h-full text-left">
           <Image src={logo} alt="logo" className="w-32 mb-2" />
          <p className="text-white mb-5">
            There are two popular beliefs. Lorem Ipsum is not simply random text.
          </p>
          <p className="text-white mb-1">Hello to: support@gmail.com</p>
          <p className="text-white mb-9">Follow us</p>
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 h-full text-left">
          <p className="text-white font-bold mb-6 text-2xl">Company</p>
          <ul className="flex flex-col gap-2">
            <li className="text-white">Home</li>
            <li className="text-white">About us</li>
            <li className="text-white">Contact us</li>
            <li className="text-white">Our Team</li>
            <li className="text-white">Contact us</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 h-full text-left">
          <p className="text-white font-bold mb-6 text-2xl">Quick Links</p>
          <ul className="flex flex-col gap-2">
            <li className="text-white">Why Choose Us</li>
            <li className="text-white">Pricing Plan</li>
            <li className="text-white">News & Articles</li>
            <li className="text-white">Login</li>
            <li className="text-white">Subscribe</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 h-full text-left">
          <p className="text-white font-bold mb-6 text-2xl">Important</p>
          <ul className="flex flex-col gap-2">
            <li className="text-white">Our Process</li>
            <li className="text-white">Appointment</li>
            <li className="text-white">FAQ</li>
            <li className="text-white">Privacy Policy</li>
            <li className="text-white">Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 h-full text-left">
          <p className="text-white font-bold text-2xl mb-6">Official Info</p>
          <ul className="flex flex-col gap-2">
            <li className="text-white">2767 Sunrise Street, NY 1002, USA</li>
            <li className="text-white">company@gmail.com</li>
            <li className="text-white">+880 1234-854826</li>
          </ul>
        </div>
      
     
      </div>
      <hr className="text-white font-bold z-30 "></hr>
      <div className="flex justify-between p-10 z-30 ">
        <div>
                    <p className="text-white text-xs px-2">@2024. Design by Mudit Rajput  All rights reserved.</p>
        </div>
        <div className="flex  gap-5">
            <p className="text-white text-sm  "> Terma and conditons</p>
            <p className="text-white text-sm"> Cookies</p>
            <p className="text-white text-xs "> Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
