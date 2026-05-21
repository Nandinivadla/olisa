"use client";

import { useEffect, useState } from "react";

export default function OlisaPage() {
  const weddingDate = new Date("2026-08-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.title = "Olisa";

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

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

      {/* FILM GRAIN */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* MUSIC */}
      <audio id="bgmusic" loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {/* AURORA GLOWS */}
      <div className="absolute top-[-200px] left-[-150px] w-[800px] h-[800px] bg-[#29442d]/30 blur-[180px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[800px] h-[800px] bg-[#220814]/40 blur-[200px] rounded-full animate-pulse"></div>

      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-[#5f7f4f]/20 blur-[170px] rounded-full"></div>

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#5f7f4f] animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 30}px`,
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
            Olisa
          </h1>

          <button
            onClick={toggleMusic}
            className="bg-[#5f7f4f] hover:bg-[#4c6d3e] text-[#050807] px-6 py-3 rounded-full font-semibold transition duration-300 shadow-[0_0_40px_rgba(95,127,79,0.35)]"
          >
            {musicPlaying ? "Pause Music" : "Play Music"}
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-28">

        <p className="tracking-[0.5em] uppercase text-sm text-[#5f7f4f] mb-6">
          Cinematic Love Story
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#f7ecef] leading-tight drop-shadow-2xl">
          Olisa
        </h1>

        {/* IMAGE */}
        <div className="relative mt-16 group">

          <div className="absolute inset-0 bg-[#5f7f4f]/25 blur-3xl rounded-[50px]"></div>

          <img
            src="/togetherus.jpeg"
            alt="Olisa"
            className="relative w-[330px] md:w-[540px] rounded-[40px] border border-[#d8c8b8]/20 shadow-[0_0_100px_rgba(255,255,255,0.08)] object-cover transition duration-700 group-hover:scale-105 sepia-[28%] contrast-110 brightness-90 saturate-75"
          />

        </div>

        <div className="w-40 h-[3px] bg-[#5f7f4f] my-10 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl italic text-[#f7ecef] leading-relaxed">
          “Every love story is beautiful,
          but ours is my favorite.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#d9d7cf]">
          In every lifetime,
          in every universe,
          somehow our souls would still find each other.
          <br /><br />
          Through every smile,
          every challenge,
          every dream and every beautiful moment,
          we created a love story written by destiny itself.
          <br /><br />
          This is not just a celebration —
          it is the beginning of forever.
        </p>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-24">

        <h2 className="text-center text-5xl font-serif text-[#f7ecef] mb-16">
          Countdown To Forever
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
              className="bg-[#220814]/75 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(95,127,79,0.08)] p-8 text-center border border-[#5f7f4f]/15 hover:scale-105 transition duration-500"
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

      {/* LOVE LETTER */}
      <section className="relative z-10 py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f7ecef] mb-12">
            Love Letter
          </h2>

          <div className="bg-[#220814]/75 border border-[#35543a] rounded-[45px] p-14 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.5)]">

            <p className="text-xl md:text-2xl leading-10 text-[#d9d7cf] italic">
              “You became my safest place,
              my favorite feeling,
              my peace,
              my home.
              <br /><br />
              And if I had to choose again,
              in every lifetime,
              I would still choose you.”
            </p>

          </div>

        </div>

      </section>

      {/* MEMORIES */}
      <section className="relative z-10 py-28 px-6 bg-[#07130d] overflow-hidden">

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <h2 className="text-6xl font-serif text-[#f7ecef] mb-10">
            Wedding Memories
          </h2>

          <p className="text-xl md:text-2xl text-[#d9d7cf] leading-10 max-w-4xl mx-auto">
            Every smile, every dance, every beautiful moment —
            help us keep them forever by sharing your favorite memories
            from our special day.
          </p>

          <div className="mt-16 bg-[#220814]/80 border border-[#35543a] rounded-[45px] p-14 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.5)]">

            <script
              async
              src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"
              charSet="utf-8"
            ></script>

            <input
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="e2c5a8a8480409d5b4a1"
              data-images-only="true"
              data-multiple="true"
            />

            <p className="mt-6 text-[#d9d7cf] text-lg">
              Upload your precious memories here ✨
            </p>

          </div>

        </div>

      </section>

      {/* RSVP */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-3xl mx-auto bg-[#220814]/75 backdrop-blur-xl rounded-[35px] p-12 shadow-[0_0_60px_rgba(95,127,79,0.08)] border border-[#5f7f4f]/15">

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

      {/* FINAL SECTION */}
      <section className="relative z-10 py-32 text-center">

        <h2 className="text-6xl md:text-7xl font-serif text-[#f7ecef] leading-tight">
          And So Our Forever Begins...
        </h2>

        <p className="mt-10 text-xl text-[#d9d7cf] max-w-3xl mx-auto leading-10">
          Some souls are simply destined to meet.
          <br /><br />
          Through every lifetime,
          every dream,
          every universe —
          love always finds its way back home.
        </p>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center bg-black/20 text-white">

        <h2 className="text-5xl font-serif mb-6 text-[#f7ecef]">
          Forever Begins Here
        </h2>

        <p className="text-lg opacity-90 text-[#d9d7cf]">
          Thank you for being part of our story.
        </p>

        <p className="mt-8 text-sm opacity-70">
          Olisa • 2026
        </p>

      </footer>

    </main>
  );
}