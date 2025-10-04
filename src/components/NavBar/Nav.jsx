// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import svg from "../../assets/search.svg";
// import logo from "../../assets/logo.png";

// const Nav = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate();
//   const [toggle1, setToggle1] = useState(false);
//   const [toggle2, setToggle2] = useState(false);
//   const [toggle3, setToggle3] = useState(false);

//   // ➡️ ADD THIS STATE FOR THE INPUT FIELD
//   const [searchValue, setSearchValue] = useState("");

//   const ChevronDownIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="w-4 h-4"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m19.5 8.25-7.5 7.5-7.5-7.5"
//       />
//     </svg>
//   );

//   const ChevronUpIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="w-4 h-4"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m4.5 15.75 7.5-7.5 7.5 7.5"
//       />
//     </svg>
//   );

//   const handleDropdownToggle = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <div className="relative ">
//       <div
//         className={`fixed top-0 w-full z-50 h-17 text-white flex items-center px-8 py-4 justify-between shadow-xl  backdrop-blur-sm border-b-zinc-700 border-b-1 font-sans text-lg tracking-wide `}
//       >
//         {/* Logo */}
//         {/* <div className="flex relative ">
//           <div className="flex items-center ">
//             <svg
//               className="w-5 h-5 absolute z-10 text-gray-400 left-3 top-1/2 -translate-y-1/2 "
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               ></path>
//             </svg>

//             <input
//               className="w-70 border-1  pl-10 pr-4 rounded-full border-gray-500  focus:border-blue-500 "
//               type="text"
//             />
//           </div>
//         </div> */}
//         <div id="logo" className="w-10 ">
//           <img className="object-cover" src={logo} alt="Galaxy Logo" />
//         </div>
//         <div className="flex items-center gap-12">
//           {/* Explore */}
//           <button
//             onClick={() => {
//               handleDropdownToggle("explore");
//               setToggle1(!toggle1);
//             }}
//             className="flex items-center space-x-2 font-bold text-lg hover:text-red-500 transition-colors"
//           >
//             <span>Explore</span>
//             {openDropdown === "explore" ? (
//               <ChevronUpIcon />
//             ) : (
//               <ChevronDownIcon />
//             )}
//           </button>

//           {/* News & Event */}
//           <button
//             onClick={() => {
//               handleDropdownToggle("News");
//               setToggle2(!toggle2);
//             }}
//             className="flex items-center space-x-2 font-bold text-lg hover:text-red-500 transition-colors"
//           >
//             <span>News & Event</span>
//             {openDropdown === "News" ? <ChevronUpIcon /> : <ChevronDownIcon />}
//           </button>

//           {/* MultiMedia */}
//           <button
//             onClick={() => {
//               handleDropdownToggle("Media");
//               setToggle3(!toggle3);
//             }}
//             className="flex items-center space-x-2 font-bold text-lg hover:text-red-500 transition-colors"
//           >
//             <span>MultiMedia</span>
//             {openDropdown === "Media" ? <ChevronUpIcon /> : <ChevronDownIcon />}
//           </button>

//           {/* Login */}
//           <button
//             className="border border-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors"
//             onClick={() => navigate("/login")}
//           >
//             Get Started
//           </button>
//         </div>
//         {/* Dropdown Menus */}

//         {/* Explore */}
//         <div
//           className="absolute top-full left-[60%] -translate-x-1/2 mt-2 w-64 z-100 font-sans border border-gray-700 backdrop-blur-2xl text-white py-4 px-6 font-light text-lg tracking-wide rounded-lg shadow-xl"
//           style={{ display: toggle1 ? "block" : "none" }}
//         >
//           <ul className="flex flex-col gap-3">
//             <a
//               href="https://www.nasa.gov/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Home</span>
//             </a>
//             <a
//               href="https://www.nasa.gov/nasa-missions/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Missions</span>
//             </a>
//             <a
//               href="https://www.nasa.gov/humans-in-space/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Humans in Space</span>
//             </a>
//             <a
//               href="https://science.nasa.gov/earth/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Earth</span>
//             </a>
//             <a
//               href="https://science.nasa.gov/solar-system/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>The Solar System</span>
//             </a>
//             <a
//               href="https://science.nasa.gov/universe/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>The Universe</span>
//             </a>
//             <a
//               href="https://science.nasa.gov/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Science</span>
//             </a>
//             <a
//               href="https://www.nasa.gov/aeronautics/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Aeronautics</span>
//             </a>
//             <a
//               href="https://www.nasa.gov/technology/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Technology</span>
//             </a>
//             <a
//               href="https://www.nasa.gov/learning-resources/"
//               className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
//             >
//               <span>Learning Resources</span>
//             </a>
//           </ul>
//         </div>
//         {/* News */}
//         <div
//           className="absolute top-full left-[75%] -translate-x-1/2 mt-2 w-72 z-100 border border-gray-700 backdrop-blur-2xl text-white py-4 px-6 font-light text-lg tracking-wide rounded-lg shadow-xl"
//           style={{ display: toggle2 ? "block" : "none" }}
//         >
//           <ul className="flex flex-col gap-3">
//             <li>
//               <a
//                 href="https://www.nasa.gov/2025-news-releases/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>News Releases</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/news/recently-published/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Recently Published</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://plus.nasa.gov/series/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Video Series on NASA+</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/podcasts-and-audio/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Podcasts &amp; Audio</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/nasa-blogs/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Blogs</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/newsletters/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Newsletters</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/social-media/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Social Media</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/news/media-contacts/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Media Resources</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/events"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Events</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/event-type/launch-schedule/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Upcoming Launches &amp; Landings</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/nasa-virtual-guest-program/"
//                 className="hover:text-red-600 transition-colors duration-200"
//               >
//                 <span>Virtual Guest Program</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/* Multimedia  */}
//         <div
//           className="absolute top-full left-[90%] -translate-x-1/2 mt-2 w-64 z-100 border border-gray-700 backdrop-blur-2xl text-white py-4 px-6 font-light text-lg tracking-wide rounded-lg shadow-xl"
//           style={{ display: toggle3 ? "block" : "none" }}
//         >
//           <ul className="flex flex-col gap-3">
//             <li>
//               <a
//                 href="https://plus.nasa.gov/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>NASA+</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/images/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>Images</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/live"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>NASA Live</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/apps/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>NASA Apps</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/podcasts/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>Podcasts</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/image-of-the-day/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>Image of the Day</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/ebooks/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>e-Books</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/interactives/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>Interactives</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/learning-resources/search/?terms=8058%2C8059%2C8061%2C8062%2C8068"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>STEM Multimedia</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.nasa.gov/nasa-brand-center/"
//                 className="hover:text-red-500 transition-colors duration-200"
//               >
//                 <span>NASA Brand &amp; Usage Guidelines</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import svg from "../../assets/search.svg";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const ChevronDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Determine if the current page is an authentication page
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  // Function to handle logo click navigation
  const handleLogoClick = () => {
    if (!user || isAuthPage) {
      navigate("/"); // Navigate to home page
    } else {
      navigate("/dashboard"); // Navigate to dashboard
    }
  };

  // Conditionally render the simplified nav with only the logo for auth pages
  if (isAuthPage) {
    return (
      <div className="relative">
        <div
          className={`fixed top-0 w-full z-50 h-17 text-white flex items-center px-8 py-4 justify-between shadow-xl backdrop-blur-sm border-b-zinc-700 border-b-1 font-sans text-lg tracking-wide`}
        >
          <div
            id="logo"
            className="w-10 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img className="object-cover" src={logo} alt="Galaxy Logo" />
          </div>
        </div>
      </div>
    );
  }

  // Render the full navigation bar for all other pages
  return (
    <div className="relative ">
      <div
        className={`fixed top-0 w-full z-50 h-17 text-white flex items-center px-8 py-4 justify-between shadow-xl backdrop-blur-sm border-b-zinc-700 border-b-1 font-sans text-lg tracking-wide `}
      >
        <div
          id="logo"
          className="w-10 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img className="object-cover" src={logo} alt="Galaxy Logo" />
        </div>

        <div className="flex items-center gap-12">
          {/* Explore */}
          <button
            onClick={() => {
              handleDropdownToggle("explore");
              setToggle1(!toggle1);
            }}
            className="flex items-center space-x-2 font-bold text-lg hover:text-red-500 transition-colors"
          >
            <span>Explore</span>
            {openDropdown === "explore" ? (
              <ChevronUpIcon />
            ) : (
              <ChevronDownIcon />
            )}
          </button>

          {/* News & Event */}
          <button
            onClick={() => {
              handleDropdownToggle("News");
              setToggle2(!toggle2);
            }}
            className="flex items-center space-x-2 font-bold text-lg hover:text-red-500 transition-colors"
          >
            <span>News & Event</span>
            {openDropdown === "News" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>

          {/* MultiMedia */}
          <button
            onClick={() => {
              handleDropdownToggle("Media");
              setToggle3(!toggle3);
            }}
            className="flex items-center space-x-2 font-bold text-lg hover:text-red-500 transition-colors"
          >
            <span>MultiMedia</span>
            {openDropdown === "Media" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>

          {/* Login */}
          <button
            className="border border-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
        {/* Dropdown Menus */}
        <div
          className="absolute top-full left-[60%] -translate-x-1/2 mt-2 w-64 z-100 font-sans border border-gray-700 backdrop-blur-2xl text-white py-4 px-6 font-light text-lg tracking-wide rounded-lg shadow-xl"
          style={{ display: toggle1 ? "block" : "none" }}
        >
          <ul className="flex flex-col gap-3">
            <a
              href="https://www.nasa.gov/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Home</span>
            </a>
            <a
              href="https://www.nasa.gov/nasa-missions/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Missions</span>
            </a>
            <a
              href="https://www.nasa.gov/humans-in-space/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Humans in Space</span>
            </a>
            <a
              href="https://science.nasa.gov/earth/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Earth</span>
            </a>
            <a
              href="https://science.nasa.gov/solar-system/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>The Solar System</span>
            </a>
            <a
              href="https://science.nasa.gov/universe/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>The Universe</span>
            </a>
            <a
              href="https://science.nasa.gov/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Science</span>
            </a>
            <a
              href="https://www.nasa.gov/aeronautics/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Aeronautics</span>
            </a>
            <a
              href="https://www.nasa.gov/technology/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Technology</span>
            </a>
            <a
              href="https://www.nasa.gov/learning-resources/"
              className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
            >
              <span>Learning Resources</span>
            </a>
          </ul>
        </div>
        {/* News */}
        <div
          className="absolute top-full left-[75%] -translate-x-1/2 mt-2 w-72 z-100 border border-gray-700 backdrop-blur-2xl text-white py-4 px-6 font-light text-lg tracking-wide rounded-lg shadow-xl"
          style={{ display: toggle2 ? "block" : "none" }}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://www.nasa.gov/2025-news-releases/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>News Releases</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/news/recently-published/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Recently Published</span>
              </a>
            </li>
            <li>
              <a
                href="https://plus.nasa.gov/series/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Video Series on NASA+</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/podcasts-and-audio/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Podcasts &amp; Audio</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/nasa-blogs/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Blogs</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/newsletters/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Newsletters</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/social-media/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Social Media</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/news/media-contacts/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Media Resources</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/events"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Events</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/event-type/launch-schedule/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Upcoming Launches &amp; Landings</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/nasa-virtual-guest-program/"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <span>Virtual Guest Program</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Multimedia  */}
        <div
          className="absolute top-full left-[90%] -translate-x-1/2 mt-2 w-64 z-100 border border-gray-700 backdrop-blur-2xl text-white py-4 px-6 font-light text-lg tracking-wide rounded-lg shadow-xl"
          style={{ display: toggle3 ? "block" : "none" }}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://plus.nasa.gov/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>NASA+</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/images/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>Images</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/live"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>NASA Live</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/apps/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>NASA Apps</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/podcasts/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>Podcasts</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/image-of-the-day/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>Image of the Day</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/ebooks/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>e-Books</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/interactives/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>Interactives</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/learning-resources/search/?terms=8058%2C8059%2C8061%2C8062%2C8068"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>STEM Multimedia</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/nasa-brand-center/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <span>NASA Brand &amp; Usage Guidelines</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
