"use client";

import { FaInfoCircle, FaRegClock } from "react-icons/fa";

const comingSoon = [
  { title: "Deadpool & Wolverine", release: "July 26, 2024", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/33216_yWE33LY5.jpg" },
  { title: "Joker: Folie à Deux", release: "Oct 4, 2024", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/32670_G2NzOQOC.jpg" },
  { title: "Gladiator 2", release: "Nov 22, 2024", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/31845_eP6ssj1x.jpg" },
  { title: "Avatar 3", release: "Dec 19, 2025", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/33071_b87BA94s.jpg" },
];

export default function ComingSoon() {
  return (
    <section className="px-8 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">🎬 Coming Soon</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {comingSoon.map((movie, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={movie.src} alt={movie.title} className="w-full h-96 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
                <FaRegClock /> {movie.release}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 w-full hover:bg-blue-600 transition">
                <FaInfoCircle /> More Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
