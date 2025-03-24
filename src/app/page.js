"use client";

import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaTicketAlt, FaInfoCircle, FaFilm } from "react-icons/fa"; 
import Filteration from "@/components/filteration"

const movies = [
  { title: "Deadpool & Wolverine", genre: "Action", src: "https://m.media-amazon.com/images/I/8147tI87lfL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Dune: Part Two", genre: "Sci-Fi", src: "https://m.media-amazon.com/images/I/71cS3aGfH0L._AC_UF1000,1000_QL80_.jpg" },
  { title: "Joker: Folie à Deux", genre: "Thriller", src: "https://m.media-amazon.com/images/I/815HS+mzotL._AC_UF894,1000_QL80_.jpg" },
  { title: "The Boys (S4)", genre: "Drama", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfDWvXgkVaHN0yyvItLKpJirxqN3FYUNNPQ&s" },
  { title: "Echo", genre: "Superhero", src: "https://m.media-amazon.com/images/M/MV5BMWMyMTljMTItNWZmZC00ODllLWIzOTEtOTcwMzczOThlNmUwXkEyXkFqcGc@._V1_.jpg" },
  { title: "Ghatak", genre: "Action", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/33178_yLK9JpAV.jpg" },
  { title: "Pintu ki Pappi", genre: "Romance", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/33147_MAXcLF4e.jpg" },
  { title: "Snow white", genre: "Sci-Fi", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28715_O79YIg8G.jpg" },
  { title: "The Diplomat", genre: "Drama", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28669_H97CmO3B.jpg" },
  { title: "Chhaava", genre: "Thriller", src: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29986_fIc1UkKI.jpg" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* Hero Section with Carousel */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <img
          src={movies[currentIndex].src}
          alt={movies[currentIndex].title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
        />
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <FiChevronLeft size={35} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <FiChevronRight size={35} />
        </button>
      </div>

      <Filteration/>

      <section className="px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center flex justify-center items-center gap-2">
    <FaFilm className="text-red-500" /> Now Showing
  </h2>

  {/* Responsive Movie Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    {movies.map((movie, index) => (
      <div 
        key={index} 
        className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition p-3 sm:p-4 flex flex-col items-center"
      >
        <img 
          src={movie.src} 
          alt={movie.title} 
          className="w-full h-auto object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-3 text-center">{movie.title}</h3>
        <p className="text-gray-600 text-center text-sm">{movie.genre}</p>

        {/* Buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 flex-wrap">
          <button className="flex items-center gap-1 bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            <FaFilm /> Genre
          </button>
          <button className="flex items-center gap-1 bg-gray-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-600 transition">
            <FaInfoCircle /> Info
          </button>
          <button className="flex items-center gap-1 bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-600 transition">
            <FaTicketAlt /> Book
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
