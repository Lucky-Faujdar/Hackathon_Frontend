// import { useState } from "react";
// import Sidebar from "../../components/Dash/Sidebar";
// import image from "../../assets/Moon.jpg";
// import { Lock } from "lucide-react";

// // Each level has questions
// const levelsData = [
//   { id: 1, questions: [{ question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4", points: 10 }] },
//   { id: 2, questions: [{ question: "Which is a programming language?", options: ["HTML", "Python", "CSS"], answer: "Python", points: 15 }] },
//   { id: 3, questions: [{ question: "JS stands for?", options: ["JavaScreen", "JavaScript", "JustScript"], answer: "JavaScript", points: 20 }] },
//   { id: 4, questions: [{ question: "Which is backend?", options: ["Node.js", "CSS", "HTML"], answer: "Node.js", points: 20 }] },
//   { id: 5, questions: [{ question: "React is a ____ library?", options: ["UI", "DB", "Server"], answer: "UI", points: 20 }] },
//   { id: 6, questions: [{ question: "What is CSS for?", options: ["Structure", "Styling", "Logic"], answer: "Styling", points: 15 }] },
//   { id: 7, questions: [{ question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris", points: 10 }] },
// ];

// // 🎨 Coordinates for each level on the TALLER, SCROLLABLE map
// const levelPositions = [
//   { top: "90%", left: "20%" },
//   { top: "78%", left: "50%" },
//   { top: "66%", left: "30%" },
//   { top: "54%", left: "60%" },
//   { top: "42%", left: "40%" },
//   { top: "30%", left: "70%" },
//   { top: "15%", left: "50%" },
// ];

// export default function GamifiedLearning({ user }) {
//   const [unlockedLevels, setUnlockedLevels] = useState([1]);
//   const [activeLevel, setActiveLevel] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);
//   const [finished, setFinished] = useState(false);

//   const handleLevelClick = (levelId) => {
//     if (unlockedLevels.includes(levelId)) {
//       setActiveLevel(levelId);
//       setCurrentIndex(0);
//       setSelectedOption("");
//       setScore(0);
//       setFinished(false);
//     }
//   };

//   const handleNext = () => {
//     const levelData = levelsData.find((l) => l.id === activeLevel);
//     if (!levelData) return;

//     if (selectedOption === levelData.questions[currentIndex].answer) {
//       setScore(score + levelData.questions[currentIndex].points);
//     }

//     if (currentIndex + 1 < levelData.questions.length) {
//       setCurrentIndex(currentIndex + 1);
//       setSelectedOption("");
//     } else {
//       setFinished(true);
//       if (activeLevel + 1 <= levelsData.length && !unlockedLevels.includes(activeLevel + 1)) {
//         setUnlockedLevels([...unlockedLevels, activeLevel + 1]);
//       }
//     }
//   };

//   return (
//     <div className="relative w-screen h-screen flex items-center">
//       <div className="absolute left-0 z-50">
//         <Sidebar user={user} />
//       </div>

//       <div className="relative w-screen h-screen">
//         <div className="w-full h-full absolute -top-10 left-180 object-cover scale-130 -z-10">
//           <img className="w-full" src={image} alt="Cosmic background" />
//         </div>

//         <div className="flex flex-col items-center justify-center relative min-h-screen p-4">
//           <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
//             Learning Path
//           </h1>

//           {/* LEVEL MAP */}
//           {!activeLevel && (
//             // Outer container sets the visible, scrollable area
//             <div className="w-full max-w-lg h-[500px] bg-black bg-opacity-20 backdrop-blur-sm border-2 border-cyan-400/50 rounded-2xl p-4 overflow-y-auto">
//               {/* Inner container is taller than the outer one, enabling scrolling */}
//               <div className="relative w-full h-[800px]">
//                 {/* SVG Path is now drawn inside the taller container */}
//                 <svg width="100%" height="100%" className="absolute top-0 left-0 z-0">
//                   <path
//                     d="M 20% 90% C 35% 85%, 45% 85%, 50% 78% S 40% 70%, 30% 66% S 45% 58%, 60% 54% S 50% 45%, 40% 42% S 55% 35%, 70% 30% S 60% 20%, 50% 15%"
//                     stroke="rgba(255, 255, 255, 0.4)"
//                     strokeWidth="4"
//                     fill="none"
//                     strokeDasharray="8"
//                   />
//                 </svg>

//                 {/* Level Nodes */}
//                 {levelsData.map((level, index) => {
//                   const isUnlocked = unlockedLevels.includes(level.id);
//                   const position = levelPositions[index];

//                   return (
//                     <div
//                       key={level.id}
//                       className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
//                       style={{ top: position.top, left: position.left }}
//                     >
//                       <button
//                         onClick={() => handleLevelClick(level.id)}
//                         disabled={!isUnlocked}
//                         className={`w-20 h-20 rounded-full text-white font-bold flex items-center justify-center shadow-lg transition-all duration-300 border-4
//                           ${
//                             isUnlocked
//                               ? "bg-gradient-to-br from-blue-500 to-purple-600 border-cyan-300 hover:scale-110 hover:shadow-cyan-400/50"
//                               : "bg-gray-700 border-gray-500 cursor-not-allowed"
//                           }`}
//                       >
//                         {isUnlocked ? (
//                           <span className="text-2xl drop-shadow-md">
//                             {level.id}
//                           </span>
//                         ) : (
//                           <Lock size={32} />
//                         )}
//                       </button>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* QUIZ MODE (No changes here) */}
//           {activeLevel && (
//              <div className="w-full max-w-xl backdrop-blur-sm border-2 border-zinc-400 rounded-2xl shadow-lg p-6">
//              <h2 className="text-xl font-bold text-white mb-4 text-center">
//                Level {activeLevel}
//              </h2>

//              {finished ? (
//                <div className="text-center text-white">
//                  <p className="text-lg">🎉 You finished Level {activeLevel}!</p>
//                  <p className="mt-2">Score: {score}</p>
//                  <button
//                    onClick={() => setActiveLevel(null)}
//                    className="mt-4 px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-600"
//                  >
//                    Back to Levels
//                  </button>
//                </div>
//              ) : (
//                <div>
//                  <p className="text-white mb-3">
//                    Q{currentIndex + 1}: {levelsData.find((l) => l.id === activeLevel)?.questions[currentIndex].question}
//                  </p>

//                  <div className="flex flex-col gap-3 mb-4">
//                    {levelsData
//                      .find((l) => l.id === activeLevel)
//                      ?.questions[currentIndex].options.map((option, idx) => (
//                        <button
//                          key={idx}
//                          onClick={() => setSelectedOption(option)}
//                          className={`px-4 py-2 rounded-xl border transition text-left ${
//                            selectedOption === option
//                              ? "bg-blue-500 text-white border-blue-500"
//                              : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
//                          }`}
//                        >
//                          {option}
//                        </button>
//                      ))}
//                  </div>

//                  <button
//                    onClick={handleNext}
//                    disabled={!selectedOption}
//                    className={`w-full py-2 rounded-xl text-white font-medium transition ${
//                      selectedOption
//                        ? "bg-green-500 hover:bg-green-600"
//                        : "bg-gray-400 cursor-not-allowed"
//                    }`}
//                  >
//                    {currentIndex + 1 === levelsData.find((l) => l.id === activeLevel)?.questions.length
//                      ? "Finish Level"
//                      : "Next"}
//                  </button>
//                </div>
//              )}
//            </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
console.log("hello");

// import { useState } from "react";
// import Sidebar from "../../components/Dash/Sidebar";
// import image from "../../assets/Moon.jpg";
// import { Lock } from "lucide-react";

// // Each level has questions
// const levelsData = [
//   { id: 1, questions: [{ question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4", points: 10 }] },
//   { id: 2, questions: [{ question: "Which is a programming language?", options: ["HTML", "Python", "CSS"], answer: "Python", points: 15 }] },
//   { id: 3, questions: [{ question: "JS stands for?", options: ["JavaScreen", "JavaScript", "JustScript"], answer: "JavaScript", points: 20 }] },
//   { id: 4, questions: [{ question: "Which is backend?", options: ["Node.js", "CSS", "HTML"], answer: "Node.js", points: 20 }] },
//   { id: 5, questions: [{ question: "React is a ____ library?", options: ["UI", "DB", "Server"], answer: "UI", points: 20 }] },
//   { id: 6, questions: [{ question: "What is CSS for?", options: ["Structure", "Styling", "Logic"], answer: "Styling", points: 15 }] },
//   { id: 7, questions: [{ question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris", points: 10 }] },
// ];

// // 🎨 Coordinates for each level on the TALLER, SCROLLABLE map
// const levelPositions = [
//   { top: "90%", left: "20%" },
//   { top: "78%", left: "50%" },
//   { top: "66%", left: "30%" },
//   { top: "54%", left: "60%" },
//   { top: "42%", left: "40%" },
//   { top: "30%", left: "70%" },
//   { top: "15%", left: "50%" },
// ];

// export default function GamifiedLearning({ user }) {
//   const [unlockedLevels, setUnlockedLevels] = useState([1]);
//   const [activeLevel, setActiveLevel] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);
//   const [finished, setFinished] = useState(false);

//   const handleLevelClick = (levelId) => {
//     if (unlockedLevels.includes(levelId)) {
//       setActiveLevel(levelId);
//       setCurrentIndex(0);
//       setSelectedOption("");
//       setScore(0);
//       setFinished(false);
//     }
//   };

//   const handleNext = () => {
//     const levelData = levelsData.find((l) => l.id === activeLevel);
//     if (!levelData) return;

//     if (selectedOption === levelData.questions[currentIndex].answer) {
//       setScore(score + levelData.questions[currentIndex].points);
//     }

//     if (currentIndex + 1 < levelData.questions.length) {
//       setCurrentIndex(currentIndex + 1);
//       setSelectedOption("");
//     } else {
//       setFinished(true);
//       if (activeLevel + 1 <= levelsData.length && !unlockedLevels.includes(activeLevel + 1)) {
//         setUnlockedLevels([...unlockedLevels, activeLevel + 1]);
//       }
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex ">
//       <div className="absolute inset-0 z-0">
//         <img
//           className="w-full h-full object-cover"
//           src={image}
//           alt="Cosmic background"
//         />
//         <div className="absolute inset-0 bg-gray-950 bg-opacity-70 backdrop-blur-sm" />
//       </div>

//       <div className="relative z-50">
//         <Sidebar user={user} />
//       </div>

//       <div className="relative flex-1 flex flex-col items-center justify-center p-4">
//         <h1 className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide drop-shadow-lg">
//           Learning Path
//         </h1>

//         {/* LEVEL MAP */}
//         {!activeLevel && (
//           <div className="w-full max-w-lg h-[500px] bg-gray-900 bg-opacity-50 border border-gray-700 backdrop-blur-xl rounded-3xl shadow-xl p-6 overflow-y-auto scrollbar-hide">
//             <div className="relative w-full h-[800px]">
//               <svg width="100%" height="100%" className="absolute top-0 left-0 z-0">
//                 <path
//                   d="M 20% 90% C 35% 85%, 45% 85%, 50% 78% S 40% 70%, 30% 66% S 45% 58%, 60% 54% S 50% 45%, 40% 42% S 55% 35%, 70% 30% S 60% 20%, 50% 15%"
//                   stroke="#9CA3AF"
//                   strokeWidth="3"
//                   strokeDasharray="6"
//                   fill="none"
//                   className="animate-pulse"
//                 />
//               </svg>

//               {levelsData.map((level, index) => {
//                 const isUnlocked = unlockedLevels.includes(level.id);
//                 const position = levelPositions[index];

//                 return (
//                   <div
//                     key={level.id}
//                     className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:z-20"
//                     style={{ top: position.top, left: position.left }}
//                   >
//                     <button
//                       onClick={() => handleLevelClick(level.id)}
//                       disabled={!isUnlocked}
//                       className={`relative w-24 h-24 rounded-full text-white font-bold flex flex-col items-center justify-center shadow-lg transition-all duration-300 overflow-hidden
//                         ${isUnlocked
//                           ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-purple-400 hover:scale-110 hover:shadow-[0_0_20px_#A855F7]"
//                           : "bg-gray-700 border-4 border-gray-600 cursor-not-allowed"
//                         }`}
//                     >
//                       {isUnlocked ? (
//                         <>
//                           <div className="absolute inset-0 bg-black opacity-30" />
//                           <span className="text-4xl font-extrabold z-10 drop-shadow-lg">
//                             {level.id}
//                           </span>
//                           <span className="text-xs font-medium z-10 mt-1 uppercase tracking-wider">
//                             Level
//                           </span>
//                         </>
//                       ) : (
//                         <Lock size={36} className="text-gray-400 z-10" />
//                       )}
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* QUIZ MODE */}
//         {activeLevel && (
//           <div className="w-full max-w-xl bg-gray-900 bg-opacity-50 border border-gray-700 backdrop-blur-xl rounded-3xl shadow-xl p-8">
//             <h2 className="text-2xl font-bold text-white mb-6 text-center">
//               Level {activeLevel}
//             </h2>

//             {finished ? (
//               <div className="text-center text-white">
//                 <p className="text-lg font-semibold">🎉 You finished Level {activeLevel}!</p>
//                 <p className="mt-2 text-xl font-bold">Score: {score} points</p>
//                 <button
//                   onClick={() => setActiveLevel(null)}
//                   className="mt-6 px-8 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md"
//                 >
//                   Back to Levels
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <p className="text-white text-lg mb-4">
//                   <span className="font-semibold text-purple-300">Q{currentIndex + 1}:</span>
//                   {levelsData.find((l) => l.id === activeLevel)?.questions[currentIndex].question}
//                 </p>

//                 <div className="flex flex-col gap-4 mb-6">
//                   {levelsData
//                     .find((l) => l.id === activeLevel)
//                     ?.questions[currentIndex].options.map((option, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setSelectedOption(option)}
//                         className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-left
//                           ${selectedOption === option
//                             ? "bg-purple-600 text-white border-purple-600 shadow-md"
//                             : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white"
//                           }`}
//                       >
//                         {option}
//                       </button>
//                     ))}
//                 </div>

//                 <button
//                   onClick={handleNext}
//                   disabled={!selectedOption}
//                   className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300
//                     ${selectedOption
//                       ? "bg-purple-600 hover:bg-purple-700 shadow-md"
//                       : "bg-gray-700 cursor-not-allowed text-gray-400"
//                     }`}
//                 >
//                   {currentIndex + 1 === levelsData.find((l) => l.id === activeLevel)?.questions.length
//                     ? "Finish Level"
//                     : "Next Question"}
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Sidebar from "../../components/Dash/Sidebar";
import image from "../../assets/game.mp4";
import { Lock } from "lucide-react";

// Each level has questions
const levelsData = [
  {
    id: 1,
    questions: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4",
        points: 10,
      },
    ],
  },
  {
    id: 2,
    questions: [
      {
        question: "Which is a programming language?",
        options: ["HTML", "Python", "CSS"],
        answer: "Python",
        points: 15,
      },
    ],
  },
  {
    id: 3,
    questions: [
      {
        question: "JS stands for?",
        options: ["JavaScreen", "JavaScript", "JustScript"],
        answer: "JavaScript",
        points: 20,
      },
    ],
  },
  {
    id: 4,
    questions: [
      {
        question: "Which is backend?",
        options: ["Node.js", "CSS", "HTML"],
        answer: "Node.js",
        points: 20,
      },
    ],
  },
  {
    id: 5,
    questions: [
      {
        question: "React is a ____ library?",
        options: ["UI", "DB", "Server"],
        answer: "UI",
        points: 20,
      },
    ],
  },
  {
    id: 6,
    questions: [
      {
        question: "What is CSS for?",
        options: ["Structure", "Styling", "Logic"],
        answer: "Styling",
        points: 15,
      },
    ],
  },
  {
    id: 7,
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        answer: "Paris",
        points: 10,
      },
    ],
  },
];

// 🎨 Coordinates for each level on the TALLER, SCROLLABLE map
const levelPositions = [
  { top: "90%", left: "20%" },
  { top: "78%", left: "50%" },
  { top: "66%", left: "30%" },
  { top: "54%", left: "60%" },
  { top: "42%", left: "40%" },
  { top: "30%", left: "70%" },
  { top: "15%", left: "50%" },
];

export default function GamifiedLearning({ user }) {
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [activeLevel, setActiveLevel] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleLevelClick = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      setActiveLevel(levelId);
      setCurrentIndex(0);
      setSelectedOption("");
      setScore(0);
      setFinished(false);
    }
  };

  const handleNext = () => {
    const levelData = levelsData.find((l) => l.id === activeLevel);
    if (!levelData) return;

    if (selectedOption === levelData.questions[currentIndex].answer) {
      setScore(score + levelData.questions[currentIndex].points);
    }

    if (currentIndex + 1 < levelData.questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    } else {
      setFinished(true);
      if (
        activeLevel + 1 <= levelsData.length &&
        !unlockedLevels.includes(activeLevel + 1)
      ) {
        setUnlockedLevels([...unlockedLevels, activeLevel + 1]);
      }
    }
  };

  return (
    <div className="relative min-h-screen flex ">
       
      <div className="absolute inset-0 z-0 ">
               
        <video autoPlay loop muted
          className="w-full h-full object-cover "
          src={image}
          alt="Cosmic background"
        />
               
        <div className="absolute inset-0 bg-opacity-70 backdrop-blur-[4px]" />
             
      </div>
           
      <div className="relative z-50">
                <Sidebar user={user} />     
      </div>
           
      <div className="relative flex-1 flex flex-col items-center justify-center p-4">
               
        <h1 className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide drop-shadow-lg">
                    Learning Path        
        </h1>
                {/* LEVEL MAP */}       
        {!activeLevel && (
          <div className="w-80  max-w-lg h-[500px] bg-opacity-50 border border-gray-700 backdrop-blur-sm rounded-3xl shadow-xl p-6 overflow-y-auto custom-scrollbar">
                       
            <div className="relative w-full h-[800px]">
                           
              <svg
                width="100%"
                height="100%"
                className="absolute top-0 left-0 z-0"
              >
                               
                <path
                  d="M 20% 90% C 35% 85%, 45% 85%, 50% 78% S 40% 70%, 30% 66% S 45% 58%, 60% 54% S 50% 45%, 40% 42% S 55% 35%, 70% 30% S 60% 20%, 50% 15%"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  strokeDasharray="6"
                  fill="none"
                />
                             
              </svg>
                           
              {levelsData.map((level, index) => {
                const isUnlocked = unlockedLevels.includes(level.id);
                const position = levelPositions[index];

                return (
                  <div
                    key={level.id}
                    className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:z-20"
                    style={{ top: position.top, left: position.left }}
                  >
                                       
                    <button
                      onClick={() => handleLevelClick(level.id)}
                      disabled={!isUnlocked}
                      className={`relative w-24 h-24 rounded-full text-white font-bold flex flex-col items-center justify-center shadow-lg transition-all duration-300 overflow-hidden
                        ${
                        isUnlocked
                          ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-purple-400 hover:scale-110 hover:shadow-[0_0_20px_#A855F7]"
                          : "bg-gray-700 border-4 border-gray-600 cursor-not-allowed"
                      }`}
                    >
                                           
                      {isUnlocked ? (
                        <>
                                                   
                          <div className="absolute inset-0 bg-black opacity-30" />
                                                   
                          <span className="text-4xl font-extrabold z-10 drop-shadow-lg">
                                                        {level.id}             
                                       
                          </span>
                                                   
                          <span className="text-xs font-medium z-10 mt-1 uppercase tracking-wider">
                                                        Level                  
                                   
                          </span>
                                                 
                        </>
                      ) : (
                        <Lock size={36} className="text-gray-400 z-10" />
                      )}
                    </button>
                                     
                  </div>
                );
              })}
                         
            </div>
                     
          </div>
        )}
                {/* QUIZ MODE */}       
        {activeLevel && (
          <div className="w-full max-w-xl bg-opacity-50 border border-gray-700 backdrop-blur-xl rounded-3xl shadow-xl p-8">
                       
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Level {activeLevel}           
            </h2>
                       
            {finished ? (
              <div className="text-center text-white">
                               
                <p className="text-lg font-semibold">
                  🎉 You finished Level {activeLevel}!
                </p>
                               
                <p className="mt-2 text-xl font-bold">Score: {score} points</p> 
                             
                <button
                  onClick={() => setActiveLevel(null)}
                  className="mt-6 px-8 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md"
                >
                                    Back to Levels                
                </button>
                             
              </div>
            ) : (
              <div>
                               
                <p className="text-white text-lg mb-4">
                                   
                  <span className="font-semibold text-purple-300">
                    Q{currentIndex + 1}:
                  </span>
                                   
                  {
                    levelsData.find((l) => l.id === activeLevel)?.questions[
                      currentIndex
                    ].question
                  }
                                 
                </p>
                               
                <div className="flex flex-col gap-4 mb-6">
                                   
                  {levelsData
                    .find((l) => l.id === activeLevel)
                    ?.questions[currentIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedOption(option)}
                        className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-left
                          ${
                          selectedOption === option
                            ? "bg-purple-600 text-white border-purple-600 shadow-md"
                            : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                                                {option}                     
                      </button>
                    ))}
                                 
                </div>
                               
                <button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300
                    ${
                    selectedOption
                      ? "bg-purple-600 hover:bg-purple-700 shadow-md"
                      : "bg-gray-700 cursor-not-allowed text-gray-400"
                  }`}
                >
                                   
                  {currentIndex + 1 ===
                  levelsData.find((l) => l.id === activeLevel)?.questions.length
                    ? "Finish Level"
                    : "Next Question"}
                                 
                </button>
                             
              </div>
            )}
                     
          </div>
        )}
             
      </div>
         
    </div>
  );
}
