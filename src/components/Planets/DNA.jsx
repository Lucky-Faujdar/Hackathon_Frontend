import React from "react";
import bgvdo from "../../assets/DNA.mp4";

const DNA = () => {
  return <video className="w-full" autoPlay muted loop src={bgvdo}></video>;
};

export default DNA;
