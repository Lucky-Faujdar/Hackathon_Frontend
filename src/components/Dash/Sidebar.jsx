import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUpload,
  FiImage,
  FiBarChart2,
  FiHelpCircle,
  FiZap,
} from "react-icons/fi";

const Sidebar = ({ user, historyItems = [], onSelectHistory }) => {
  const navigate = useNavigate();
  return (
    <aside className="w-72 text-gray-200 p-6 flex flex-col max-h-200 mt-25">
      {/* Profile Section */}
      <Link
        to="/profile"
        onClick={() => navigate("/profile")}
        className="flex items-center space-x-4 mb-8 group"
      >
        <img
          src={
            user?.profilePic ||
            "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60"
          }
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-cyan-400 group-hover:border-cyan-300 transition-all object-cover"
        />
        <div>
          <h2 className="font-[font2] font-bold text-lg">
            {user?.name || "USER..."}
          </h2>
          <p className="text-sm font-[font1] bg-cyan-500 text-gray-900 font-semibold px-2 py-0.5 rounded-full inline-block">
            {user?.status || "Active"}
          </p>
        </div>
      </Link>

      {/* Main Container */}
      <div className="flex-grow flex flex-col overflow-hidden rounded-lg border-2 border-gray-700">
        {/* History Section */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="font-semibold font-[font1] tracking-wide mb-3">
            History
          </h3>
          <ul className="font-[font2] space-y-2 text-sm text-gray-400 max-h-32 overflow-y-auto">
            {historyItems.length === 0 ? (
              <p className="text-gray-500 text-sm">No history yet</p>
            ) : (
              historyItems.map((item, index) => (
                <li
                  key={index}
                  className="truncate hover:text-white cursor-pointer"
                  onClick={() => onSelectHistory && onSelectHistory(item)}
                  title={item}
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Features Section (scrollable) */}
        <div className="p-4 font-[font1] space-y-3 flex-1 overflow-y-auto">
          {/* Dashboard Link */}
          <Link
            to="/astrodate"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EEEEEE"
              viewBox="0 0 1024 1024"
              className="icon text-white w-6 h-6 pr-1 mr-1"
            >
              <path d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z" />
            </svg>
            Born with Discovery
          </Link>

          <Link
            to="/upload"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiUpload className="mr-3" /> Upload Papers
          </Link>
          <Link
            to="/image-generator"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiImage className="mr-3" /> Image Generator
          </Link>
          <Link
            to="/graph-generator"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiBarChart2 className="mr-3" /> Graph Generator
          </Link>
          <Link
            to="/quiz"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiHelpCircle className="mr-3" /> Quiz
          </Link>
          <Link
            to="/gamified-learning"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiZap className="mr-3" /> Gamified Learning
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
