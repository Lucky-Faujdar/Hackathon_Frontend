import { useState } from "react";
import image from "../../assets/heaven.jpg";
import Sidebar from "../../components/Dash/Sidebar";

const Upload = ({ user }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="relative w-screen h-screen flex items-center">
      <div className="bg-transparent absolute left-0 z-50">
        <Sidebar user={user} />
      </div>
      <div className="relative w-screen h-screen left-0">
        {/* Background */}
        <div className="w-full h-full absolute bottom-22 z-0 object-cover ">
          <img className="w-full " src={image} alt="" />
        </div>
        {/* fromtground */}
        <div className="flex items-center relative justify-center min-h-screen">
          <label
            htmlFor="fileInput"
            className="flex flex-col items-center justify-center w-80 h-48 border-2 border-zinc-500 rounded-2xl cursor-pointer backdrop-blur-sm shadow-md hover:border-blue-500 active:scale-110 transition duration-200"
          >
            <svg
              className="w-12 h-12 text-white mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-white font-medium font-[font1] tracking-wider text-xl mb-2">
              {fileName ? fileName : "Upload your file"}
            </span>
            <span className="text-xs font-[font2] tracking-wider text-gray-300">
              (Images, Videos, Files)
            </span>
            <input
              id="fileInput"
              type="file"
              accept="image/*,video/*,.pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Upload;
