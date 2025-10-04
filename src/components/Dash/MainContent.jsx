import React from "react";
import SearchBar from "./SearchBar";

const MainContent = ({ addToHistory }) => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-10">
      {/* Title */}

      {/* ✅ Pass addToHistory so SearchBar can update Sidebar history */}
      <SearchBar addToHistory={addToHistory} />

      {/* Other dashboard content would go here */}
    </main>
  );
};

export default MainContent;
