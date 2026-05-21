"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");

  const text = {
    en: {
      title: "25 Years Of Love",
      quote:
        "Years passed, but the way we look at each other never changed.",
      emotional:
        "Through every season of life, Isabelle and Olivier chose love, family, warmth and each other.",
      menu: "Celebration Menu",
      parking: "Parking Available",
      parkingText:
        "Private parking spaces are available for all guests near the venue.",
      route: "Ceremony Route",
      routeText: "Track the route directly to the celebration venue.",
      memories: "Share Your Memories",
      upload:
        "Upload your beautiful photos and memories from this special evening.",
      messages: "Guest Messages",
      thanks:
        "Thank you for celebrating 25 beautiful years of love with us.",
    },

    fr: {
      title: "25 Ans D’amour",
      quote:
        "Les années ont passé, mais notre regard l’un pour l’autre n’a jamais changé.",
      emotional:
        "À travers chaque saison de la vie, Isabelle et Olivier ont choisi l’amour, la famille et la tendresse.",
      menu: "Menu De La Soirée",
      parking: "Parking Disponible",
      parkingText:
        "Des places de parking privées sont disponibles pour tous les invités.",
      route: "Itinéraire De La Cérémonie",
      routeText:
        "Suivez l’itinéraire directement vers le lieu de célébration.",
      memories: "Partagez Vos Souvenirs",
      upload:
        "Ajoutez vos magnifiques photos et souvenirs de cette soirée spéciale.",
      messages: "Messages Des Invités",
      thanks:
        "Merci de célébrer avec nous ces 25 merveilleuses années d’amour.",
    },
  };

  const t = text[lang as "en" | "fr"];

  return (
    <main className="min-h-screen bg-[#241717] text-[#fff4ef]">

      {/* HEADER */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-white/10">
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

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h2 className="text-8xl font-serif mb-8">
          {t.title}
        </h2>

        <p className="text-3xl italic max-w-5xl mx-auto">
          “{t.quote}”
        </p>
      </section>

      {/* MAIN PHOTO */}
      <section className="flex justify-center px-6">
        <img
          src="/photo1.jpeg"
          className="rounded-[40px] w-[900px] max-w-full"
        />
      </section>

      {/* EMOTIONAL SECTION */}
      <section className="max-w-6xl mx-auto mt-24 bg-white/10 rounded-[40px] p-16 text-center">
        <h2 className="text-6xl font-serif text-pink-200 mb-10">
          Auriane Clochard • Leïla Clochard • Nathanaël Clochard
        </h2>

        <p className="text-3xl italic leading-loose">
          {t.emotional}
        </p>
      </section>

      {/* MENU */}
      <section className="max-w-7xl mx-auto mt-24 px-6">
        <h2 className="text-6xl text-center font-serif text-pink-200 mb-14">
          {t.menu}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white/10 p-10 rounded-[35px]">
            <h3 className="text-3xl mb-6">Entrées</h3>
            <p>•</p>
            <p>•</p>
            <p>•</p>
          </div>

          <div className="bg-white/10 p-10 rounded-[35px]">
            <h3 className="text-3xl mb-6">Main Course</h3>
            <p>•</p>
            <p>•</p>
            <p>•</p>
          </div>

          <div className="bg-white/10 p-10 rounded-[35px]">
            <h3 className="text-3xl mb-6">Desserts</h3>
            <p>•</p>
            <p>•</p>
            <p>•</p>
          </div>

          <div className="bg-white/10 p-10 rounded-[35px]">
            <h3 className="text-3xl mb-6">Drinks</h3>
            <p>•</p>
            <p>•</p>
            <p>•</p>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-24 px-6">

        <div className="bg-white/10 rounded-[35px] p-12">
          <h2 className="text-5xl text-pink-200 font-serif mb-8">
            {t.parking}
          </h2>

          <p className="text-2xl leading-loose">
            {t.parkingText}
          </p>

          <p className="mt-6 text-xl">
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
            className="bg-[#9ae8d5] text-black px-10 py-5 rounded-full text-2xl font-bold"
          >
            Track Route
          </a>
        </div>

      </section>

      {/* GUEST MESSAGES */}
      <section className="max-w-6xl mx-auto mt-24 bg-white/10 rounded-[40px] p-16">

        <h2 className="text-6xl font-serif text-center mb-12">
          {t.messages}
        </h2>

        <textarea
          placeholder="Write your beautiful message..."
          className="w-full h-[250px] bg-white/10 rounded-[30px] p-8 text-2xl"
        />

        <button className="mt-10 bg-pink-200 text-black px-10 py-5 rounded-full text-2xl font-bold">
          Post Message
        </button>

      </section>

      {/* UPLOAD PHOTOS */}
      <section className="max-w-6xl mx-auto mt-24 bg-white/10 rounded-[40px] p-16 text-center">

        <h2 className="text-6xl font-serif mb-10">
          {t.memories}
        </h2>

        <p className="text-2xl mb-10">
          {t.upload}
        </p>

        <input
          type="file"
          multiple
          className="text-2xl"
        />

      </section>

      {/* THANK YOU */}
      <section className="text-center py-24 px-6">
        <p className="text-4xl italic max-w-5xl mx-auto leading-loose">
          {t.thanks}
        </p>
      </section>

    </main>
  );
}