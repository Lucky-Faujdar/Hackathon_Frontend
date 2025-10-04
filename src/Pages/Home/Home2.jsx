import React, { useEffect, useRef } from "react";
import DNA from "../../components/Planets/DNA";
import gsap from "gsap";

// You don't need to import ScrollTrigger if you aren't using it
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home2 = () => {
  const h1 = useRef(null);
  const content = useRef(null); // Ref for the paragraph content

  useEffect(() => {
    // Animate the H1
    gsap.fromTo(
      h1.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5, // A slightly longer duration can feel smoother
        ease: "power3.out",
      }
    );

    // Animate the paragraphs for a nice staggered effect
    gsap.fromTo(
      content.current.children, // Target children of the content div
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, // Animate each child 0.2s after the previous one
        delay: 0.5, // Start this animation 0.5s after the component loads
      }
    );
  }, []);

  return (
    // Make the main container relative
    <div className="w-full  text-white relative">
      {/* 1. Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <DNA />
      </div>

      {/* 2. Foreground Layer (with higher z-index) */}
      <div className="absolute top-130 left-0 w-full h-full z-10 flex flex-col justify-center px-10">
        <h1 ref={h1} className="text-5xl font-bold mb-10">
          Space Biology Engine
        </h1>
        {/* Add a ref to the container of the paragraphs */}
        <div ref={content}>
          <p className="max-w-[500px] mb-8"> {/* Adjusted margin-bottom */}
            The Space Biology Knowledge Engine helps students, researchers, and
            scientists explore how life can survive beyond Earth. It uses NASA
            data on plants, microbes, animals, and humans tested in space and on
            Earth under conditions like microgravity, radiation, and lunar soil.
            You can search, filter, and visualize experiments, such as how lettuce
            grows on the Moon or how radiation affects mouse tissues.
          </p>
          <p className="max-w-[700px]">
            For students, it’s a learning tool to understand space biology. For
            researchers and scientists, it provides data to design experiments and
            find new insights. Its mission is to turn space biology data into
            knowledge for living on the Moon, Mars, and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home2;