import React from "react";
import jupiter from "../../assets/Jupiter.mp4";

const Jupitar = () => {
  return <video className="w-full" autoPlay muted loop src={jupiter}></video>;
};

export default Jupitar;
