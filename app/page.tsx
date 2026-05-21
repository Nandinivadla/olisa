"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");

  const text = {
    en: {
      title: "25 Years Of Love",

      quote:
        "Years passed, but the way we look at each other never changed.",

      welcome1:
        "From the bottom of our hearts, THANK YOU. Thank you for surrounding us today with your love, your presence and your precious friendship.",

      welcome2:
        "This evening will pass far too quickly and we do not want to forget a single smile, a single laugh or a single beautiful memory shared together.",

      welcome3:
        "To help us keep these precious moments forever, please use this website to upload your photos, share your memories and leave us a heartfelt message. A simple scan of the QR code and a few clicks are enough to participate in this beautiful shared memory book.",

      family:
        "Our greatest blessing in life is the beautiful family we built together with Auriane Clochard • Leïla Clochard • Nathanaël Clochard.",

      parking: "Parking Available",

      parkingText:
        "Free parking spaces are available for all guests near the venue.",

      route: "Ceremony Route",

      routeText:
        "Navigate directly to the anniversary celebration venue.",

      routeButton: "Track Route",

      address: "Venue Address",

      addressText:
        "Salle des fêtes — France",

      rsvp: "RSVP",

      name: "Name",
      email: "Email",
      message: "Message",

      send: "Send RSVP",

      memories: "Share Your Memories",

      memoriesText:
        "Upload your favorite memories and photos with us.",

      upload: "Choose Photos",

      thank:
        "Thank you for celebrating love, family and beautiful memories with us.",
    },

    fr: {
      title: "25 Ans D’amour",

      quote:
        "Les années passent, mais notre regard l’un pour l’autre n’a jamais changé.",

      welcome1:
        "Du fond du cœur, MERCI. Merci de nous entourer aujourd’hui de votre amour, de votre présence et de votre précieuse amitié.",

      welcome2:
        "Parce que cette soirée va passer beaucoup trop vite, nous ne voulons oublier ni un sourire, ni un rire, ni un seul des beaux souvenirs partagés ensemble.",

      welcome3:
        "Pour nous aider à garder ces précieux moments pour toujours, utilisez ce site pour ajouter vos photos, partager vos souvenirs et nous laisser un message rempli d’amour. Un simple scan du QR code et quelques clics suffisent pour participer à ce magnifique livre de souvenirs partagé.",

      family:
        "Notre plus belle bénédiction est la magnifique famille que nous avons construite avec Auriane Clochard • Leïla Clochard • Nathanaël Clochard.",

      parking: "Parking Disponible",

      parkingText:
        "Des places de parking gratuites sont disponibles près du lieu.",

      route: "Itinéraire",

      routeText:
        "Accédez directement au lieu de célébration.",

      routeButton: "Voir La Route",

      address: "Adresse",

      addressText:
        "Salle des fêtes — France",

      rsvp: "RSVP",

      name: "Nom",
      email: "Email",
      message: "Message",

      send: "Envoyer",

      memories: "Partagez Vos Souvenirs",

      memoriesText:
        "Ajoutez vos photos et souvenirs préférés avec nous.",

      upload: "Choisir Des Photos",

      thank:
        "Merci de célébrer l’amour, la famille et ces beaux souvenirs avec nous.",
    },
  };

  const t = text[lang as "en" | "fr"];

  return (
    <main className="min-h-screen bg-[#1b0808] text-[#fff4ef] overflow-hidden relative">

      {/* HEARTS */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">

        <div className="absolute top-20 left-10 text-4xl animate-pulse">
          ♥
        </div>

        <div className="absolute top-40 right-20 text-3xl animate-bounce">
          ♥
        </div>

        <div className="absolute top-[700px] left-[20%] text-4xl">
          ♥
        </div>

        <div className="absolute top-[1300px] right-[10%] text-4xl">
          ♥
        </div>

      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/10">

        <h1 className="text-4xl md:text-6xl font-serif">
          Olivier & Isabelle
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() => setLang("en")}
            className="bg-[#f4df7d] text-black px-5 py-2 rounded-full font-bold"
          >
            EN
          </button>

          <button
            onClick={() => setLang("fr")}
            className="bg-[#f4df7d] text-black px-5 py-2 rounded-full font-bold"
          >
            FR
          </button>

        </div>
      </div>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <h2 className="text-6xl md:text-8xl font-serif text-[#f7d9d9]">
          {t.title}
        </h2>

        <p className="italic text-2xl md:text-4xl mt-10 max-w-5xl mx-auto">
          “{t.quote}”
        </p>

      </section>

     {/* PHOTOS */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* PHOTO 1 */}

    <div className="overflow-hidden rounded-[40px] shadow-2xl h-[650px]">
      <img
        src="/photo1.jpeg"
        alt="Olivier and Isabelle"
        className="w-full h-full object-cover"
      />
    </div>

    {/* PHOTO 3 */}

    <div className="overflow-hidden rounded-[40px] shadow-2xl h-[650px]">
      <img
        src="/photo3.jpeg"
        alt="Olivier and Isabelle"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

</section>

      {/* WELCOME */}
      <section className="max-w-6xl mx-auto mt-20 bg-white/10 rounded-[40px] p-10 text-center">

        <p className="text-2xl leading-[2]">
          {t.welcome1}
        </p>

        <p className="text-2xl leading-[2] mt-8">
          {t.welcome2}
        </p>

        <p className="text-2xl leading-[2] mt-8">
          {t.welcome3}
        </p>

      </section>

      {/* FAMILY */}
      <section className="max-w-6xl mx-auto mt-16 bg-white/10 rounded-[40px] p-10 text-center">

        <p className="italic text-3xl md:text-5xl leading-[2]">
          {t.family}
        </p>

      </section>
{/* MENU */}

<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-5xl md:text-7xl text-center mb-14 text-[#f6d6e6] font-serif">
    {lang === "fr" ? "Menu De La Soirée" : "Evening Menu"}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* STARTERS */}
    <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

      <h3 className="text-3xl font-serif text-[#f6d6e6] mb-6">
        {lang === "fr" ? "Entrées" : "Starters"}
      </h3>

      <div className="space-y-4 text-xl">
        <p>• ----------</p>
        <p>• ----------</p>
        <p>• ----------</p>
      </div>

    </div>

    {/* MAIN COURSE */}
    <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

      <h3 className="text-3xl font-serif text-[#f6d6e6] mb-6">
        {lang === "fr" ? "Plat Principal" : "Main Course"}
      </h3>

      <div className="space-y-4 text-xl">
        <p>• ----------</p>
        <p>• ----------</p>
        <p>• ----------</p>
      </div>

    </div>

    {/* DESSERTS */}
    <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

      <h3 className="text-3xl font-serif text-[#f6d6e6] mb-6">
        {lang === "fr" ? "Desserts" : "Desserts"}
      </h3>

      <div className="space-y-4 text-xl">
        <p>• ----------</p>
        <p>• ----------</p>
        <p>• ----------</p>
      </div>

    </div>

    {/* DRINKS */}
    <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

      <h3 className="text-3xl font-serif text-[#f6d6e6] mb-6">
        {lang === "fr" ? "Boissons" : "Drinks"}
      </h3>

      <div className="space-y-4 text-xl">
        <p>• ----------</p>
        <p>• ----------</p>
        <p>• ----------</p>
      </div>

    </div>

  </div>

</section>
      {/* 4 BOXES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20 px-6">

       {/* PARKING */}

<div className="bg-[#4b3b3b]/90 rounded-[45px] p-8 md:p-14 shadow-2xl border border-white/10">

  <h3 className="text-[#f3cfe0] text-5xl md:text-7xl font-serif mb-8 leading-tight">
    {t.parking}
  </h3>

  <p className="text-white text-2xl md:text-4xl leading-relaxed mb-6">
    Free parking spaces are available for all guests near the venue.
  </p>

  {/* PARKING LINK */}

  <a
    href="https://maps.app.goo.gl/EGXTYeDpkHr17BXNA"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-6 text-[#a8f0dc] text-2xl md:text-3xl underline underline-offset-4 hover:text-white transition"
  >
    View Parking Location
  </a>

</div>

        {/* ROUTE */}
        <div className="bg-[#4b3b3b]/90 rounded-[45px] p-8 md:p-14 shadow-2xl border border-white/10">

  <h3 className="text-[#f3cfe0] text-5xl md:text-7xl font-serif mb-8 leading-tight">
    {t.route}
  </h3>

  <p className="text-white text-2xl md:text-4xl leading-relaxed mb-6">
    {t.routeText}
  </p>

  {/* ADDRESS */}

  <div className="bg-white/10 rounded-[30px] p-6 mb-8 border border-white/10">

    <p className="text-[#f7e7ef] text-xl md:text-3xl font-semibold leading-relaxed">
      Lycée Briacé, Internat fille,
      <br />
      Le Landreau 44430
    </p>

  </div>

  {/* BUTTON */}

  <a
    href="https://maps.app.goo.gl/pWKbdsW7vnGzegLG8"
    target="_blank"
  >

    <button className="bg-[#a9ead7] hover:bg-[#c1f5e6] transition duration-300 text-black text-2xl md:text-3xl font-bold px-10 py-5 rounded-full shadow-xl w-full md:w-auto">

      {t.routeButton}

    </button>

  </a>

</div>
      </section>

      {/* EVENING TIMINGS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-5xl md:text-7xl text-center mb-14 text-[#f6d6e6] font-serif">
          {lang === "fr" ? "Programme de la Soirée" : "Evening Celebration"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Accueil" : "Welcome"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              --:--
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Accueil des invités, cocktails et moments chaleureux."
                : "Guest arrival, welcome drinks and warm moments together."}
            </p>

          </div>

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Cérémonie" : "Ceremony"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              --:--
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Un moment rempli d’amour et d’émotions."
                : "A beautiful emotional celebration filled with love."}
            </p>

          </div>

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Dîner & Musique" : "Dinner & Music"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              --:--
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Un dîner convivial accompagné de musique."
                : "A lovely dinner evening with music and laughter."}
            </p>

          </div>

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Souvenirs & Photos" : "Memories & Photos"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              --:--
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Partagez vos souvenirs et vos photos avec nous."
                : "Share your favorite memories and beautiful photos."}
            </p>

          </div>

        </div>

      </section>

      {/* ADDRESS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white/10 rounded-[35px] p-10">

          <h3 className="text-5xl font-serif text-pink-200">
            {t.address}
          </h3>

          <p className="mt-6 text-2xl leading-[1.8]">
            {t.addressText}
          </p>

        </div>

      </section>

      {/* RSVP SECTION */}

<section className="max-w-6xl mx-auto mt-20 bg-white/10 rounded-[40px] p-10 backdrop-blur-md border border-white/10">

  <h2 className="text-center text-6xl font-serif mb-6 text-[#fff4ef]">
    RSVP 💌
  </h2>

  <p className="text-center text-2xl italic mb-10 text-[#f6d6e6]">
    {lang === "fr"
      ? "Laissez-nous un message rempli d’amour et de beaux souvenirs ✨"
      : "Leave us a message filled with love and beautiful memories ✨"}
  </p>

  <form
    action="https://formsubmit.co/clochardolisa@gmail.com"
    method="POST"
    className="space-y-6"
  >

    {/* FORM SETTINGS */}

    <input
      type="hidden"
      name="_captcha"
      value="false"
    />

    <input
      type="hidden"
      name="_template"
      value="table"
    />

    <input
      type="hidden"
      name="_subject"
      value="New RSVP Message 💌"
    />

    {/* NAME */}

    <input
      type="text"
      name="name"
      placeholder={
        lang === "fr"
          ? "Votre nom"
          : "Your Name"
      }
      required
      className="w-full p-6 rounded-[25px] bg-[#ffffff10] border border-white/10 text-2xl outline-none placeholder:text-[#d8c4c4]"
    />

    {/* EMAIL */}

    <input
      type="email"
      name="email"
      placeholder={
        lang === "fr"
          ? "Votre email"
          : "Your Email"
      }
      required
      className="w-full p-6 rounded-[25px] bg-[#ffffff10] border border-white/10 text-2xl outline-none placeholder:text-[#d8c4c4]"
    />

    {/* MESSAGE */}

    <textarea
      name="message"
      rows={7}
      placeholder={
        lang === "fr"
          ? "Écrivez un joli message rempli d’amour..."
          : "Write a sweet message filled with love..."
      }
      required
      className="w-full p-6 rounded-[25px] bg-[#ffffff10] border border-white/10 text-2xl outline-none placeholder:text-[#d8c4c4]"
    />

    {/* SEND BUTTON */}

    <button
      type="submit"
      className="w-full bg-[#f4df7d] hover:bg-[#f8e79d] transition duration-300 text-black text-3xl font-bold py-5 rounded-full shadow-2xl"
    >
      {lang === "fr"
        ? "Envoyer 💌"
        : "Send RSVP 💌"}
    </button>

  </form>

</section>

      {/* MEMORIES */}
      <section className="max-w-6xl mx-auto mt-24 bg-white/10 rounded-[40px] p-10 text-center">

        <h2 className="text-6xl font-serif">
          {t.memories}
        </h2>

        <p className="mt-8 text-2xl leading-[1.8]">
          {t.memoriesText}
        </p>

        <input
          type="file"
          multiple
          className="mt-10 text-2xl"
        />

        <div>

          <button className="mt-8 bg-pink-200 text-black px-10 py-5 rounded-full text-2xl font-bold">
            {t.upload}
          </button>

        </div>

      </section>

      {/* THANK YOU */}
      <section className="text-center py-28 px-6">

        <p className="text-3xl md:text-5xl italic max-w-5xl mx-auto leading-[2]">
          {t.thank}
        </p>

      </section>

    </main>
  );
}