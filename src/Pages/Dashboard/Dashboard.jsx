import React, { useState } from "react";
import Sidebar from "../../components/Dash/Sidebar";
import MainContent from "../../components/Dash/MainContent";
import Neptune from "../../components/Planets/Neptune";

const DashboardPage = ({ user }) => {
  // ✅ State to keep history
  const [historyItems, setHistoryItems] = useState([]);

  // ✅ Function to add new search to history
  const addToHistory = (query) => {
    setHistoryItems((prev) => [query, ...prev]);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full top-0 absolute left-0 object-cover z-0">
        <Neptune />
      </div>
      <div className="absolute w-full h-full z-10 flex items-center">
        {/* Pass historyItems into Sidebar */}
        <Sidebar user={user} historyItems={historyItems} />

        {/* Pass addToHistory into MainContent so SearchBar can use it */}
        <MainContent addToHistory={addToHistory} />
      </div>
    </div>
  );
};

export default DashboardPage;
