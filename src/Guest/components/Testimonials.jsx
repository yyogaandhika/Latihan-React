// src/Guest/components/Testimonials.jsx
import React from 'react';
import testimonials from '../data/testimonials.json'; // Pastikan path ini benar

// Komponen untuk ikon kutipan (bisa juga menggunakan SVG)
const QuoteIcon = () => (
  <span className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 md:-translate-x-3 md:-translate-y-3 text-6xl md:text-7xl text-yellow-500 opacity-80 font-serif">
    “
  </span>
);


export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-800" id="testimonials"> {/* Latar belakang gelap */}
      <div className="container mx-auto px-6">
        {/* Judul Utama */}
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center text-white">
          Our Guestbook
        </h2>
        {/* Teks Kecil "TESTIMONIAL" dan Garis Dekoratif */}
        <div className="flex justify-center items-center mb-1">
          <p className="text-xs font-semibold text-yellow-500 tracking-widest">
            TESTIMONIAL
          </p>
        </div>
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-16 h-0.5 bg-yellow-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 pt-10 rounded-md shadow-xl flex flex-col items-center text-center relative transform hover:scale-105 transition-transform duration-300"
            >
              <QuoteIcon />
              <p className="text-gray-600 italic leading-relaxed mb-8 text-sm md:text-base relative z-10">
                {testimonial.review}
              </p>
              <img
                // Ganti src ini jika Anda memiliki URL avatar langsung di testimonials.json
                src={testimonial.avatarUrl || `https://i.pravatar.cc/80?u=${testimonial.avatarSeed || testimonial.name.replace(/\s+/g, '')}`}
                alt={testimonial.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 shadow-md border-2 border-white"
              />
              <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
              <p className="text-xs text-gray-500">{testimonial.role || 'Customer'}</p>
            </div>
          ))}
        </div>

        {/* Indikator Slider (Opsional, hanya visual untuk saat ini) */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.slice(0,3).map((_, index) => ( // Hanya tampilkan 3 titik jika ada 3 kartu
            <button
              key={`dot-${index}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === 0 ? 'bg-yellow-500' : 'bg-gray-500 hover:bg-gray-400' // Titik pertama aktif sebagai contoh
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}