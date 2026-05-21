"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("fr");

  const text = {
    fr: {
      title: "Olivier & Isabelle",
      subtitle: "25 Ans D’amour",
      quote:
        "Les années passent, mais la façon dont nous nous regardons n’a jamais changé.",

      family:
        "Notre plus belle réussite dans la vie est l’amour et la magnifique famille que nous avons construite avec Auriane, Leïla et Nathanaël.",

      welcomeTitle: "Bienvenue sur notre espace partagé !",

      welcomeText: `
Du fond du cœur, MERCI.

Merci de nous entourer aujourd'hui, de nous gâter par votre présence, votre amour et votre précieuse amitié.

Parce que cette soirée va passer trop vite et que nous ne voulons rien oublier, nous avons besoin de vous !

Pour participer à nos souvenirs :
Utilisez ce site pour y glisser vos photos de la soirée et vos mots doux.

Petit scan du QR Code et quelques clics suffisent pour ajouter vos images et vos messages.

Profitez bien de la fête, on vous aime !

Isabelle et Olivier
      `,

      parking: "Parking Gratuit Disponible",
      parkingText:
        "Des places de parking privées et gratuites sont disponibles pour tous les invités.",

      route: "Lieu & Itinéraire",
      routeText:
        "Cliquez ci-dessous pour suivre l’itinéraire vers le lieu de célébration.",

      routeButton: "Suivre L’itinéraire",

      guest: "Messages Des Invités",
      guestPlaceholder:
        "Écrivez un joli message rempli d’amour...",

      upload: "Partager Vos Souvenirs",
      uploadText:
        "Ajoutez vos photos préférées de cette magnifique célébration.",

      thanks:
        "Merci de célébrer cet amour avec nous. Votre présence rend cette journée encore plus belle."
    },

    en: {
      title: "Olivier & Isabelle",
      subtitle: "25 Years Of Love",
      quote:
        "Years passed, but the way we look at each other never changed.",

      family:
        "Our greatest blessing in life is the love and beautiful family we built together with Auriane, Leïla and Nathanaël.",

      welcomeTitle: "Welcome to our shared space!",

      welcomeText: `
From the bottom of our hearts, THANK YOU.

Thank you for surrounding us today with your presence, your love and your precious friendship.

Because this evening will pass too quickly and we do not want to forget anything, we need you!

To share memories with us:
Use this website to upload your evening photos and your sweet messages.

Just scan the QR code and with a few clicks you can add your pictures and messages.

Enjoy the celebration, we love you!

Isabelle & Olivier
      `,

      parking: "Free Parking Available",
      parkingText:
        "Private free parking spaces are available for all guests.",

      route: "Venue & Route",
      routeText:
        "Click below to navigate directly to the celebration venue.",

      routeButton: "Track Route",

      guest: "Guest Messages",
      guestPlaceholder:
        "Write a sweet message filled with love...",

      upload: "Share Your Memories",
      uploadText:
        "Upload your favorite photos from this beautiful celebration.",

      thanks:
        "Thank you for celebrating this love with us. Your presence makes this day even more beautiful."
    },
  };

  const t = text[lang as "fr" | "en"];

  return (
    <main className="min-h-screen bg-[#241717] text-[#fff4ef] overflow-hidden relative">

      {/* GLITTERS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 18}px`,
              opacity: 0.4,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/10">
        <h1 className="text-3xl md:text-5xl font-serif">
          {t.title}
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => setLang("en")}
            className="bg-[#f6df75] text-black px-5 py-2 rounded-full font-bold"
          >
            EN
          </button>

          <button
            onClick={() => setLang("fr")}
            className="bg-[#f6df75] text-black px-5 py-2 rounded-full font-bold"
          >
            FR
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-6xl md:text-8xl font-serif text-[#ffdce9]">
          {t.subtitle}
        </h2>

        <p className="italic text-2xl md:text-4xl mt-10 max-w-5xl mx-auto">
          “{t.quote}”
        </p>
      </section>

     {/* 3 PHOTOS */}
<section className="flex flex-col gap-8 justify-center items-center px-6 py-10">

  {/* TOP 2 PHOTOS */}
  <div className="flex flex-col md:flex-row gap-8 justify-center items-center">

    <img
      src="/photo1.jpeg"
      alt=""
      className="w-[300px] h-[420px] object-cover object-center rounded-[35px] shadow-2xl border border-white/10"
    />

    <img
      src="/photo3.jpeg"
      alt=""
      className="w-[300px] h-[420px] object-cover object-center rounded-[35px] shadow-2xl border border-white/10"
    />

  </div>

  {/* BIG HORIZONTAL PHOTO */}
  <img
    src="/photo4.jpeg"
    alt=""
    className="w-full max-w-[1100px] h-[500px] object-cover object-center rounded-[40px] shadow-2xl border border-white/10"
  />

</section>

      {/* FAMILY QUOTE */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto bg-white/10 rounded-[40px] p-10 text-center">
          <p className="italic text-3xl md:text-5xl leading-relaxed">
            {t.family}
          </p>
        </div>
      </section>

      {/* WELCOME MESSAGE */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-white/10 rounded-[40px] p-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-10 text-[#ffdce9]">
            {t.welcomeTitle}
          </h2>

          <p className="text-xl leading-loose whitespace-pre-line">
            {t.welcomeText}
          </p>
        </div>
      </section>
           {/* EVENT TIMINGS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-white/10 rounded-[40px] p-10">

          <h2 className="text-5xl font-serif text-center text-[#ffdce9] mb-14">
            {lang === "fr" ? "Horaires De L’événement" : "Event Timings"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-4 text-[#ffdce9]">
                {lang === "fr" ? "Accueil Des Invités" : "Guest Arrival"}
              </h3>

              <p className="text-2xl">
                --:--
              </p>
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-4 text-[#ffdce9]">
                {lang === "fr" ? "Dîner" : "Dinner"}
              </h3>

              <p className="text-2xl">
                --:--
              </p>
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-4 text-[#ffdce9]">
                {lang === "fr" ? "Célébration" : "Celebration"}
              </h3>

              <p className="text-2xl">
                --:--
              </p>
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-4 text-[#ffdce9]">
                {lang === "fr" ? "Dessert & Musique" : "Dessert & Music"}
              </h3>

              <p className="text-2xl">
                --:--
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-white/10 rounded-[40px] p-10">

          <h2 className="text-5xl font-serif text-center text-[#ffdce9] mb-14">
            {lang === "fr" ? "Menu" : "Menu"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-5">
                {lang === "fr" ? "Entrée" : "Starter"}
              </h3>

              <p className="text-xl leading-loose">
                • ---------- <br />
                • ---------- <br />
                • ----------
              </p>
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-5">
                {lang === "fr" ? "Plat Principal" : "Main Course"}
              </h3>

              <p className="text-xl leading-loose">
                • ---------- <br />
                • ---------- <br />
                • ----------
              </p>
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-5">
                {lang === "fr" ? "Desserts" : "Desserts"}
              </h3>

              <p className="text-xl leading-loose">
                • ---------- <br />
                • ---------- <br />
                • ----------
              </p>
            </div>

            <div className="bg-white/10 rounded-[30px] p-8">
              <h3 className="text-3xl font-serif mb-5">
                {lang === "fr" ? "Boissons" : "Drinks"}
              </h3>

              <p className="text-xl leading-loose">
                • ---------- <br />
                • ---------- <br />
                • ----------
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* PARKING + ROUTE */}
      <section className="grid md:grid-cols-2 gap-8 px-6 pb-20">

        <div className="bg-white/10 rounded-[40px] p-10">
          <h2 className="text-4xl font-serif text-[#ffdce9] mb-6">
            {t.parking}
          </h2>

          <p className="text-xl leading-relaxed">
            {t.parkingText}
          </p>
        </div>

        <div className="bg-white/10 rounded-[40px] p-10">
          <h2 className="text-4xl font-serif text-[#ffdce9] mb-6">
            {t.route}
          </h2>

          <p className="text-xl leading-relaxed mb-8">
            {t.routeText}
          </p>

          <a
            href="https://maps.app.goo.gl/pWKbdsW7vnGzegLG8"
            target="_blank"
            className="inline-block bg-[#9de7d6] text-black px-10 py-5 rounded-full text-2xl font-bold"
          >
            {t.routeButton}
          </a>
        </div>
      </section>

      {/* GUEST MESSAGES */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-white/10 rounded-[40px] p-10">

          <h2 className="text-5xl font-serif text-center mb-10">
            {t.guest}
          </h2>

          <textarea
            placeholder={t.guestPlaceholder}
            className="w-full h-[250px] rounded-[30px] bg-white/10 border border-white/20 p-8 text-2xl outline-none"
          />

          <button className="mt-8 bg-[#f7cfe0] text-black px-12 py-5 rounded-full text-2xl font-bold">
            Post Message
          </button>
        </div>
      </section>

      {/* PHOTO UPLOAD */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-white/10 rounded-[40px] p-10 text-center">

          <h2 className="text-5xl font-serif mb-8 text-[#ffdce9]">
            {t.upload}
          </h2>

          <p className="text-2xl mb-10">
            {t.uploadText}
          </p>

          <input
            type="file"
            multiple
            className="text-xl"
          />
        </div>
      </section>

      {/* THANK YOU */}
      <section className="text-center px-6 pb-24">
        <p className="italic text-3xl md:text-5xl max-w-5xl mx-auto leading-relaxed">
          {t.thanks}
        </p>
      </section>

    </main>
  );
}