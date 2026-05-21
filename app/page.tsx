"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");

  const text = {
    en: {
      title: "25 Years Of Love",
      quote:
        "Years passed, but the way we look at each other never changed.",
      family:
        "Our greatest blessing in life is the love and beautiful family we built together with Auriane, Leïla and Nathanaël.",
      parking: "Parking Available",
      parkingText:
        "Free parking is available for all guests near the celebration venue.",

      route: "Track Route",
      routeText:
        "Follow the route directly to our anniversary celebration venue.",

      guest: "Guest Messages",

      guestPlaceholder:
        "Write a sweet message filled with love...",

      upload: "Share Your Favorite Memory With Us",

      thanks:
        "Thank you for celebrating this beautiful journey of love with us.",

      menu: "Menu",

      starter: "Starter",
      main: "Main Course",
      dessert: "Dessert",
      drinks: "Drinks",
    },

    fr: {
      title: "25 Ans D’amour",

      quote:
        "Les années passent, mais la façon dont nous nous regardons n’a jamais changé.",

      family:
        "Notre plus belle bénédiction est l’amour et la magnifique famille que nous avons construite ensemble avec Auriane, Leïla et Nathanaël.",

      parking: "Parking Disponible",

      parkingText:
        "Un parking gratuit est disponible pour tous les invités près du lieu de réception.",

      route: "Itinéraire",

      routeText:
        "Suivez l’itinéraire directement vers notre lieu de célébration.",

      guest: "Messages Des Invités",

      guestPlaceholder:
        "Écrivez un doux message rempli d’amour...",

      upload: "Partagez Votre Plus Beau Souvenir Avec Nous",

      thanks:
        "Merci de célébrer avec nous cette magnifique histoire d’amour.",

      menu: "Menu",

      starter: "Entrée",
      main: "Plat Principal",
      dessert: "Dessert",
      drinks: "Boissons",
    },
  };

  const t = text[lang as "en" | "fr"];

  return (
    <main className="min-h-screen overflow-hidden bg-[#241717] text-[#fff4ef] relative">

      {/* GLITTERS + HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-10 left-10 text-pink-300 text-2xl animate-pulse">♥</div>

        <div className="absolute top-40 right-20 text-pink-200 text-xl animate-bounce">♥</div>

        <div className="absolute top-96 left-32 text-pink-300 text-xl animate-pulse">♥</div>

        <div className="absolute bottom-40 right-40 text-pink-200 text-3xl animate-bounce">♥</div>

        <div className="absolute bottom-20 left-20 text-pink-300 text-xl animate-pulse">♥</div>

        <div className="absolute top-[30%] right-[15%] text-yellow-100 text-xl animate-ping">✦</div>

        <div className="absolute top-[70%] left-[20%] text-yellow-100 text-xl animate-pulse">✦</div>

      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-10">

        <h1 className="text-5xl font-serif">
          Olivier & Isabelle
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setLang("en")}
            className="bg-[#f4df72] text-black px-6 py-3 rounded-full font-bold"
          >
            EN
          </button>

          <button
            onClick={() => setLang("fr")}
            className="bg-[#f4df72] text-black px-6 py-3 rounded-full font-bold"
          >
            FR
          </button>
        </div>
      </div>

      {/* TITLE */}
      <section className="text-center py-24 px-6 relative z-10">

        <h2 className="text-8xl font-serif text-pink-100 mb-10">
          {t.title}
        </h2>

        <p className="text-3xl italic max-w-5xl mx-auto leading-loose">
          “{t.quote}”
        </p>
      </section>

      {/* PHOTOS */}
      <section className="flex flex-wrap justify-center gap-10 px-6 relative z-10">

        <img
          src="/photo1.jpeg"
          className="w-[320px] h-[430px] object-cover rounded-[35px] shadow-2xl"
        />

        <img
          src="/photo2.jpeg"
          className="w-[320px] h-[430px] object-cover rounded-[35px] shadow-2xl"
        />

        <img
          src="/photo3.jpeg"
          className="w-[320px] h-[430px] object-cover rounded-[35px] shadow-2xl"
        />

      </section>

      {/* FAMILY QUOTE */}
      <section className="max-w-6xl mx-auto mt-24 px-6 relative z-10">

        <div className="bg-white/10 rounded-[40px] p-14 backdrop-blur-sm shadow-2xl">

          <p className="text-4xl italic text-center leading-loose">
            {t.family}
          </p>

        </div>
      </section>

      {/* MENU */}
      <section className="max-w-7xl mx-auto mt-24 px-6 relative z-10">

        <h2 className="text-6xl text-center font-serif text-pink-100 mb-14">
          {t.menu}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white/10 rounded-[30px] p-10 text-center text-3xl">
            • {t.starter}
          </div>

          <div className="bg-white/10 rounded-[30px] p-10 text-center text-3xl">
            • {t.main}
          </div>

          <div className="bg-white/10 rounded-[30px] p-10 text-center text-3xl">
            • {t.dessert}
          </div>

          <div className="bg-white/10 rounded-[30px] p-10 text-center text-3xl">
            • {t.drinks}
          </div>

        </div>
      </section>

      {/* PARKING + ROUTE */}
      <section className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-24 px-6 relative z-10">

        <div className="bg-white/10 rounded-[35px] p-12 backdrop-blur-sm">

          <h2 className="text-5xl text-pink-200 font-serif mb-8">
            {t.parking}
          </h2>

          <p className="text-2xl leading-loose">
            {t.parkingText}
          </p>

          <p className="mt-8 text-xl">
            📍 Salle Des Fêtes De Cormeilles-en-Parisis
          </p>

        </div>

        <div className="bg-white/10 rounded-[35px] p-12 backdrop-blur-sm">

          <h2 className="text-5xl text-pink-200 font-serif mb-8">
            {t.route}
          </h2>

          <p className="text-2xl leading-loose mb-10">
            {t.routeText}
          </p>

          <a
            href="https://maps.app.goo.gl/pWKbdsW7vnGzegLG8"
            target="_blank"
            className="inline-block bg-[#9ae8d5] text-black px-10 py-5 rounded-full text-2xl font-bold hover:scale-105 transition"
          >
            Open Google Maps
          </a>

        </div>

      </section>

      {/* GUEST MESSAGE */}
      <section className="max-w-6xl mx-auto mt-24 px-6 relative z-10">

        <div className="bg-white/10 rounded-[40px] p-16 backdrop-blur-sm">

          <h2 className="text-6xl text-center font-serif mb-12">
            {t.guest}
          </h2>

          <textarea
            placeholder={t.guestPlaceholder}
            className="w-full h-72 rounded-[30px] bg-white/10 p-10 text-2xl outline-none"
          />

          <button className="mt-10 bg-pink-200 text-black px-10 py-5 rounded-full text-2xl font-bold">
            Post Message
          </button>

        </div>
      </section>

      {/* PHOTO UPLOAD */}
      <section className="max-w-6xl mx-auto mt-24 px-6 relative z-10">

        <div className="bg-white/10 rounded-[40px] p-16 text-center backdrop-blur-sm">

          <h2 className="text-5xl font-serif mb-10">
            {t.upload}
          </h2>

          <input
            type="file"
            multiple
            className="text-2xl"
          />

        </div>
      </section>

      {/* THANK YOU */}
      <section className="text-center py-24 px-6 relative z-10">

        <p className="text-4xl italic max-w-5xl mx-auto leading-loose">
          {t.thanks}
        </p>

      </section>

    </main>
  );
}