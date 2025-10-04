import React from "react";
import Mars from "../../components/Planets/Mars";

const Home1 = () => {
  return (
    <div className="h-screen text-white relative overflow-hidden">
      {/* Background */}
      <div
        data-aos="fade-left"
        className="
        w-[100%] ml-90
          scale-100 sm:scale-105 md:scale-110
          translate-x-10 sm:translate-x-40 md:translate-x-60 lg:translate-x-80
          translate-y-[-100px] sm:translate-y-[-150px] md:translate-y-[-200px]
        "
      >
        <Mars />
      </div>

      {/* Foreground */}
      <div
        className="
          absolute 
          top-0 sm:top-1/3 lg:top-50
          left-4 sm:left-8 md:left-12 lg:left-16
          flex flex-col items-start
          px-2 sm:px-4 md:px-0
        "
      >
        <h1
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-wide font-[font1]"
        >
          BIOLOGY ENGINE
        </h1>

        <p
          data-aos="fade-right"
          className="max-w-[90%] sm:max-w-[500px] mb-6 sm:mb-12 font-[font2] text-sm sm:text-base md:text-lg"
        >
          NASA’s Perseverance rover is exploring Mars, especially Jezero Crater.
          It recently drilled a rock called “Cheyava Falls” and found minerals
          that on Earth form with microbes, suggesting Mars may have had
          conditions for life long ago. The rover also saw interesting rock
          patterns showing ancient chemical activity.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="max-w-[95%] sm:max-w-[700px] font-[font2] text-sm sm:text-base md:text-lg"
        >
          <p>
            In 2024, Perseverance captured Mars’ first visible-light aurora—a
            green glow caused by solar particles in its atmosphere. These
            findings help us understand Mars’ history and prepare for future
            human exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home1;
