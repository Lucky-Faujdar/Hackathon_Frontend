import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <img
        src={user.profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-cyan-400 mb-4"
      />
      <h1 className="text-4xl font-bold">{user.name}</h1>
      <p className="text-xl text-cyan-400 mb-8">{user.status}</p>

      <p className="max-w-md text-gray-400">
        This is where the user's detailed profile information, achievements, and
        activity log would be displayed.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-2 bg-cyan-500 text-gray-900 font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
      >
        &larr; Back to Dashboard
      </Link>
    </div>
  );
};

export default Profile;
