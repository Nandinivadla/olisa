"use client";

import { useEffect, useState } from "react";

export default function AnniversaryPage() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.title = "Olivier & Isabelle";
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById(
      "bgmusic"
    ) as HTMLAudioElement;

    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
    } else {
      audio.currentTime = 17;
      audio.volume = 0.7;
      audio.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  return (
    <main className="min-h-screen bg-[#070907] text-white overflow-hidden relative">

      {/* MUSIC */}
      <audio id="bgmusic" loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {/* PASTEL BACKGROUND */}
      <div className="absolute top-[-300px] left-[-200px] w-[900px] h-[900px] bg-[#5f7f4f]/30 blur-[220px] rounded-full"></div>

      <div className="absolute bottom-[-300px] right-[-200px] w-[900px] h-[900px] bg-[#3d0b1e]/40 blur-[250px] rounded-full"></div>

      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-[#d9b38c]/10 blur-[180px] rounded-full"></div>

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(120)].map((_, i) => (
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

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#8ea77b] animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 25}px`,
              opacity: 0.25,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            ♥
          </div>
        ))}

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-black/20 border-b border-[#8ea77b]/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-serif text-[#f5ece8]">
            Olivier & Isabelle
          </h1>

          <button
            onClick={toggleMusic}
            className="bg-[#8ea77b] hover:bg-[#789164] text-[#0b0d0b] px-6 py-3 rounded-full font-semibold transition duration-300 shadow-2xl"
          >
            {musicPlaying ? "Pause Music" : "Play Music"}
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">

        <p className="tracking-[0.5em] uppercase text-sm text-[#8ea77b] mb-8">
          Wedding Anniversary Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#f7efeb] leading-tight">
          Olivier <span className="text-[#8ea77b]">&</span> Isabelle
        </h1>

        <p className="mt-10 max-w-4xl text-xl md:text-3xl italic leading-relaxed text-[#e7ddd7]">
          “A timeless love story painted with memories,
          family, laughter and forever.”
        </p>

        {/* IMAGE */}
        <div className="relative mt-16">

          <div className="absolute inset-0 bg-[#d9b38c]/20 blur-3xl rounded-[50px]"></div>

          <img
            src="/togetherus.jpeg"
            alt="Olivier and Isabelle"
            className="relative w-[340px] md:w-[600px] rounded-[45px] border border-[#d9b38c]/20 shadow-[0_0_120px_rgba(255,255,255,0.06)] object-cover sepia-[35%]"
          />

        </div>

      </section>

      {/* MENU */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f7efeb] mb-16">
            Evening Celebration
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#2a0815]/70 border border-[#8ea77b]/20 rounded-[35px] p-10 backdrop-blur-xl">

              <h3 className="text-3xl font-serif text-[#d9b38c] mb-4">
                Welcome Drinks
              </h3>

              <p className="text-[#ece4df] leading-8">
                Champagne • Wine • Cocktails
              </p>

            </div>

            <div className="bg-[#2a0815]/70 border border-[#8ea77b]/20 rounded-[35px] p-10 backdrop-blur-xl">

              <h3 className="text-3xl font-serif text-[#d9b38c] mb-4">
                Dinner
              </h3>

              <p className="text-[#ece4df] leading-8">
                Elegant French Cuisine & Celebration Menu
              </p>

            </div>

            <div className="bg-[#2a0815]/70 border border-[#8ea77b]/20 rounded-[35px] p-10 backdrop-blur-xl">

              <h3 className="text-3xl font-serif text-[#d9b38c] mb-4">
                Desserts
              </h3>

              <p className="text-[#ece4df] leading-8">
                Anniversary Cake • Pastries • Sweet Table
              </p>

            </div>

            <div className="bg-[#2a0815]/70 border border-[#8ea77b]/20 rounded-[35px] p-10 backdrop-blur-xl">

              <h3 className="text-3xl font-serif text-[#d9b38c] mb-4">
                Celebration
              </h3>

              <p className="text-[#ece4df] leading-8">
                Music • Dancing • Precious Memories
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ROUTE & PARKING */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-[#2a0815]/70 rounded-[40px] p-10 border border-[#8ea77b]/20 backdrop-blur-xl">

            <h3 className="text-4xl font-serif text-[#d9b38c] mb-6">
              Parking Available
            </h3>

            <p className="text-[#ece4df] text-lg leading-8">
              Private parking spaces are available for all guests near the venue.
            </p>

          </div>

          <div className="bg-[#2a0815]/70 rounded-[40px] p-10 border border-[#8ea77b]/20 backdrop-blur-xl">

            <h3 className="text-4xl font-serif text-[#d9b38c] mb-6">
              Ceremony Route
            </h3>

            <p className="text-[#ece4df] text-lg leading-8 mb-8">
              Use the route button below to navigate directly to the celebration venue.
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="inline-block bg-[#8ea77b] hover:bg-[#789164] text-[#0a0b0a] px-8 py-4 rounded-full font-semibold transition"
            >
              Track Route
            </a>

          </div>

        </div>

      </section>

      {/* FAMILY */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-5xl mx-auto bg-[#2a0815]/70 border border-[#8ea77b]/20 rounded-[45px] p-14 backdrop-blur-xl text-center">

          <h2 className="text-5xl font-serif text-[#f7efeb] mb-10">
            Family
          </h2>

          <p className="text-xl md:text-2xl italic leading-10 text-[#ece4df]">
            “They are proud beyond words of the beautiful family they created
            and the love they continue to share every single day.”
          </p>

          <div className="mt-12 space-y-4 text-2xl text-[#f7efeb]">

            <p>Auriane Clochard</p>
            <p>Leïla Clochard</p>
            <p>Nathanaël Clochard</p>

          </div>

        </div>

      </section>

      {/* RSVP */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-3xl mx-auto bg-[#2a0815]/70 rounded-[40px] p-12 border border-[#8ea77b]/20 backdrop-blur-xl">

          <h2 className="text-center text-5xl font-serif text-[#f7efeb] mb-12">
            RSVP
          </h2>

          <form
            action="https://formspree.io/f/xbdbglqp"
            method="POST"
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-5 rounded-2xl bg-[#101310]/70 border border-[#8ea77b]/10 text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-5 rounded-2xl bg-[#101310]/70 border border-[#8ea77b]/10 text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Leave a lovely message..."
              required
              className="w-full p-5 rounded-2xl bg-[#101310]/70 border border-[#8ea77b]/10 text-white outline-none h-40"
            />

            <button className="w-full bg-[#8ea77b] hover:bg-[#789164] text-[#0a0b0a] py-5 rounded-2xl text-lg font-semibold transition">
              Send Love
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center bg-black/20">

        <h2 className="text-5xl font-serif text-[#f7efeb] mb-6">
          Olivier & Isabelle
        </h2>

        <p className="text-[#ece4df] text-lg italic">
          Wedding Anniversary • 23 May 2026
        </p>

      </footer>

    </main>
  );
}