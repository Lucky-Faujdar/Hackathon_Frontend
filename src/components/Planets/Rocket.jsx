import React from "react";
import bgvdo from "../../assets/Rocket.mp4";

const Rocket = () => {
  return <video className="w-full" autoPlay muted loop src={bgvdo}></video>;
};

export default Rocket;
