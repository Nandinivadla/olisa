"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/photo1.jpeg",
    "/photo2.jpeg",
    "/photo3.jpeg",
    "/photo4.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const text = {
    en: {
      title: "Olivier & Isabelle",
      subtitle: "25 Years Of Love",
      quote:
        "Years passed, but the way we look at each other never changed.",
      parking: "Parking Available",
      parkingText:
        "Private parking spaces are available for all guests.",
      route: "Ceremony Route",
      routeBtn: "Track Route",
      memories: "Share Your Memories",
      upload:
        "Upload your beautiful pictures and memories from this celebration.",
      family: "Proud Parents Of",
      rsvp: "RSVP",
      guestbook: "Guest Messages",
      frenchBtn: "FR",
      englishBtn: "EN",
    },

    fr: {
      title: "Olivier & Isabelle",
      subtitle: "25 Ans D’Amour",
      quote:
        "Les années ont passé, mais la façon dont nous nous regardons n’a jamais changé.",
      parking: "Parking Disponible",
      parkingText:
        "Des places de parking privées sont disponibles pour tous les invités.",
      route: "Route De La Cérémonie",
      routeBtn: "Voir La Route",
      memories: "Partagez Vos Souvenirs",
      upload:
        "Téléchargez vos magnifiques photos et souvenirs.",
      family: "Fiers Parents De",
      rsvp: "RSVP",
      guestbook: "Messages Des Invités",
      frenchBtn: "FR",
      englishBtn: "EN",
    },
  };

  const t = text[language as keyof typeof text];

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#1b1515] via-[#3d2a27] to-[#0d0d17] text-[#fff4ee] relative">

      {/* FLOATING HEARTS */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 30}px`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* HEADER */}

      <header className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">

        <h1 className="text-3xl md:text-5xl font-serif">
          {t.title}
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => setLanguage("en")}
            className="bg-[#f8e27b] text-black px-5 py-2 rounded-full font-bold"
          >
            {t.englishBtn}
          </button>

          <button
            onClick={() => setLanguage("fr")}
            className="bg-[#f8e27b] text-black px-5 py-2 rounded-full font-bold"
          >
            {t.frenchBtn}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="text-center py-20 px-6">

        <h2 className="text-5xl md:text-7xl font-serif mb-8 text-[#ffe4d8]">
          {t.subtitle}
        </h2>

        <p className="text-2xl italic max-w-4xl mx-auto text-[#ffeede]">
          “{t.quote}”
        </p>
      </section>

      {/* AUTO IMAGE CAROUSEL */}

      <section className="flex justify-center items-center mb-24 px-4">

        <div className="w-full max-w-[900px] overflow-hidden rounded-[40px] shadow-2xl border border-white/20">

          <img
            src={images[currentImage]}
            alt=""
            className="w-full h-[350px] md:h-[650px] object-cover duration-700 transition-all"
          />

        </div>
      </section>

      {/* FAMILY */}

      <section className="px-6 md:px-12 mb-24">

        <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-6xl font-serif mb-10 text-[#ffd9ef]">
            {t.family}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-2xl md:text-3xl">

            <div className="bg-white/10 rounded-[30px] p-8">
              Auriane Clochard
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              Leïla Clochard
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              Nathanaël Clochard
            </div>

          </div>
        </div>
      </section>

      {/* PARKING + ROUTE */}

      <section className="grid md:grid-cols-2 gap-8 px-6 md:px-12 mb-24">

        <div className="bg-white/10 rounded-[40px] p-10 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#ffd9ef]">
            {t.parking}
          </h2>

          <p className="text-xl leading-relaxed">
            {t.parkingText}
          </p>
        </div>

        <div className="bg-white/10 rounded-[40px] p-10 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#ffd9ef]">
            {t.route}
          </h2>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-block mt-8 bg-[#9cf0d4] text-black px-8 py-4 rounded-full text-xl font-bold"
          >
            {t.routeBtn}
          </a>
        </div>
      </section>

      {/* RSVP */}

      <section className="px-6 md:px-12 mb-24">

        <div className="bg-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-xl">

          <h2 className="text-5xl font-serif mb-10 text-center">
            {t.rsvp}
          </h2>

          <div className="grid gap-6">

            <input
              type="text"
              placeholder="Name"
              className="bg-white/10 border border-white/20 rounded-2xl p-5 text-xl outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 border border-white/20 rounded-2xl p-5 text-xl outline-none"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="bg-white/10 border border-white/20 rounded-2xl p-5 text-xl outline-none"
            />

            <button className="bg-[#f8e27b] text-black py-5 rounded-full text-2xl font-bold">
              Send RSVP
            </button>

          </div>
        </div>
      </section>

      {/* GUESTBOOK */}

      <section className="px-6 md:px-12 mb-24">

        <div className="bg-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-xl">

          <h2 className="text-5xl font-serif mb-10 text-center">
            {t.guestbook}
          </h2>

          <textarea
            rows={6}
            placeholder="Write your beautiful message here..."
            className="w-full bg-white/10 border border-white/20 rounded-3xl p-6 text-xl outline-none"
          />

          <button className="mt-8 bg-[#ffd9ef] text-black px-10 py-4 rounded-full text-xl font-bold">
            Post Message
          </button>

        </div>
      </section>

      {/* UPLOAD MEMORIES */}

      <section className="px-6 md:px-12 pb-32">

        <div className="bg-[#3f1f1f]/60 rounded-[45px] p-12 md:p-16 text-center">

          <h2 className="text-5xl font-serif mb-8">
            {t.memories}
          </h2>

          <p className="text-2xl mb-10">
            {t.upload}
          </p>

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

        </div>
      </section>

    </main>
  );
}