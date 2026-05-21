"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("May 23, 2026 18:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1414] via-[#3b2c27] to-[#10101a] text-[#fff5ef] overflow-hidden">

      {/* HEADER */}

      <header className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-5xl font-serif">
          Olivier & Isabelle
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setLanguage("en")}
            className="bg-[#f7e27a] text-black px-5 py-2 rounded-full font-semibold"
          >
            EN
          </button>

          <button
            onClick={() => setLanguage("fr")}
            className="bg-[#f7e27a] text-black px-5 py-2 rounded-full font-semibold"
          >
            FR
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="text-center py-24 px-6">
        <h2 className="text-7xl font-serif mb-8 text-[#ffe8d6]">
          {language === "en"
            ? "25 Years Of Love"
            : "25 Ans D’Amour"}
        </h2>

        <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-[#f9ddd0]">
          {language === "en"
            ? "Every picture tells our story — love, warmth and family through every season of life."
            : "Chaque photo raconte notre histoire — amour, chaleur et famille à travers chaque saison de la vie."}
        </p>
      </section>

      {/* COUNTDOWN */}

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 mb-28">

        {[
          {
            label: language === "en" ? "Days" : "Jours",
            value: timeLeft.days,
          },
          {
            label: language === "en" ? "Hours" : "Heures",
            value: timeLeft.hours,
          },
          {
            label: language === "en" ? "Minutes" : "Minutes",
            value: timeLeft.minutes,
          },
          {
            label: language === "en" ? "Seconds" : "Secondes",
            value: timeLeft.seconds,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#3f1f1f]/60 backdrop-blur-xl rounded-[35px] p-10 text-center shadow-2xl"
          >
            <h3 className="text-6xl font-bold mb-4">
              {item.value}
            </h3>

            <p className="text-2xl">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* PHOTO GALLERY */}

      <section className="flex flex-wrap justify-center gap-10 px-8 mb-32">

      {/* PHOTO GALLERY */}

     <section className="flex flex-wrap justify-center gap-10 px-8 mb-32">

     <div className="overflow-hidden rounded-[35px] shadow-2xl">
    <img
      src="/photo1.jpeg"
      alt="photo1"
      className="w-[280px] h-[380px] object-cover"
    />
  </div>

  <div className="overflow-hidden rounded-[35px] shadow-2xl">
    <img
      src="/photo2.jpeg"
      alt="photo2"
      className="w-[320px] h-[430px] object-cover"
    />
  </div>

  <div className="overflow-hidden rounded-[35px] shadow-2xl">
    <img
      src="/photo3.jpeg"
      alt="photo3"
      className="w-[280px] h-[380px] object-cover"
    />
  </div>

  <div className="overflow-hidden rounded-[35px] shadow-2xl">
    <img
      src="/photo4.jpeg"
      alt="photo4"
      className="w-[280px] h-[380px] object-cover"
    />
  </div>

</section>

      {/* MENU */}

      <section className="px-8 mb-32">

        <h2 className="text-6xl font-serif text-center mb-16 text-[#ffd5ec]">
          {language === "en"
            ? "Celebration Menu"
            : "Menu De La Célébration"}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            "• Starter\n• Salad\n• Special Dish",
            "• Dessert\n• Cake\n• Champagne",
            "• Kids Menu\n• Soft Drinks\n• Snacks",
            "• Special Surprise\n• Family Toast\n• Celebration"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl rounded-[35px] p-10"
            >
              <pre className="text-2xl whitespace-pre-wrap font-serif">
                {item}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* PARKING + ROUTE */}

      <section className="grid md:grid-cols-2 gap-10 px-8 mb-20">

        <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-12">
          <h2 className="text-5xl font-serif mb-8 text-[#ffd5ec]">
            {language === "en"
              ? "Parking Available"
              : "Parking Disponible"}
          </h2>

          <p className="text-2xl leading-relaxed">
            {language === "en"
              ? "Private parking spaces are available for all guests near the venue."
              : "Des places de parking privées sont disponibles pour tous les invités près du lieu de célébration."}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-12">
          <h2 className="text-5xl font-serif mb-8 text-[#ffd5ec]">
            {language === "en"
              ? "Ceremony Route"
              : "Route De La Cérémonie"}
          </h2>

          <p className="text-2xl mb-10">
            {language === "en"
              ? "Navigate directly to the anniversary celebration venue."
              : "Naviguez directement vers le lieu de célébration."}
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="bg-[#9cf0d4] text-black px-10 py-5 rounded-full text-2xl font-bold"
          >
            {language === "en"
              ? "Track Route"
              : "Voir La Route"}
          </a>
        </div>
      </section>

      {/* MESSAGE */}

      <section className="px-8 mb-32">

        <div className="bg-white/10 backdrop-blur-xl rounded-[45px] p-16 text-center">

          <p className="text-3xl italic leading-loose max-w-6xl mx-auto text-[#fff0e8]">

            {language === "en" ? (
              <>
                “Years passed, but the way we look at each other never changed.
                Love like this deserves to be celebrated.
                Every picture tells our story — love, warmth and family through every season of life.
                Through every challenge, every celebration, every laugh and every dream,
                we still chose each other.
                For 25 beautiful years.”
              </>
            ) : (
              <>
                “Les années ont passé, mais la façon dont nous nous regardons n’a jamais changé.
                Un amour comme celui-ci mérite d’être célébré.
                Chaque photo raconte notre histoire — amour, chaleur et famille à travers chaque saison de la vie.
                À travers chaque défi, chaque célébration, chaque rire et chaque rêve,
                nous nous sommes toujours choisis.
                Depuis 25 magnifiques années.”
              </>
            )}

          </p>
        </div>
      </section>

      {/* UPLOAD MEMORIES */}

      <section className="px-8 pb-32">

        <div className="bg-[#3f1f1f]/60 rounded-[45px] p-16 text-center">

          <h2 className="text-5xl font-serif mb-8">
            {language === "en"
              ? "Share Your Memories"
              : "Partagez Vos Souvenirs"}
          </h2>

          <p className="text-2xl mb-10">
            {language === "en"
              ? "Upload your beautiful pictures and memories from this celebration."
              : "Téléchargez vos magnifiques photos et souvenirs de cette célébration."}
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