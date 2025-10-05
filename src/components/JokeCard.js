import { useState } from "react";

export default function JokeCard({ setup, punchline }) {
  const [showPunchline, setShowPunchline] = useState(false);
  if (!setup) return null;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full mb-6 transform transition duration-300 hover:scale-105">
      <p className="text-gray-800 text-lg sm:text-xl font-medium leading-relaxed">{setup}</p>

      {showPunchline && (
        <p className="text-pink-600 text-xl sm:text-2xl font-semibold mt-4 transition-opacity duration-300">
          {punchline}
        </p>
      )}

      <button
        onClick={() => setShowPunchline(!showPunchline)}
        className="mt-5 bg-pink-600 text-white font-semibold px-5 py-2 rounded-full transition duration-300 hover:bg-pink-700 w-full sm:w-auto"
      >
        {showPunchline ? "Hide Punchline 🙈" : "Show Punchline 😂"}
      </button>
    </div>
  );
}
