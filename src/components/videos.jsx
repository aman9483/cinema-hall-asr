"use client";

import { useState, useEffect } from "react";
import { FaTag } from "react-icons/fa";

// 🎁 Offers Data with AI-Generated Images (Embedded)
const offers = [
  {
    title: "Flat 50% Off on Weekdays!",
    desc: "Enjoy movies at half price on Mon-Wed.",
    src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/13306_jHHnwWLN.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    desc: "Exclusive offer on selected credit cards.",
    src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/13306_jHHnwWLN.jpg",
  },
  {
    title: "Student Special Discount",
    desc: "Show your student ID & get 20% off!",
    src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/13306_jHHnwWLN.jpg",
  },
  {
    title: "Free Popcorn with Premium Seats",
    desc: "Upgrade your seat & get free popcorn!",
    src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/13306_jHHnwWLN.jpg",
  },
  {
    title: "Weekend Combo Deal",
    desc: "Movie + Snacks Combo at just $9.99!",
    src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/13306_jHHnwWLN.jpg",
  },
];

export default function OffersMarquee() {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => (prev - 1) % (offers.length * 320)); // Smooth scrolling effect
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">🎁 Offers for You</h2>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex w-full overflow-hidden">
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.2s linear",
            whiteSpace: "nowrap",
          }}
        >
          {[...offers, ...offers].map((offer, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg w-[320px] flex-shrink-0">
              <img src={offer.src} alt={offer.title} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-lg font-bold">{offer.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{offer.desc}</p>

                {/* CTA Button */}
                <button className="mt-3 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                  <FaTag /> Grab Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
