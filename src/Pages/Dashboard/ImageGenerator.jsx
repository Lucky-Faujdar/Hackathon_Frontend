// import { useState } from "react";
// import { Search, History } from "lucide-react";
// import image from "../../assets/heaven.jpg";
// import Sidebar from "../../components/Dash/Sidebar";

// export default function ImageGenerator({ user }) {
//   const [activeTab, setActiveTab] = useState("history");
//   const [historyItems, setHistoryItems] = useState([
//     "Galaxy in blue",
//     "Sunset over mountains",
//     "Futuristic city",
//   ]);
//   const [prompt, setPrompt] = useState("");
//   const [generatedImage, setGeneratedImage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const selectHistory = (item) => {
//     setPrompt(item);
//     setActiveTab("search");
//     setGeneratedImage("");
//     setError("");
//   };

//   const generateImage = async () => {
//     if (!prompt.trim()) {
//       alert("Please enter a prompt");
//       return;
//     }

//     setHistoryItems((prev) => {
//       if (!prev.includes(prompt)) {
//         return [prompt, ...prev];
//       }
//       return prev;
//     });

//     setLoading(true);
//     setGeneratedImage("");
//     setError("");

//     try {
//       // ⬇️ UPDATED: Changed the endpoint to call the new DeepAI route
//       const res = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/deepai/generate`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ prompt }),
//         }
//       );

//       const data = await res.json();

//       if (res.ok && data.outputUrl) {
//         setGeneratedImage(data.outputUrl);
//       } else {
//         setError(data.error || "Failed to generate image");
//         console.error("API Error:", data); // More generic error log
//       }
//     } catch (err) {
//       console.error("Network Error:", err);
//       setError("Error generating image. Check your backend or network.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // ... your JSX remains the same
//     <div className="relative w-screen h-screen flex">
//       <div className="bg-transparent absolute left-0 z-50">
//         <Sidebar
//           user={user}
//           historyItems={historyItems}
//           onSelectHistory={selectHistory}
//         />
//       </div>
//       <div className="relative w-screen h-screen flex-1">
//         <div className="w-full h-full absolute bottom-22 z-0 object-cover">
//           <img className="w-full" src={image} alt="" />
//         </div>
//         <div className="flex items-center justify-center relative min-h-screen">
//           <div className="w-full max-w-lg backdrop-blur-sm rounded-2xl shadow-lg p-6 border-2 border-zinc-500 z-10">
//             <h1 className="text-2xl font-bold text-white mb-6 text-center">
//               Image Generator
//             </h1>
//             <div className="flex justify-center gap-4 mb-6">
//               <button
//                 onClick={() => setActiveTab("history")}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
//                   activeTab === "history"
//                     ? "text-white bg-blue-900"
//                     : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
//                 }`}
//               >
//                 <History size={18} />
//                 Select from History
//               </button>
//               <button
//                 onClick={() => setActiveTab("search")}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
//                   activeTab === "search"
//                     ? "bg-blue-500 text-white border-blue-500"
//                     : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
//                 }`}
//               >
//                 <Search size={18} />
//                 Search
//               </button>
//             </div>
//             <div className="p-4 border-zinc-700 border-2 bg-gradient-to-br from-blue-700 via-blue to-blue-900 bg-opacity-50 shadow-xl backdrop-filter backdrop-blur-xl rounded-2xl">
//               {activeTab === "history" ? (
//                 <div className="text-white">
//                   {historyItems.length === 0 ? (
//                     <p className="text-center">No images in history yet.</p>
//                   ) : (
//                     <ul className="space-y-2 max-h-60 overflow-y-auto">
//                       {historyItems.map((item, index) => (
//                         <li
//                           key={index}
//                           className="cursor-pointer hover:text-cyan-400 truncate border-b border-gray-600 pb-1"
//                           onClick={() => selectHistory(item)}
//                           title={item}
//                         >
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-4">
//                   <input
//                     type="text"
//                     placeholder="Enter prompt to search..."
//                     value={prompt}
//                     onChange={(e) => setPrompt(e.target.value)}
//                     className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
//                   />
//                   <button
//                     onClick={generateImage}
//                     disabled={loading}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {loading ? "Generating..." : "Generate Image"}
//                   </button>
//                   {error && (
//                     <p className="text-red-500 text-center mt-2">{error}</p>
//                   )}
//                   {generatedImage && (
//                     <div className="mt-4">
//                       <h2 className="text-white mb-2 text-center">Generated Image</h2>
//                       <img
//                         src={generatedImage}
//                         alt="Generated"
//                         className="w-full rounded-xl shadow-lg"
//                       />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Search, History } from "lucide-react";
import image from "../../assets/heaven.jpg";
import Sidebar from "../../components/Dash/Sidebar";

export default function ImageGenerator({ user }) {
  const [activeTab, setActiveTab] = useState("history");
  const [historyItems, setHistoryItems] = useState([
    "Galaxy in blue",
    "Sunset over mountains",
    "Futuristic city",
  ]);
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selectHistory = (item) => {
    setPrompt(item);
    setActiveTab("search");
    setGeneratedImage("");
    setError("");
  };

  const generateImage = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    setHistoryItems((prev) => {
      if (!prev.includes(prompt)) {
        return [prompt, ...prev];
      }
      return prev;
    });

    setLoading(true);
    setGeneratedImage("");
    setError("");

    try {
      // ✅ UPDATED: Changed the endpoint to call your new Freepik route
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/freepik/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await res.json();

      if (res.ok && data.outputUrl) {
        setGeneratedImage(data.outputUrl);
      } else {
        setError(data.error || "Failed to generate image");
        console.error("API Error:", data);
      }
    } catch (err) {
      console.error("Network Error:", err);
      setError("Error generating image. Check your backend or network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Background"
        />
        <div className="absolute inset-0 backdrop-blur-[4px]" />
      </div>

      <div className="relative z-50">
        <Sidebar
          user={user}
          historyItems={historyItems}
          onSelectHistory={selectHistory}
        />
      </div>

      <div className="relative flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-xl backdrop-blur-4xl bg-opacity-70 border border-gray-700  rounded-3xl shadow-2xl p-8 transform transition-transform duration-500 scale-100 hover:scale-[1.01]">
          <h1 className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
            Image Generator
          </h1>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab("history")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeTab === "history"
                  ? "bg-purple-600 text-white border-purple-600 shadow-md"
                  : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-white"
              }`}
            >
              <History size={18} />
              History
            </button>
            <button
              onClick={() => setActiveTab("search")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeTab === "search"
                  ? "bg-purple-600 text-white border-purple-600 shadow-md"
                  : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600 hover:text-white"
              }`}
            >
              <Search size={18} />
              Generate
            </button>
          </div>

          <div className="p-6 bg-gray-900 bg-opacity-40 rounded-2xl border border-gray-700 shadow-inner">
            {activeTab === "history" ? (
              <div className="text-white">
                {historyItems.length === 0 ? (
                  <p className="text-center text-gray-400">
                    No images in history yet.
                  </p>
                ) : (
                  <ul className="space-y-3 max-h-60 overflow-y-auto pr-2">
                    {historyItems.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors duration-200 truncate border-b border-gray-700 pb-2 last:border-b-0"
                        onClick={() => selectHistory(item)}
                        title={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Enter a descriptive prompt..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full px-5 py-3 bg-gray-700 bg-opacity-50 text-white placeholder-gray-400 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300"
                />
                <button
                  onClick={generateImage}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {loading ? "Generating..." : "Generate Image"}
                </button>
                {error && (
                  <p className="text-red-400 text-center mt-2 text-sm animate-pulse">
                    {error}
                  </p>
                )}
                {generatedImage && (
                  <div className="mt-6 p-4 bg-gray-900 bg-opacity-50 rounded-xl shadow-inner-lg transition-all duration-500 transform scale-95 hover:scale-100">
                    <h2 className="text-white text-lg font-medium mb-4 text-center">
                      Generated Image
                    </h2>
                    <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                      <img
                        src={generatedImage}
                        alt="Generated"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}