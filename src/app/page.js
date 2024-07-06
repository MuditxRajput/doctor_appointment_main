import { databaseConnection } from "@/app/database/database";
import Below from "./Components/Below/page";
import Emergency from "./Components/Emergency/page";
import Hero from "./Components/Hero/page";
import OurService from "./Components/OurService/page";
import Process from "./Components/Process/page";
import Subscribe from "./Components/Subscribe/page";
import Team from "./Components/Team/page";
import ThreeBox from "./Components/ThreeBox/page";

const Homepage = async() => {
  await databaseConnection();
  return (
    <>
    <Hero/>
    <ThreeBox/>
    <Below/>
    <OurService/>
    <Process/>
    <Emergency/>
    <Team/>
    <Subscribe/>
    </>
  );
};

export default Homepage;
