// src/Guest/components/About.jsx
import React from 'react';

// Data untuk bagian fitur tiga kolom
// Ganti path gambar dan teks sesuai dengan kebutuhan Anda.
// Pastikan gambar ada di public/img/
const featuresData = [
  {
    image: '/img/Pancake.jpg', // Ganti dengan path gambar Anda (misal: steak.jpg)
    title: 'Daily New Fresh Menus',
    description: "Sedap help you treat yourself with a different meal everyday, thanks to our daily changing menus and our awesome creative chefs!",
    link: '#menu-daily' // Sesuaikan link
  },
  {
    image: '/img/Food2.jpg', // Ganti dengan path gambar Anda (misal: ingredients.jpg)
    title: 'Fresh Ingredient, Tasty Meals',
    description: "Who said healthy food can't also be delicious? D'bento creative chefs use fresh and seasonal ingredients to make affordable.",
    link: '#ingredients' // Sesuaikan link
  },
  {
    image: '/img/Food.jpg', // Ganti dengan path gambar Anda (misal: pizza-chef.jpg)
    title: 'Creative & Talented Chefs',
    description: "Sedap have offered a team of culinary professionals that make delectable dishes at memorable events for both private clients.",
    link: '#chefs' // Sesuaikan link
  }
];

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white text-center" id="about">
      <div className="container mx-auto px-6">
        {/* Judul Utama */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
          Welcome to Sedap
        </h2>

        {/* Teks Kecil "BENTO'S" dan Garis Dekoratif */}
        <div className="flex justify-center items-center mb-1">
          <p className="text-xs font-semibold text-yellow-600 tracking-widest">
            Sedap.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="w-16 h-0.5 bg-yellow-500"></div>
        </div>

        {/* Paragraf Pengantar */}
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-16 md:mb-20">
          Sedap was the first restaurant to open in Italy, the restaurant was designed with the
          history in mind we have created a soft industrial dining room, combined with an open
          kitchen, coffee take out bar and on site coffee roastery.
        </p>

        {/* Bagian Fitur Tiga Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-56 object-cover" // Pastikan gambar memiliki rasio aspek yang baik
              />
              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold 
                             px-6 py-2.5 rounded-md text-sm transition-colors duration-300
                             inline-block self-center" // Tombol di tengah
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}