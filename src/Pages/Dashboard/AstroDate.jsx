import React, { useState, useCallback, useMemo } from 'react';
import { Rocket, CalendarCheck, Globe, Loader2, Search } from 'lucide-react';

const AstroDate = () => {
    // State for user input (date)
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    });
    
    // State for API results
    const [resultText, setResultText] = useState(null);
    const [sources, setSources] = useState([]);
    
    // State for UI management
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // --- Call your backend NASA route ---
    const fetchNasaHistory = useCallback(async (date) => {
        setIsLoading(true);
        setError(null);
        setResultText(null);
        setSources([]);

        try {
            // call your backend API (adjust URL if backend is on different port/domain)
            const response = await fetch(`/api/discover?dob=${date}`);
            if (!response.ok) {
                throw new Error(`Failed with status: ${response.status}`);
            }
            const data = await response.json();

            if (data.apod) {
                // Use APOD info from backend
                const text = `${data.apod.title} — ${data.apod.explanation}`;
                setResultText(text);

                // Add source (NASA APOD link)
                setSources([
                    {
                        uri: data.apod.url,
                        title: data.apod.title || "NASA APOD",
                    }
                ]);
            } else {
                setResultText("No APOD data available for this date.");
            }
        } catch (err) {
            console.error("Backend API Error:", err);
            setError(`Failed to fetch NASA data: ${err.message}`);
        }

        setIsLoading(false);
    }, []);

    // Handle button click
    const handleSearch = () => {
        if (selectedDate) {
            fetchNasaHistory(selectedDate);
        } else {
            setError("Please select a valid date.");
        }
    };

    // Formatted date display for the result title
    const formattedResultDate = useMemo(() => {
        if (selectedDate) {
            return new Date(selectedDate).toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
        }
        return "Selected Date";
    }, [selectedDate]);


    return (
        <div className="min-h-screen flex flex-col pl-60 justify-center font-sans text-white">
            <h1 className="text-4xl font-extrabold text-white mb-4 flex items-center space-x-3">
                <Rocket className="w-8 h-8 text-cyan-400" />
                <span>Born on Discovery</span>
            </h1>
            <p className="text-gray-400 mb-8 max-w-2xl">
                Enter any date to discover what pivotal NASA, space, or astronomical event occurred. Find your cosmic birthday twin!
            </p>

            {/* Input and Action Card */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl shadow-black/30 border border-gray-700 flex flex-col md:flex-row items-center gap-4 mb-10 max-w-4xl">
                <div className="flex-grow w-full">
                    <label htmlFor="dob-date" className="block text-sm font-medium text-gray-300 mb-2">
                        Select a Date (Your Birthday or any date)
                    </label>
                    <input
                        type="date"
                        id="dob-date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
                    />
                </div>
                
                <button
                    onClick={handleSearch}
                    disabled={isLoading || !selectedDate}
                    className="w-full md:w-auto mt-7 flex items-center justify-center space-x-2 bg-cyan-500 text-slate-900 py-3 px-6 rounded-xl hover:bg-cyan-600 transition duration-300 font-semibold shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Searching Cosmos...</span>
                        </>
                    ) : (
                        <>
                            <Search className="w-5 h-5" />
                            <span>Search Discovery</span>
                        </>
                    )}
                </button>
            </div>

            {/* Results Area */}
            <div className="max-w-4xl">
                {error && (
                    <div className="bg-red-900/50 text-red-300 p-4 rounded-xl border border-red-700">
                        <p className="font-semibold">Error:</p>
                        <p>{error}</p>
                    </div>
                )}

                {isLoading && (
                    <div className="text-center p-10">
                        <Loader2 className="w-12 h-12 text-cyan-400 mx-auto animate-spin mb-4" />
                        <p className="text-gray-400">Consulting the astronomical archives...</p>
                    </div>
                )}

                {resultText && (
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-black/50 border border-gray-700">
                        <h2 className="text-3xl font-extrabold text-cyan-400 mb-4 flex items-center space-x-2 border-b border-gray-700 pb-2">
                            <CalendarCheck className="w-6 h-6" />
                            <span>Discovery for {formattedResultDate}</span>
                        </h2>

                        {/* Scrollable content */}
                        <div className="max-h-64 overflow-y-auto pr-3">
                            <p className="text-lg text-gray-200 leading-relaxed">
                                {resultText}
                            </p>
                        </div>

                        {/* Citations / Sources */}
                        {sources.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-gray-700">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                                    <Globe className="w-4 h-4 inline mr-1" />
                                    Sources
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                                    {sources.map((source, index) => (
                                        <li key={index} className="truncate">
                                            <a 
                                                href={source.uri} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-cyan-400 hover:text-cyan-300 transition duration-150"
                                                title={source.title || source.uri}
                                            >
                                                {source.title || source.uri}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AstroDate;
