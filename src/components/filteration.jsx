"use client";

import { useState } from "react";

const movies = ["Deadpool & Wolverine", "Dune: Part Two", "Joker: Folie à Deux", "The Boys (S4)", "Echo"];
const genres = ["Action", "Sci-Fi", "Thriller", "Drama", "Superhero"];
const languages = ["English", "Hindi", "French", "Spanish"];
const times = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"];

export default function MovieBookingFilter() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(times[0]);

  const handleBooking = () => {
    alert(`Booking: ${selectedMovie} on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg flex flex-wrap items-center gap-4 justify-center md:justify-between">
      <select className="border p-2 rounded" value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
        {movies.map((movie) => (
          <option key={movie} value={movie}>{movie}</option>
        ))}
      </select>
      
      <select className="border p-2 rounded" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      
      <select className="border p-2 rounded" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      
      <input type="date" className="border p-2 rounded" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      
      <select className="border p-2 rounded" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        {times.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      
      <button onClick={handleBooking} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        Book Now
      </button>
    </div>
  );
}
