import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ addToHistory }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Minimal addition: dynamic backend URL
  const BASE_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : "https://biodhyan-backend.onrender.com";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
           `${BASE_URL}/api/search?q=${encodeURIComponent(query)}&limit=10`
        );

      // ✅ Check response type before parsing
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        setResults(data.results || []);
      } else {
        const text = await res.text();
        console.error("Expected JSON, but got:", text.slice(0, 200));
        setResults([]);
      }

      // ✅ Add search to history
      addToHistory(query);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Input */}
      <form
        onSubmit={handleSearch}
        className="relative w-full max-w-2xl bottom-50"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for research, topics, or cosmic events..."
          className="w-full py-4 pl-12 pr-4 font-[font2] tracking-wider bg-zinc-700 text-white border-2 border-gray-700 rounded-full focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <button type="submit">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </button>
      </form>

      {/* Search Results */}
      <div className="grid gap-4 w-full max-w-4xl max-h-[70vh] overflow-y-auto pr-2">
        {loading && <p className="text-gray-400">Searching...</p>}
        {!loading && results.length === 0 && query && (
          <p className="text-gray-400">No results found.</p>
        )}

        {results.map((item, i) => (
          <div
            key={i}
            className="bg-zinc-800 p-4 rounded-2xl border border-gray-700 shadow-md hover:border-cyan-500 transition-colors"
          >
            <h2 className="text-xl font-bold text-white">{item.title}</h2>
            <p className="text-gray-300 mt-2 line-clamp-3">
              {item.explanation}
            </p>
            {item.url && item.media_type === "image" && (
              <img
                src={item.url}
                alt={item.title}
                className="mt-3 rounded-xl max-h-60 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
