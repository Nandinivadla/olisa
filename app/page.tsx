"use client";

import { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

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
        "To help us keep these precious moments forever, please use this website to upload your photos, share your memories and leave us a heartfelt message.",

      family:
        "Our greatest blessing in life is the beautiful family we built together with Auriane Clochard • Leïla Clochard • Nathanaël Clochard.",

      parking: "Parking Available",

      parkingText:
        "Free parking spaces are available for all guests near the venue.",

      route: "Ceremony Route",

      routeText:
        "Navigate directly to the anniversary celebration venue.",

      routeButton: "Track Route",

      memories: "Share Your Memories",

      memoriesText:
        "Upload your favorite memories and photos with us.",

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
        "Parce que cette soirée va passer beaucoup trop vite, nous ne voulons oublier ni un sourire, ni un rire.",

      welcome3:
        "Ajoutez vos photos, souvenirs et messages remplis d’amour.",

      family:
        "Notre plus belle bénédiction est la magnifique famille que nous avons construite avec Auriane Clochard • Leïla Clochard • Nathanaël Clochard.",

      parking: "Parking Disponible",

      parkingText:
        "Des places gratuites sont disponibles près du lieu.",

      route: "Itinéraire",

      routeText:
        "Accédez directement au lieu de célébration.",

      routeButton: "Voir La Route",

      memories: "Partagez Vos Souvenirs",

      memoriesText:
        "Ajoutez vos photos et souvenirs préférés avec nous.",

      thank:
        "Merci de célébrer l’amour, la famille et ces beaux souvenirs avec nous.",
    },
  };

  const t = text[lang as "en" | "fr"];

  return (
    <main className="min-h-screen bg-[#1b0808] text-[#fff4ef] overflow-hidden">

      {/* HEADER */}

      <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/10">

        <h1 className="text-3xl md:text-6xl font-serif">
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

      <section className="text-center py-16 md:py-24 px-6">

        <h2 className="text-5xl md:text-8xl font-serif text-[#f7d9d9]">
          {t.title}
        </h2>

        <p className="italic text-xl md:text-4xl mt-10 max-w-5xl mx-auto">
          “{t.quote}”
        </p>

      </section>

      {/* PHOTOS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          <div className="overflow-hidden rounded-[30px] shadow-2xl h-[420px] md:h-[650px]">
            <img
              src="/photo1.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[30px] shadow-2xl h-[420px] md:h-[650px]">
            <img
              src="/photo3.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </section>

      {/* WELCOME */}

      <section className="max-w-6xl mx-auto mt-20 bg-white/10 rounded-[40px] p-8 md:p-10 text-center">

        <p className="text-xl md:text-2xl leading-[2]">
          {t.welcome1}
        </p>

        <p className="text-xl md:text-2xl leading-[2] mt-8">
          {t.welcome2}
        </p>

        <p className="text-xl md:text-2xl leading-[2] mt-8">
          {t.welcome3}
        </p>

      </section>

      {/* FAMILY */}

      <section className="max-w-6xl mx-auto mt-16 bg-white/10 rounded-[40px] p-10 text-center">

        <p className="italic text-2xl md:text-5xl leading-[2]">
          {t.family}
        </p>

      </section>

      {/* PARKING + ROUTE */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* PARKING */}

          <div className="bg-[#4b3b3b]/90 rounded-[45px] p-8 md:p-14 shadow-2xl border border-white/10">

            <h3 className="text-[#f3cfe0] text-4xl md:text-6xl font-serif mb-8">
              {t.parking}
            </h3>

            <p className="text-white text-xl md:text-2xl leading-relaxed mb-6">
              {t.parkingText}
            </p>

            <a
              href="https://maps.app.goo.gl/EGXTYeDpkHr17BXNA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#a8f0dc] text-xl md:text-2xl underline underline-offset-4 hover:text-white transition"
            >
              View Parking Location
            </a>

          </div>

          {/* ROUTE */}

          <div className="bg-[#4b3b3b]/90 rounded-[45px] p-8 md:p-14 shadow-2xl border border-white/10">

            <h3 className="text-[#f3cfe0] text-4xl md:text-6xl font-serif mb-8">
              {t.route}
            </h3>

            <p className="text-white text-xl md:text-2xl leading-relaxed mb-6">
              {t.routeText}
            </p>

            <div className="bg-white/10 rounded-[30px] p-6 mb-8 border border-white/10">

              <p className="text-[#f7e7ef] text-lg md:text-2xl font-semibold leading-relaxed">
                Lycée Briacé, Internat fille,
                <br />
                Le Landreau 44430
              </p>

            </div>

            <a
              href="https://maps.app.goo.gl/pWKbdsW7vnGzegLG8"
              target="_blank"
            >

              <button className="bg-[#a9ead7] hover:bg-[#c1f5e6] transition duration-300 text-black text-xl md:text-2xl font-bold px-10 py-5 rounded-full shadow-xl w-full md:w-auto">

                {t.routeButton}

              </button>

            </a>

          </div>

        </div>

      </section>

      {/* EVENING TIMINGS */}

      <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">

        <h2 className="text-5xl md:text-7xl text-center mb-14 text-[#f6d6e6] font-serif">
          {lang === "fr" ? "Programme de la Soirée" : "Evening Celebration"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* WELCOME */}

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Accueil" : "Welcome"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              16:30
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Accueil des invités et moments chaleureux."
                : "Guest arrival, welcome drinks and warm moments together."}
            </p>

          </div>

          {/* CEREMONY */}

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Cérémonie" : "Ceremony"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              19:30
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Un moment rempli d’amour et d’émotions."
                : "A beautiful emotional celebration filled with love."}
            </p>

          </div>

          {/* DINNER */}

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Dîner" : "Dinner"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              21:00
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Un délicieux dîner accompagné de musique."
                : "A lovely dinner evening with music and laughter."}
            </p>

          </div>

          {/* DANCE */}

          <div className="bg-[#4a3a3a]/70 backdrop-blur-md rounded-[35px] p-8 border border-[#ffffff20] shadow-2xl">

            <h3 className="text-3xl font-serif text-[#f6d6e6] mb-4">
              {lang === "fr" ? "Danse" : "Dance"}
            </h3>

            <p className="text-2xl mb-3 font-semibold">
              22:00
            </p>

            <p className="text-lg leading-relaxed">
              {lang === "fr"
                ? "Danse, musique et souvenirs inoubliables."
                : "Celebrate together with music, dancing and unforgettable memories."}
            </p>

          </div>

        </div>

      </section>

      {/* RSVP */}

      <section className="max-w-6xl mx-auto mt-20 bg-white/10 rounded-[40px] p-10 backdrop-blur-md border border-white/10">

        <h2 className="text-center text-5xl md:text-6xl font-serif mb-6 text-[#fff4ef]">
          RSVP 💌
        </h2>

        <p className="text-center text-lg md:text-2xl italic mb-10 text-[#f6d6e6]">
          Leave us a message filled with love and beautiful memories ✨
        </p>

        <form
          action="https://formsubmit.co/clochardolisa@gmail.com"
          method="POST"
          className="space-y-6"
        >

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New RSVP Message 💌" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-5 rounded-[25px] bg-[#ffffff10] border border-white/10 text-xl outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-5 rounded-[25px] bg-[#ffffff10] border border-white/10 text-xl outline-none"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Write a sweet message filled with love..."
            required
            className="w-full p-5 rounded-[25px] bg-[#ffffff10] border border-white/10 text-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#f4df7d] hover:bg-[#f8e79d] transition duration-300 text-black text-2xl md:text-3xl font-bold py-5 rounded-full shadow-2xl"
          >
            Send RSVP 💌
          </button>

        </form>

      </section>

      {/* MEMORIES */}

      <section className="max-w-6xl mx-auto mt-24 bg-white/10 rounded-[40px] p-10 text-center">

        <h2 className="text-5xl md:text-6xl font-serif">
          {t.memories}
        </h2>

        <p className="mt-8 text-xl md:text-2xl leading-[1.8]">
          {t.memoriesText}
        </p>

        <div className="mt-10 flex justify-center">

          <div className="bg-white rounded-[30px] p-6">

            <FileUploaderRegular
              pubkey="c096cebd110383ca5427"
            />

          </div>

        </div>

      </section>

      {/* THANK YOU */}

      <section className="text-center py-24 px-6">

        <p className="text-xl md:text-5xl italic max-w-5xl mx-auto leading-[2]">
          {t.thank}
        </p>

      </section>

      <p className="text-center text-[#9f8b92] text-xs md:text-sm py-6">
        © nandukrish ✨
      </p>

    </main>
  );
}