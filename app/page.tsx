"use client";

import { useEffect, useState } from "react";

export default function AnniversaryPage() {
  const [musicPlaying, setMusicPlaying] = useState(true);

  useEffect(() => {
    document.title = "Olivier & Isabelle";

    const audio = document.getElementById(
      "bgmusic"
    ) as HTMLAudioElement;

    if (audio) {
      audio.volume = 0.7;

      audio.play().catch(() => {
        console.log("Autoplay blocked");
      });
    }
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById(
      "bgmusic"
    ) as HTMLAudioElement;

    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  return (
    <main className="min-h-screen bg-[#17141c] text-white overflow-hidden relative">

      {/* MUSIC */}
      <audio id="bgmusic" autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-300px] left-[-200px] w-[900px] h-[900px] bg-[#ffb56b]/20 blur-[220px] rounded-full"></div>

      <div className="absolute bottom-[-300px] right-[-200px] w-[900px] h-[900px] bg-[#ff7db6]/20 blur-[240px] rounded-full"></div>

      <div className="absolute top-[30%] left-[30%] w-[700px] h-[700px] bg-[#8ce0c8]/15 blur-[220px] rounded-full"></div>

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}

      </div>

      {/* HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#ffd6ea] animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 25}px`,
              opacity: 0.18,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            ♥
          </div>
        ))}

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-black/10 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-serif text-[#fff6f0]">
            Olivier & Isabelle
          </h1>

          <button
            onClick={toggleMusic}
            className="bg-[#ffe77c] hover:bg-[#ffd95d] text-[#111] px-6 py-3 rounded-full font-semibold transition duration-300 shadow-2xl"
          >
            {musicPlaying ? "Pause Music" : "Play Music"}
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40 pb-24">

        <p className="tracking-[0.5em] uppercase text-sm text-[#ffd6ea] mb-8">
          25 Years Of Love
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#fff4ef] leading-tight">
          Olivier <span className="text-[#ffe77c]">&</span> Isabelle
        </h1>

        <p className="mt-10 max-w-4xl text-xl md:text-3xl italic leading-relaxed text-[#fff1e7]">
          “Love like this deserves to be celebrated.”
        </p>

        {/* PHOTO DISPLAY */}
        <div className="relative mt-20 w-full flex justify-center">

          <div className="relative flex flex-wrap justify-center gap-8">

            <img
              src="/photo1.jpeg"
              alt=""
              className="w-[280px] h-[380px] object-cover rounded-[35px] shadow-2xl rotate-[-5deg]"
            />

            <img
              src="/photo2.jpeg"
              alt=""
              className="w-[320px] h-[430px] object-cover rounded-[35px] shadow-2xl"
            />

            <img
              src="/photo3.jpeg"
              alt=""
              className="w-[280px] h-[380px] object-cover rounded-[35px] shadow-2xl rotate-[5deg]"
            />

            <img
              src="/photo4.jpeg"
              alt=""
              className="w-[280px] h-[380px] object-cover rounded-[35px] shadow-2xl rotate-[-3deg]"
            />

          </div>

        </div>

        {/* LOVE MESSAGE */}
        <div className="max-w-5xl mt-24 bg-white/10 backdrop-blur-2xl rounded-[45px] p-12 border border-white/10 shadow-2xl">

          <p className="text-2xl md:text-3xl italic leading-[2.2] text-[#fff1e7]">

            “Years passed, but the way we look at each other never changed.

            Love like this deserves to be celebrated.

            Every picture tells our story —
            love, warmth and family through every season of life.

            Through every challenge,
            every celebration,
            every laugh and every dream,
            we still chose each other.

            For 25 beautiful years.”

          </p>

        </div>

      </section>

      {/* MENU */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#fff4ef] mb-16">
            Celebration Menu
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#ffb56b]/20 rounded-[40px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif mb-6">Starters</h3>
              <p>• ....................</p>
              <p>• ....................</p>
              <p>• ....................</p>
            </div>

            <div className="bg-[#ff7db6]/20 rounded-[40px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif mb-6">Main Course</h3>
              <p>• ....................</p>
              <p>• ....................</p>
              <p>• ....................</p>
            </div>

            <div className="bg-[#8ce0c8]/20 rounded-[40px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif mb-6">Desserts</h3>
              <p>• ....................</p>
              <p>• ....................</p>
              <p>• ....................</p>
            </div>

            <div className="bg-[#ffe77c]/20 rounded-[40px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif mb-6">Drinks</h3>
              <p>• ....................</p>
              <p>• ....................</p>
              <p>• ....................</p>
            </div>

          </div>

        </div>

      </section>

      {/* FAMILY */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-5xl mx-auto bg-white/10 rounded-[45px] p-14 text-center backdrop-blur-xl">

          <h2 className="text-5xl font-serif text-[#fff4ef] mb-10">
            Family
          </h2>

          <p className="text-2xl italic leading-10 text-[#fff1e7]">
            “They are proud beyond words of the beautiful family they created.”
          </p>

          <div className="mt-12 space-y-4 text-2xl text-[#fffaf4]">

            <p>Auriane Clochard</p>
            <p>Leïla Clochard</p>
            <p>Nathanaël Clochard</p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center">

        <h2 className="text-5xl font-serif text-[#fff4ef] mb-6">
          Olivier & Isabelle
        </h2>

        <p className="text-[#fff1e7] text-lg italic">
          Wedding Anniversary • 23 May 2026
        </p>

      </footer>

    </main>
  );
}