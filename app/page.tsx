"use client";

import { useEffect, useState } from "react";

export default function AnniversaryPage() {
  const eventDate = new Date("2026-08-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.title = "Isabelle & Olivier";

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
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
    <main className="min-h-screen bg-[#050807] text-white overflow-hidden relative">

      {/* MUSIC */}
      <audio id="bgmusic" loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-200px] left-[-150px] w-[800px] h-[800px] bg-[#35543a]/25 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[800px] h-[800px] bg-[#220814]/40 blur-[200px] rounded-full"></div>

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

      {/* HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#5f7f4f] animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 28}px`,
              opacity: 0.25,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            ♥
          </div>
        ))}

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-black/20 border-b border-[#5f7f4f]/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-serif text-[#f7ecef]">
            Isabelle & Olivier
          </h1>

          <button
            onClick={toggleMusic}
            className="bg-[#5f7f4f] hover:bg-[#4c6d3e] text-[#050807] px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            {musicPlaying ? "Pause Music" : "Play Music"}
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-28">

        <p className="tracking-[0.5em] uppercase text-sm text-[#5f7f4f] mb-6">
          Wedding Anniversary Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#f7ecef] leading-tight">
          Isabelle <span className="text-[#5f7f4f]">&</span> Olivier
        </h1>

        {/* IMAGE */}
        <div className="relative mt-16">

          <div className="absolute inset-0 bg-[#5f7f4f]/25 blur-3xl rounded-[50px]"></div>

          <img
            src="/togetherus.jpeg"
            alt="Isabelle and Olivier"
            className="relative w-[340px] md:w-[540px] rounded-[40px] border border-[#d8c8b8]/20 shadow-[0_0_100px_rgba(255,255,255,0.08)] object-cover sepia-[28%]"
          />

        </div>

        <div className="w-40 h-[3px] bg-[#5f7f4f] my-10 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl italic text-[#f7ecef] leading-relaxed">
          “A lifetime of love,
          laughter and beautiful memories together.”
        </p>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-20">

        <h2 className="text-center text-5xl font-serif text-[#f7ecef] mb-16">
          Countdown To Celebration
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#220814]/75 backdrop-blur-xl rounded-3xl p-8 text-center border border-[#5f7f4f]/15"
            >

              <h3 className="text-5xl font-bold text-[#f7ecef]">
                {item.value}
              </h3>

              <p className="mt-3 text-lg text-[#d9d7cf]">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* MENU */}
      <section className="relative z-10 py-28 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f7ecef] mb-14">
            Evening Celebration
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#220814]/75 border border-[#35543a] rounded-[35px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif text-[#5f7f4f] mb-4">
                Welcome Drinks
              </h3>
              <p className="text-[#d9d7cf]">
                Champagne • Cocktails • Soft Drinks
              </p>
            </div>

            <div className="bg-[#220814]/75 border border-[#35543a] rounded-[35px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif text-[#5f7f4f] mb-4">
                Dinner
              </h3>
              <p className="text-[#d9d7cf]">
                Elegant French & International Cuisine
              </p>
            </div>

            <div className="bg-[#220814]/75 border border-[#35543a] rounded-[35px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif text-[#5f7f4f] mb-4">
                Dessert
              </h3>
              <p className="text-[#d9d7cf]">
                Anniversary Cake • Pastries • Sweet Table
              </p>
            </div>

            <div className="bg-[#220814]/75 border border-[#35543a] rounded-[35px] p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-serif text-[#5f7f4f] mb-4">
                Celebration
              </h3>
              <p className="text-[#d9d7cf]">
                Music • Dancing • Memories Together
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INFORMATION BOXES */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-[#220814]/75 rounded-[35px] p-10 border border-[#35543a]">
            <h3 className="text-3xl font-serif text-[#5f7f4f] mb-6">
              Parking Available
            </h3>

            <p className="text-[#d9d7cf] text-lg leading-8">
              Private parking spaces will be available for all guests near the venue.
            </p>
          </div>

          <div className="bg-[#220814]/75 rounded-[35px] p-10 border border-[#35543a]">
            <h3 className="text-3xl font-serif text-[#5f7f4f] mb-6">
              Ceremony Location
            </h3>

            <p className="text-[#d9d7cf] text-lg leading-8 mb-6">
              Track the route directly to the wedding anniversary celebration venue.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=47.039755,-1.220984"
              target="_blank"
              className="inline-block bg-[#5f7f4f] hover:bg-[#4c6d3e] text-[#050807] px-8 py-4 rounded-full font-semibold transition"
            >
              Track Route
            </a>
          </div>

        </div>

      </section>

      {/* FAMILY MESSAGE */}
      <section className="relative z-10 py-28 px-6">

        <div className="max-w-5xl mx-auto text-center bg-[#220814]/75 border border-[#35543a] rounded-[45px] p-14 backdrop-blur-xl">

          <h2 className="text-5xl font-serif text-[#f7ecef] mb-10">
            Family
          </h2>

          <p className="text-xl md:text-2xl leading-10 text-[#d9d7cf] italic">
            “With immense pride and love,
            Isabelle and Olivier celebrate not only
            their journey together,
            but also the beautiful family they built.”
          </p>

          <div className="mt-12 space-y-4 text-2xl text-[#f7ecef]">

            <p>Auriane Clochard</p>
            <p>Leïla Clochard</p>
            <p>Nathanaël Clochard</p>

          </div>

        </div>

      </section>

      {/* RSVP */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-3xl mx-auto bg-[#220814]/75 rounded-[35px] p-12 border border-[#35543a]">

          <h2 className="text-center text-5xl font-serif text-[#f7ecef] mb-12">
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
              className="w-full p-5 rounded-2xl bg-[#050807]/60 border border-[#5f7f4f]/15 text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-5 rounded-2xl bg-[#050807]/60 border border-[#5f7f4f]/15 text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Leave a loving message..."
              required
              className="w-full p-5 rounded-2xl bg-[#050807]/60 border border-[#5f7f4f]/15 text-white outline-none h-40"
            />

            <button className="w-full bg-[#5f7f4f] hover:bg-[#4c6d3e] text-[#050807] py-5 rounded-2xl text-lg font-semibold transition">
              Send Love
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center bg-black/20 text-white">

        <h2 className="text-5xl font-serif mb-6 text-[#f7ecef]">
          Isabelle & Olivier
        </h2>

        <p className="text-lg opacity-90 text-[#d9d7cf]">
          Celebrating a lifetime of love together.
        </p>

        <p className="mt-8 text-sm opacity-70">
          Anniversary Celebration • 2026
        </p>

      </footer>

    </main>
  );
}