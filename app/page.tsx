"use client";

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    "25 years of beautiful memories ❤️",
    "So happy to celebrate this magical evening",
  ]);

  const [newMessage, setNewMessage] = useState("");

  const addMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([newMessage, ...messages]);
      setNewMessage("");
    }
  };

  const showQuote = () => {
    alert(
      "Time flies, memories fade, but moments shared with the people we love stay forever."
    );
  };

  return (
    <main className="min-h-screen bg-[#111111] text-[#fff7f5] overflow-hidden relative">

      {/* DARK GLITTER BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#1c1b22] to-[#111111]" />

      {/* SOFT GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffffff08] blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ffffff08] blur-3xl rounded-full" />

      {/* FLOATING GLITTER */}
      <div className="absolute top-20 left-20 text-white text-2xl animate-pulse opacity-60">
        ✦
      </div>

      <div className="absolute top-40 right-20 text-white text-xl animate-pulse opacity-40">
        ✧
      </div>

      <div className="absolute bottom-40 left-1/3 text-white text-2xl animate-pulse opacity-40">
        ✦
      </div>

      <div className="absolute bottom-20 right-1/4 text-white text-xl animate-pulse opacity-30">
        ✧
      </div>

      {/* FLOATING HEARTS */}
      <div className="absolute top-32 left-10 text-[#f6dce5] text-4xl opacity-20 animate-pulse">
        ♡
      </div>

      <div className="absolute top-52 right-16 text-[#eadfff] text-3xl opacity-20 animate-bounce">
        ♥
      </div>

      <div className="absolute bottom-40 left-20 text-[#fff0f6] text-5xl opacity-10 animate-pulse">
        ♡
      </div>

      <div className="absolute bottom-60 right-24 text-[#f5d0e6] text-4xl opacity-20 animate-ping">
        ♥
      </div>

      {/* LEAVES */}
      <div className="absolute top-0 left-0 text-[220px] opacity-10 rotate-12 select-none">
        🍂
      </div>

      <div className="absolute top-0 right-0 text-[220px] opacity-10 -rotate-12 select-none">
        🍂
      </div>

      <div className="absolute bottom-0 left-0 text-[180px] opacity-10 rotate-6 select-none">
        🌿
      </div>

      <div className="absolute bottom-0 right-0 text-[180px] opacity-10 -rotate-6 select-none">
        🌿
      </div>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">

        <p className="tracking-[0.4em] uppercase text-sm text-[#e7d7ff] mb-6">
          Wedding Anniversary Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-light mb-6 text-[#fff7f5]">
          Olivier & Isabelle
        </h1>

        <div className="w-32 h-[1px] bg-[#d8c8ff] mb-8"></div>

        <p className="max-w-2xl text-lg text-[#e8dff0] leading-8">
          We are delighted to celebrate this beautiful evening with you
          and thank you for being part of our special day.
        </p>

      </section>

      {/* INFO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#3d3538]/70 backdrop-blur-xl rounded-[35px] p-8 border border-[#5d5160] shadow-2xl">

            <h2 className="text-[#e7d7ff] text-2xl mb-4">
              Date
            </h2>

            <p>23 May 2026</p>

          </div>

          <div className="bg-[#556177]/70 backdrop-blur-xl rounded-[35px] p-8 border border-[#7480a3] shadow-2xl">

            <h2 className="text-2xl mb-4">
              Location
            </h2>

            <p>Vertou — near Briacé School</p>

          </div>

          <div
            onClick={showQuote}
            className="bg-[#4b4354]/70 backdrop-blur-xl rounded-[35px] p-8 border border-[#6b587b] shadow-2xl cursor-pointer hover:scale-105 transition"
          >

            <h2 className="text-2xl mb-4">
              Time
            </h2>

            <p>6:00 PM</p>

            <p className="mt-4 text-sm text-[#d8c8ff]">
              Click for a memory
            </p>

          </div>

        </div>

      </section>

      {/* PROGRAM + MENU */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-6">

          {/* PROGRAM */}
          <div className="bg-[#24242b]/70 backdrop-blur-xl rounded-[40px] p-10 border border-[#494955] shadow-2xl">

            <h2 className="text-3xl mb-10 text-[#e7d7ff]">
              Programme
            </h2>

            <div className="space-y-6">

              <div className="flex justify-between border-b border-[#4f4f5f] pb-4">
                <p>Welcome Drinks</p>
                <p>6:00 PM</p>
              </div>

              <div className="flex justify-between border-b border-[#4f4f5f] pb-4">
                <p>Dinner</p>
                <p>7:00 PM</p>
              </div>

              <div className="flex justify-between border-b border-[#4f4f5f] pb-4">
                <p>Speech & Memories</p>
                <p>8:30 PM</p>
              </div>

              <div className="flex justify-between">
                <p>Music & Celebration</p>
                <p>10:00 PM</p>
              </div>

            </div>

          </div>

          {/* MENU */}
          <div className="bg-[#24242b]/70 backdrop-blur-xl rounded-[40px] p-10 border border-[#494955] shadow-2xl">

            <h2 className="text-3xl mb-10 text-[#e7d7ff]">
              Menu
            </h2>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-[#8a7d6d]/80 rounded-[25px] p-5">
                <h3 className="text-xl mb-4">
                  Entrées
                </h3>

                <div className="space-y-2 text-sm">
                  <p>• Smoked salmon</p>
                  <p>• Bruschettas</p>
                  <p>• Cheese platter</p>
                </div>
              </div>

              <div className="bg-[#5f6b8c]/80 rounded-[25px] p-5">
                <h3 className="text-xl mb-4">
                  Main
                </h3>

                <div className="space-y-2 text-sm">
                  <p>• Herb chicken</p>
                  <p>• Gratin</p>
                  <p>• Vegetables</p>
                </div>
              </div>

              <div className="bg-[#776b82]/80 rounded-[25px] p-5">
                <h3 className="text-xl mb-4">
                  Desserts
                </h3>

                <div className="space-y-2 text-sm">
                  <p>• Anniversary cake</p>
                  <p>• Macarons</p>
                  <p>• Fruits</p>
                </div>
              </div>

              <div className="bg-[#483a54]/80 rounded-[25px] p-5">
                <h3 className="text-xl mb-4">
                  Drinks
                </h3>

                <div className="space-y-2 text-sm">
                  <p>• Wine</p>
                  <p>• Champagne</p>
                  <p>• Fresh juice</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SWEET MESSAGES + PHOTOS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-6">

          {/* SWEET MESSAGES */}
          <div className="bg-[#24242b]/70 backdrop-blur-xl rounded-[40px] p-10 border border-[#494955] shadow-2xl">

            <h2 className="text-3xl mb-8 text-[#e7d7ff]">
              Sweet Messages
            </h2>

            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write your sweet message..."
              className="w-full bg-[#1f1f25] border border-[#4d4d5d] rounded-2xl p-5 min-h-[120px] text-white outline-none"
            />

            <button
              onClick={addMessage}
              className="mt-5 bg-[#d8c8ff] text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition"
            >
              Send
            </button>

            <div className="space-y-4 mt-8">

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f25] border border-[#444454] rounded-3xl p-5"
                >
                  “{msg}”
                </div>
              ))}

            </div>

          </div>

          {/* PHOTOS */}
          <div className="bg-[#24242b]/70 backdrop-blur-xl rounded-[40px] p-10 border border-[#494955] shadow-2xl">

            <h2 className="text-3xl mb-8 text-[#e7d7ff]">
              Share Your Photos
            </h2>

            <div className="border-2 border-dashed border-[#6e4f8f] rounded-[30px] p-12 text-center">

              <input
                type="file"
                multiple
                className="block w-full text-[#f1e7ff]"
              />

              <p className="mt-6 text-[#cbb6e6]">
                JPG, PNG accepted
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PARKING */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-[#24242b]/70 backdrop-blur-xl rounded-[40px] p-10 border border-[#494955] shadow-2xl">

          <h2 className="text-3xl mb-8 text-[#e7d7ff]">
            Access & Parking
          </h2>

          <div className="space-y-5 text-lg">

            <p>📍 École Briacé, Vertou</p>

            <p>🚗 Free parking available nearby</p>

            <p>🛣️ Around 20 minutes from Nantes</p>

          </div>

        </div>

      </section>

      {/* FAMILY QUOTE */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">

        <div className="bg-[#24242b]/70 backdrop-blur-xl rounded-[40px] p-12 border border-[#494955] shadow-2xl text-center">

          <h2 className="text-4xl mb-6 text-[#e7d7ff]">
            A Beautiful Family
          </h2>

          <p className="text-xl leading-10 text-[#eadfff]">
            “Through the years, love created not only memories,
            but also three beautiful souls they are endlessly proud of —
            Auriane Clochard, Leïla Clochard and Nathanaël Clochard.”
          </p>

        </div>

      </section>

      {/* THANK YOU */}
      <section className="relative z-10 px-6 pb-28">

        <div className="max-w-5xl mx-auto bg-[#24242b]/70 backdrop-blur-xl rounded-[40px] p-12 border border-[#494955] text-center shadow-2xl">

          <h2 className="text-4xl mb-6 text-[#e7d7ff]">
            Merci
          </h2>

          <p className="text-lg leading-8 text-[#d8cec2]">
            Thank you for celebrating this unforgettable moment with us.
            Your presence makes this evening even more magical.
          </p>

        </div>

      </section>

    </main>
  );
}