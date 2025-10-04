import React, { useEffect, useRef } from "react";
import Home1 from "./Home/Home1";
import DNA from "../components/Planets/DNA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home2 from "./Home/Home2";

const About = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative overflow-auto overflow-x-hidden">
      {/* Home1 Section */}
      <div className=" relative h-screen w-full">
        <Home1 />
      </div>
      {/* Home2 Section */}
      <div className=" relative h-screen w-full">
        <Home2 />
      </div>
    </div>
  );
};

export default About;
