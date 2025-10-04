import React, { useState } from "react";
import {
  Mail,
  Briefcase,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Search,
  Edit,
} from "lucide-react";

// --- MOCK DATA FOR DEMONSTRATION ---
const mockUser = {
  name: "Dr. Evelyn Reed",
  profession: "Computational Biologist",
  email: "evelyn.reed@bioengine.com",
  contact: "+1 (555) 123-4567",
  location: "Boston, MA",
  memberSince: "May 2023",
  profileImage: "https://placehold.co/150x150/0F172A/FFFFFF?text=ER", // Updated placeholder for dark theme
};

// Search history, sorted by most recent date
const mockSearchHistory = [
  {
    id: 1,
    query: "Gene expression analysis of SARS-CoV-2 variants",
    date: "2024-10-02 11:45 AM",
    category: "Virology",
  },
  {
    id: 2,
    query: "Mechanisms of cellular senescence in aging",
    date: "2024-10-01 09:10 AM",
    category: "Gerontology",
  },
  {
    id: 3,
    query: "Protein folding prediction algorithms review",
    date: "2024-09-28 03:22 PM",
    category: "Bioinformatics",
  },
  {
    id: 4,
    query: "Impact of microplastics on marine phytoplankton diversity",
    date: "2024-09-27 07:05 PM",
    category: "Ecology",
  },
  {
    id: 5,
    query: "Review of CRISPR-Cas9 genome editing advancements (Q3 2024)",
    date: "2024-09-25 04:00 PM",
    category: "Genetics",
  },
  {
    id: 6,
    query: "Biomarkers for early-stage neurodegenerative diseases",
    date: "2024-09-22 10:30 AM",
    category: "Neurology",
  },
  {
    id: 7,
    query: "A study on deep-sea hydrothermal vent extremophiles",
    date: "2024-09-21 09:00 AM",
    category: "Microbiology",
  },
  {
    id: 8,
    query: "The role of telomeres in cellular division",
    date: "2024-09-20 02:45 PM",
    category: "Cytology",
  },
  {
    id: 9,
    query: "Synthetic biology applications in sustainable energy",
    date: "2024-09-18 11:15 AM",
    category: "Bioengineering",
  },
  {
    id: 10,
    query: "The latest findings in regenerative medicine research",
    date: "2024-09-15 05:00 PM",
    category: "Medicine",
  },
  {
    id: 11,
    query: "Comparative anatomy of avian respiratory systems",
    date: "2024-09-12 08:30 AM",
    category: "Zoology",
  },
  {
    id: 12,
    query: "Analyzing fungal network communication pathways",
    date: "2024-09-10 03:00 PM",
    category: "Mycology",
  },
];

// --- APP COMPONENT ---

const Profile = () => {
  const [user] = useState(mockUser);
  const [history] = useState(mockSearchHistory);

  // Helper component for displaying a single user detail line
  const DetailItem = ({ Icon, label, value }) => (
    <div className="flex items-center space-x-3 mb-4 text-gray-300">
      <Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-400">{label}</span>
        <span className="text-base font-semibold text-white">{value}</span>
      </div>
    </div>
  );

  // Helper component for a single history timeline entry
  const HistoryEntry = ({ query, date, category, isLast }) => (
    <div className="relative pl-8 pb-8">
      {/* Timeline line - hidden for the last item */}
      {!isLast && (
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
      )}
      {/* Timeline Node */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-slate-900 shadow-md"></div>

      <div className="ml-4 bg-gray-800 p-4 rounded-xl shadow-md shadow-black/20 border border-gray-700 transition duration-300 hover:shadow-xl hover:shadow-cyan-900/50">
        <div className="flex justify-between items-start">
          <p className="text-sm font-semibold text-cyan-400 mb-1 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </p>
          <span className="text-xs font-medium bg-gray-700 text-gray-300 px-3 py-1 rounded-full shadow-inner">
            {category}
          </span>
        </div>
        <p className="text-lg font-bold text-white mt-1">{query}</p>
      </div>
    </div>
  );

  return (
    // 1. Root container set to full viewport height (h-screen), enables vertical flex layout, and hides overall overflow.
    <div className="h-168 p-4 pt-20 font-sans text-white flex flex-col overflow-hidden">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center md:text-left pb-2 flex-shrink-0 font-[font1]">
        User Profile & Search History
      </h1>

      {/* 2. Grid container is set to grow and occupy remaining height, hiding its own overflow. */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-[font1] flex-grow overflow-hidden">
        {/* 1. Profile Details Card (1/3 width on desktop) */}
        {/* Content is set to fit its natural height (h-fit) and is NOT scrollable. */}
        <div className="lg:col-span-1  p-6 rounded-2xl shadow-2xl shadow-black/50 border border-gray-700 ">
          <div className="flex gap-8 items-center border-b border-gray-700 pb-6 mb-6">
            <div className="relative">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-25 h-25 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
              />
              <button
                className="absolute bottom-0 right-0 p-2 bg-cyan-500 text-white rounded-full shadow-xl hover:bg-cyan-600 transition duration-300"
                aria-label="Edit profile picture"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div >
              <h2 className="text-3xl font-bold text-white mt-4">
                {user.name}
              </h2>
              <p className="text-lg font-medium text-cyan-400">
                {user.profession}
              </p>
            </div>
          </div>

          <div className="space-y-2">
        
            <DetailItem Icon={Mail} label="Email Address" value={user.email} />
            <DetailItem
              Icon={Phone}
              label="Contact Number"
              value={user.contact}
            />
            <DetailItem Icon={MapPin} label="Location" value={user.location} />
            <DetailItem
              Icon={Calendar}
              label="Member Since"
              value={user.memberSince}
            />
          </div>

          <button className="w-full mt-2 flex items-center justify-center space-x-2 bg-cyan-500 text-slate-900 py-3 rounded-xl hover:bg-cyan-600 transition duration-300 font-semibold shadow-lg shadow-cyan-500/30">
            <Edit className="w-5 h-5" />
            <span>Update Profile Details</span>
          </button>
        </div>

        {/* 2. Search History Timeline (2/3 width on desktop) */}
        {/* Container is set to fill height and use flex-col to manage header and content area. */}
        <div className="lg:col-span-2  p-6 rounded-2xl shadow-inner shadow-black/30 border border-gray-800 flex flex-col overflow-hidden">
          {/* Header is fixed height (flex-shrink-0) */}
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3 flex-shrink-0">
            <Search className="w-7 h-7 text-cyan-400" />
            <span>Recent Search History</span>
          </h2>

          {/* Timeline Content is set to take remaining space (flex-grow) and is scrollable. */}
          <div className="space-y-0 overflow-y-auto flex-grow pr-2">
            {history.map((entry, index) => (
              <HistoryEntry
                key={entry.id}
                query={entry.query}
                date={entry.date}
                category={entry.category}
                isLast={index === history.length - 1}
              />
            ))}
            {/* Added a small bottom padding div for clean scroll margin */}
            <div className="pt-4"></div>
          </div>

          {history.length === 0 && (
            <div className="text-center p-10 bg-gray-800 rounded-xl shadow-lg shadow-black/20 flex-shrink-0">
              <Clock className="w-12 h-12 mx-auto text-gray-500 mb-4" />
              <p className="text-gray-400">
                No search history found yet. Start exploring!{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
