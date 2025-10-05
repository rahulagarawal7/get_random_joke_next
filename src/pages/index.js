import { useEffect, useState } from "react";
import Head from "next/head";
import JokeCard from "../components/JokeCard";
import JokeButton from "../components/JokeButton";
import Loader from "../components/Loader";

export default function Home() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      {/* ✅ SEO Optimization */}
      <Head>
        <title>{"Let's Laugh Together 😄 | Random Joke Generator"}</title>
        <meta
          name="description"
          content="Spread smiles and laughter! Get a random funny joke every time you click. Built with Next.js and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Joke, Random Joke, Laughter, Smile, Funny, Next.js, Tailwind CSS, API jokes"
        />
        <meta name="author" content="Rahul Agrawal" />
        <meta property="og:title" content={"Let's Laugh Together 😄"} />
        <meta
          property="og:description"
          content="A fun Next.js app that makes you smile with a random joke every time!"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ✅ Main UI */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 text-center px-6 py-10 sm:px-8">
        {/* 🎯 Fun heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-pink-200 drop-shadow-lg">
          {"Let's Laugh"}
        </h1>
        <p className="text-white text-base sm:text-lg mb-8 opacity-90">
          {"A little smile can change your day — here's one from us! 💫"}
        </p>

        <div className="w-full flex flex-col items-center max-w-lg">
          {loading ? <Loader /> : <JokeCard setup={joke?.setup} punchline={joke?.punchline} />}
          <JokeButton onClick={fetchJoke} />
        </div>

        <footer className="mt-10 text-white text-sm opacity-80">
          Made with ❤️ by Rahul Agrawal
        </footer>
      </div>
    </>
  );
}
