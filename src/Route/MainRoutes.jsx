import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import About from "../Pages/About";
import Upload from "../Pages/Dashboard/Upload";
import Quiz from "../Pages/Dashboard/Quiz";
import ImageGenerator from "../Pages/Dashboard/ImageGenerator";
import GraphGenerator from "../Pages/Dashboard/GraphGenerator";
import GamifiedLearning from "../Pages/Dashboard/GamifiedLearning";
import AstroDate from "../Pages/Dashboard/AstroDate";
import Profile from "../Pages/Profile";
const MainRoutes = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Routes>
        {/* <Route path="/home" element={<Home1 />} /> */}
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/astrodate" element={<AstroDate />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
        <Route path="/graph-generator" element={<GraphGenerator />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/gamified-learning" element={<GamifiedLearning />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;

// <div className="absolute w-full h-full z-10">
