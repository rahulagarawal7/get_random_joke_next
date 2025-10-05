export default function JokeButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 hover:bg-pink-600 hover:text-white hover:scale-105 w-full sm:w-auto"
    >
      Get Another Joke 🤪
    </button>
  );
}
