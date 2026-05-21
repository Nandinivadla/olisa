"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("fr");

  const text = {
    fr: {
      title: "25 Ans D’amour",
      quote:
        "Les années ont passé, mais notre regard l’un pour l’autre n’a jamais changé.",
      welcome:
        "Du fond du cœur, MERCI. Merci de nous entourer aujourd’hui, de nous gâter par votre présence, votre amour et votre précieuse amitié.",
      children:
        "Le plus beau cadeau de notre histoire reste notre merveilleuse famille : Auriane, Leïla et Nathanaël.",
      parking: "Parking Disponible",
      parkingText:
        "Un parking gratuit est disponible pour tous les invités près du lieu de réception.",
      route: "Itinéraire",
      routeText:
        "Suivez l’itinéraire directement vers notre lieu de célébration.",
      guest: "Messages Des Invités",
      guestPlaceholder:
        "Écrivez un petit mot rempli d’amour...",
      upload: "Partagez Vos Souvenirs",
      uploadText:
        "Ajoutez vos plus belles photos et souvenirs avec nous.",
      thanks:
        "Merci de célébrer avec nous ces 25 merveilleuses années d’amour.",
    },

    en: {
      title: "25 Years Of Love",
      quote:
        "Years passed, but the way we look at each other never changed.",
      welcome:
        "From the bottom of our hearts, THANK YOU. Thank you for surrounding us today with your love, presence and precious friendship.",
      children:
        "The greatest gift of our story is our beautiful family: Auriane, Leïla and Nathanaël.",
      parking: "Parking Available",
      parkingText:
        "Free parking spaces are available for all guests near the venue.",
      route: "Track Route",
      routeText:
        "Follow the route directly to our celebration venue.",
      guest: "Guest Messages",
      guestPlaceholder:
        "Write a sweet message filled with love...",
      upload: "Share Your Memories",
      uploadText:
        "Upload your favorite photos and beautiful memories with us.",
      thanks:
        "Thank you for celebrating 25 beautiful years of love with us.",
    },
  };

  const t = text[lang as "fr" | "en"];

  return (
    <main className="min-h-screen overflow-hidden bg-[#241717] text-[#fff4ef] relative">

      {/* Glitter Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-pink-300 text-2xl animate-pulse">♥</div>
        <div className="absolute top-40 right-20 text-pink-200 text-xl animate-bounce">♥</div>
        <div className="absolute top-96 left-32 text-pink-300 text-xl animate-pulse">♥</div>
        <div className="absolute bottom-40 right-40 text-pink-200 text-3xl animate-bounce">♥</div>
        <div className="absolute bottom-20 left-20 text-pink-300 text-xl animate-pulse">♥</div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-10">
        <h1 className="text-5xl font-serif">
          Olivier & Isabelle
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setLang("en")}
            className="bg-[#f5df7b] text-black px-6 py-3 rounded-full font-bold"
          >
            EN
          </button>

          <button
            onClick={() => setLang("fr")}
            className="bg-[#f5df7b] text-black px-6 py-3 rounded-full font-bold"
          >
            FR
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="text-center py-24 px-6 relative z-10">
        <h2 className="text-7xl md:text-8xl font-serif mb-8 text-pink-100">
          {t.title}
        </h2>

        <p className="text-2xl md:text-3xl italic max-w-5xl mx-auto leading-loose">
          “{t.quote}”
        </p>
      </section>

      {/* French / English Message */}
      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-sm">
          <p className="text-2xl leading-loose text-center">
            {t.welcome}
          </p>
        </div>
      </section>

      {/* 3 Horizontal Photos */}
      <section className="max-w-7xl mx-auto px-6 mt-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">

          <img
            src="/photo1.jpeg"
            className="rounded-[35px] h-[500px] w-full object-cover shadow-2xl"
          />

          <img
            src="/photo2.jpeg"
            className="rounded-[35px] h-[500px] w-full object-cover shadow-2xl"
          />

          <img
            src="/photo3.jpeg"
            className="rounded-[35px] h-[500px] w-full object-cover shadow-2xl"
          />

        </div>
      </section>

      {/* Children Section */}
      <section className="max-w-6xl mx-auto mt-24 px-6 relative z-10">
        <div className="bg-white/10 rounded-[40px] p-16 text-center">

          <h2 className="text-5xl font-serif text-pink-200 mb-10">
            Auriane Clochard • Leïla Clochard • Nathanaël Clochard
          </h2>

          <p className="text-3xl italic leading-loose">
            {t.children}
          </p>

        </div>
      </section>

      {/* Parking + Route */}
      <section className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-24 px-6 relative z-10">

        <div className="bg-white/10 rounded-[35px] p-12">
          <h2 className="text-5xl text-pink-200 font-serif mb-8">
            {t.parking}
          </h2>

          <p className="text-2xl leading-loose">
            {t.parkingText}
          </p>

          <p className="mt-8 text-xl">
            📍 Domaine Des Roses, Paris
          </p>
        </div>

        <div className="bg-white/10 rounded-[35px] p-12">
          <h2 className="text-5xl text-pink-200 font-serif mb-8">
            {t.route}
          </h2>

          <p className="text-2xl leading-loose mb-10">
            {t.routeText}
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="bg-[#9ae8d5] text-black px-10 py-5 rounded-full text-2xl font-bold inline-block"
          >
            Google Maps
          </a>
        </div>

      </section>

      {/* Guest Messages */}
      <section className="max-w-6xl mx-auto mt-24 px-6 relative z-10">
        <div className="bg-white/10 rounded-[40px] p-16">

          <h2 className="text-6xl font-serif text-center mb-12">
            {t.guest}
          </h2>

          <textarea
            placeholder={t.guestPlaceholder}
            className="w-full h-[220px] bg-white/10 rounded-[30px] p-8 text-2xl outline-none"
          />

          <button className="mt-10 bg-pink-200 text-black px-10 py-5 rounded-full text-2xl font-bold">
            Post Message
          </button>

        </div>
      </section>

      {/* Upload Photos */}
      <section className="max-w-6xl mx-auto mt-24 px-6 relative z-10">
        <div className="bg-white/10 rounded-[40px] p-16 text-center">

          <h2 className="text-6xl font-serif mb-10">
            {t.upload}
          </h2>

          <p className="text-2xl mb-10 leading-loose">
            {t.uploadText}
          </p>

          <input
            type="file"
            multiple
            className="text-xl bg-white/10 p-6 rounded-[25px] w-full"
          />

        </div>
      </section>

      {/* Thank You */}
      <section className="text-center py-24 px-6 relative z-10">
        <p className="text-4xl italic max-w-5xl mx-auto leading-loose">
          {t.thanks}
        </p>
      </section>

    </main>
  );
}