import React, { useEffect } from "react";
import MainRoutes from "./Route/MainRoutes";
import Nav from "./components/NavBar/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      // easing: "ease-in-out", // easing style
      once: false, // repeat animation jab scroll back karo
    });
    AOS.refresh();
  }, []);
  return (
    <div className="relative">
      <Nav />
      <MainRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
