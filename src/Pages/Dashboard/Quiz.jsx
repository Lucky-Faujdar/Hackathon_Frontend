import { useState } from "react";
import image from "../../assets/wave.gif";
import Sidebar from "../../components/Dash/Sidebar";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language",
      "None of the above",
    ],
    answer: "Hyper Text Markup Language",
  },
];

export default function Quiz({user}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === quizData[currentIndex].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative w-screen h-screen flex items-center">
      <div className="bg-transparent absolute left-0 z-50">
        <Sidebar user={user} />
      </div>
      <div className="relative w-screen h-screen">
        {/* Background */}
        <div className="w-full h-full absolute bottom-90 z-0 object-cover">
          <img className="w-full" src={image} alt="" />
        </div>
        {/* frontground */}
        <div className="flex items-centerv relative justify-center max-h-screen p-4">
          <div className="w-full max-w-xl absolute top-50 backdrop-blur-sm border-2 border-zinc-400 rounded-2xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-white mb-6 text-center">
              Quiz
            </h1>

            {showScore ? (
              <div className="text-center text-white">
                <p className="text-lg">You scored:</p>
                <p className="text-3xl font-bold mt-2">
                  {score} / {quizData.length}
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-4 text-white font-medium">
                  <p>
                    Question {currentIndex + 1} of {quizData.length}:
                  </p>
                  <p className="mt-2">{quizData[currentIndex].question}</p>
                </div>

                <div className="flex flex-col w-3/4 gap-3 mb-4">
                  {quizData[currentIndex].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      className={`px-4 py-2 rounded-xl border transition text-left ${
                        selectedOption === option
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-zinc-500"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className={`w-full py-2 rounded-xl text-black font-[font1] tracking-wider  transition ${
                    selectedOption
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  {currentIndex + 1 === quizData.length ? "Finish" : "Next"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
