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
      quote:
        "25 years later, your love still feels like home. Through every season of life, you chose each other again and again.",
      children:
        "The greatest love story is seeing the beautiful family you built together — Auriane Clochard, Leïla Clochard and Nathanaël Clochard.",
      menu: "Celebration Menu",
      parking: "Parking Available",
      route: "Ceremony Route",
      memories: "Wedding Memories",
      upload: "Upload your beautiful memories here ✨",
      messages: "Guest Messages",
      messagePlaceholder: "Leave a beautiful message...",
      send: "Send Message",
    },

    fr: {
      title: "Olivier & Isabelle",
      quote:
        "25 ans plus tard, votre amour ressemble toujours à un foyer. À travers chaque saison de la vie, vous vous êtes choisis encore et encore.",
      children:
        "La plus belle histoire d’amour est la magnifique famille que vous avez construite ensemble — Auriane Clochard, Leïla Clochard et Nathanaël Clochard.",
      menu: "Menu de la célébration",
      parking: "Parking Disponible",
      route: "Route de la cérémonie",
      memories: "Souvenirs du Mariage",
      upload: "Ajoutez ici vos magnifiques souvenirs ✨",
      messages: "Messages des invités",
      messagePlaceholder: "Laissez un beau message...",
      send: "Envoyer",
    },
  };

  const t = text[language as "en" | "fr"];

  return (
    <main className="min-h-screen bg-[#16121f] text-[#fff5ef] overflow-hidden relative">

      {/* floating hearts */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 30}px`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* top bar */}
      <div className="flex justify-between items-center px-6 py-6 border-b border-white/10 relative z-10">
        <h1 className="text-3xl md:text-5xl font-serif">
          {t.title}
        </h1>

        <button
          onClick={() =>
            setLanguage(language === "en" ? "fr" : "en")
          }
          className="bg-[#f5df77] text-black px-5 py-3 rounded-full font-bold"
        >
          {language === "en" ? "FR" : "EN"}
        </button>
      </div>

      {/* slideshow */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                {t.quote}
              </h2>

              <p className="text-2xl italic text-pink-200 leading-relaxed">
                {t.children}
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={images[currentImage]}
                className="w-[320px] h-[480px] object-cover rounded-[40px] shadow-2xl transition-all duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* menu section */}
      <section className="py-20 px-6 relative z-10">

        <h2 className="text-center text-5xl font-serif mb-16 text-pink-200">
          {t.menu}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-8">
            <h3 className="text-3xl font-serif mb-6">🥂 Drinks</h3>
            <p>• Champagne</p>
            <p>• Wine</p>
            <p>• Cocktails</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-8">
            <h3 className="text-3xl font-serif mb-6">🍽 Dinner</h3>
            <p>• Starter</p>
            <p>• Main Course</p>
            <p>• Special Dish</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-8">
            <h3 className="text-3xl font-serif mb-6">🍰 Desserts</h3>
            <p>• Cake</p>
            <p>• Pastries</p>
            <p>• Fruits</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-8">
            <h3 className="text-3xl font-serif mb-6">🎵 Celebration</h3>
            <p>• Music</p>
            <p>• Dance</p>
            <p>• Memories</p>
          </div>

        </div>
      </section>

      {/* parking + route */}
      <section className="py-20 px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">
            <h2 className="text-4xl font-serif text-pink-200 mb-6">
              {t.parking}
            </h2>

            <p className="text-xl leading-relaxed">
              Private parking spaces are available near the venue for all guests.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">
            <h2 className="text-4xl font-serif text-pink-200 mb-6">
              {t.route}
            </h2>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="inline-block mt-6 bg-[#93e2cf] text-black px-8 py-4 rounded-full font-bold text-xl"
            >
              Track Route
            </a>
          </div>

        </div>
      </section>

      {/* upload section */}
      <section className="py-20 px-6 relative z-10">

        <div className="max-w-5xl mx-auto bg-[#2c1f2f] rounded-[40px] p-12 text-center">

          <h2 className="text-5xl font-serif mb-10">
            {t.memories}
          </h2>

          <input
            type="file"
            multiple
            className="bg-white text-black p-4 rounded-xl w-full"
          />

          <p className="mt-6 text-xl">
            {t.upload}
          </p>

        </div>

      </section>

      {/* guest messages */}
      <section className="py-20 px-6 relative z-10">

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-[40px] p-10">

          <h2 className="text-5xl font-serif mb-10 text-center">
            {t.messages}
          </h2>

          <textarea
            placeholder={t.messagePlaceholder}
            className="w-full h-40 rounded-2xl bg-[#ffffff10] border border-white/20 p-6 text-white text-xl"
          />

          <button className="mt-8 bg-[#f5df77] text-black px-10 py-4 rounded-full font-bold text-xl">
            {t.send}
          </button>

        </div>

      </section>

    </main>
  );
}