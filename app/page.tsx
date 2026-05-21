"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("fr");
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    fr: {
      title: "Olivier & Isabelle",

      emotional:
        "25 ans d’amour, de famille et de souvenirs précieux. À travers chaque saison de la vie, vous avez choisi l’amour encore et encore. Auriane Clochard, Leïla Clochard et Nathanaël Clochard sont le plus beau reflet de cette histoire.",

      menu: "Menu de la soirée",

      drinks: "Cocktails • Champagne • Vin",
      dinner: "Entrée • Plat • Spécialités",
      dessert: "Gâteau • Desserts • Douceurs",
      party: "Musique • Danse • Souvenirs",

      parking: "Parking disponible",
      parkingText:
        "Des places privées sont disponibles près du lieu de réception.",

      route: "Route vers la cérémonie",

      guest: "Messages des invités",

      placeholder:
        "Écrivez un beau message pour Olivier & Isabelle...",

      upload: "Partagez vos souvenirs",
      uploadText:
        "Ajoutez vos photos et souvenirs précieux de cette magnifique soirée ✨",

      thanks:
        "Merci du fond du cœur pour votre présence, votre amour et vos précieux souvenirs.",

      location: "Salle des Fêtes • Paris • France",
    },

    en: {
      title: "Olivier & Isabelle",

      emotional:
        "25 years of love, family and beautiful memories. Through every season of life, you chose each other again and again. Auriane Clochard, Leïla Clochard and Nathanaël Clochard are the most beautiful reflection of your story.",

      menu: "Celebration Menu",

      drinks: "Cocktails • Champagne • Wine",
      dinner: "Starter • Dinner • Special Dishes",
      dessert: "Cake • Desserts • Sweet Table",
      party: "Music • Dance • Memories",

      parking: "Parking Available",
      parkingText:
        "Private parking spaces are available near the venue.",

      route: "Ceremony Route",

      guest: "Guest Messages",

      placeholder:
        "Write a beautiful message for Olivier & Isabelle...",

      upload: "Share Your Memories",
      uploadText:
        "Upload your beautiful memories and pictures from this special celebration ✨",

      thanks:
        "Thank you from the bottom of our hearts for your love, presence and precious memories.",

      location: "Celebration Hall • Paris • France",
    },
  };

  const t = content[language as "fr" | "en"];

  return (
    <main className="bg-[#241b23] text-[#fff5ef] min-h-screen overflow-hidden relative">

      {/* floating hearts */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 30}px`,
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
            setLanguage(language === "fr" ? "en" : "fr")
          }
          className="bg-[#f5df77] text-black px-6 py-3 rounded-full font-bold"
        >
          {language === "fr" ? "English" : "Français"}
        </button>

      </div>

      {/* slideshow */}
      <section className="py-20 px-6 relative z-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-10 text-pink-100">
              {t.title}
            </h2>

            <p className="text-2xl leading-relaxed italic text-[#ffe8df]">
              {t.emotional}
            </p>

          </div>

          <div className="flex justify-center">

            <img
              src={images[currentImage]}
              alt=""
              className="w-[350px] h-[520px] object-cover rounded-[40px] shadow-2xl transition-all duration-700"
            />

          </div>

        </div>

      </section>

      {/* menu boxes */}
      <section className="py-20 px-6 relative z-10">

        <h2 className="text-center text-5xl md:text-6xl font-serif mb-16 text-pink-100">
          {t.menu}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">
            <h3 className="text-3xl mb-6 font-serif">🥂 Drinks</h3>
            <p className="text-xl">{t.drinks}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">
            <h3 className="text-3xl mb-6 font-serif">🍽 Dinner</h3>
            <p className="text-xl">{t.dinner}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">
            <h3 className="text-3xl mb-6 font-serif">🍰 Desserts</h3>
            <p className="text-xl">{t.dessert}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">
            <h3 className="text-3xl mb-6 font-serif">🎶 Celebration</h3>
            <p className="text-xl">{t.party}</p>
          </div>

        </div>

      </section>

      {/* parking and route */}
      <section className="py-20 px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">

            <h2 className="text-4xl font-serif mb-6 text-pink-100">
              {t.parking}
            </h2>

            <p className="text-xl leading-relaxed">
              {t.parkingText}
            </p>

            <p className="mt-6 text-pink-200 text-lg">
              📍 {t.location}
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[35px] p-10">

            <h2 className="text-4xl font-serif mb-6 text-pink-100">
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

      {/* guest messages */}
      <section className="py-20 px-6 relative z-10">

        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-[40px] p-12">

          <h2 className="text-center text-5xl font-serif mb-10">
            {t.guest}
          </h2>

          <textarea
            placeholder={t.placeholder}
            className="w-full h-52 rounded-[30px] bg-[#ffffff10] border border-white/20 p-8 text-xl text-white"
          />

          <button className="mt-8 bg-[#f5df77] text-black px-10 py-4 rounded-full font-bold text-xl">
            Send
          </button>

        </div>

      </section>

      {/* upload memories */}
      <section className="py-20 px-6 relative z-10">

        <div className="max-w-5xl mx-auto bg-[#2c1f2f] rounded-[40px] p-12 text-center">

          <h2 className="text-5xl font-serif mb-8">
            {t.upload}
          </h2>

          <input
            type="file"
            multiple
            className="bg-white text-black p-4 rounded-xl w-full"
          />

          <p className="mt-8 text-2xl text-[#ffe8df]">
            {t.uploadText}
          </p>

        </div>

      </section>

      {/* thank you */}
      <section className="py-20 px-6 relative z-10">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-serif italic leading-relaxed text-pink-100">
            {t.thanks}
          </h2>

        </div>

      </section>

    </main>
  );
}