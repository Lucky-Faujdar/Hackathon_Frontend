import React from "react";
import bgvdo from "../../assets/earth.mp4";

const EarthVideo = () => {
  return <video className="w-full" autoPlay muted loop src={bgvdo}></video>;
};

export default EarthVideo;
