"use client";

const experiences = [
  { src: "https://cdn.evt.com/wp-content/uploads/2024/10/25164302/IMAX-in-Queensgate-NZ-will-be-similar-to-Pacfic-Fair.jpg" },
  { src: "https://images.indianexpress.com/2022/11/Tech-InDepth-4DX-Pixabay.jpg" },
  { src: "https://www.cnet.com/a/img/resize/fe8e33e15c28caed682a2a6f78bcc9f28254b3cf/hub/2024/10/20/14a8dabc-187b-46cb-8797-1b0b84fd9ef0/gettyimages-1779743996-hxdbzxy-dolby-atmos.jpg?auto=webp&fit=crop&height=675&width=1200" },
  { src: "https://images.squarespace-cdn.com/content/v1/5da654b124f7645ecc827157/1573768054787-L7FSFV6P6SJL788SZVCH/RealD-Cinema-Home-Image.jpg" },
];

export default function Experience() {
  return (
    <section className="px-8 py-12 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">🎥 Experience Movies Like Never Before</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={exp.src} alt={`Experience ${index + 1}`} className="w-full h-70 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
