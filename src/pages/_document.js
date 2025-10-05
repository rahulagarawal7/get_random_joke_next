import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Basic SEO Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Laugh every day with our Random Joke Generator — built using Next.js and Tailwind CSS. Let’s smile together! 😄"
        />
        <meta
          name="keywords"
          content="Random jokes, Funny jokes, Laugh, Humor, Next.js, Tailwind CSS, Smile, Happiness"
        />
        <meta name="author" content="Rahul Agrawal" />

        {/* ✅ Open Graph (for social media sharing) */}
        <meta property="og:title" content="Let's Laugh Together 😄 | Random Joke Generator" />
        <meta
          property="og:description"
          content="A fun and cheerful app that makes your day brighter with a random joke each time!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Let's Laugh Together 😄 | Random Joke Generator" />
        <meta
          name="twitter:description"
          content="Enjoy a daily dose of laughter with random jokes built with Next.js & Tailwind!"
        />
        <meta name="twitter:creator" content="@rahulagrawal" />

        {/* ✅ Favicon and Branding */}
        <link rel="icon" href="/laugh-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />

        {/* ✅ Fonts / Preconnect (optional performance boost) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="antialiased font-[Poppins] bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
