// src/Guest/components/MenuHighlights.jsx
import React from 'react';
import itemsForDisplay from '../data/products.json'; 

export function TopProducts() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-yellow-50" id="menu-highlights">
      <div className="container mx-auto px-6">
        {/* Judul Utama */}
        <h2 className="text-5xl font-bold mb-2 text-center text-gray-900" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Our Culinary Creations
        </h2>

        {/* Subjudul & Garis Dekoratif */}
        <div className="flex justify-center items-center mb-1">
          <p className="text-xs font-semibold text-yellow-600 tracking-widest">
            FEATURED
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="w-16 h-0.5 bg-yellow-500"></div>
        </div>

        {/* Paragraf Pengantar */}
        <p className="max-w-2xl mx-auto text-center text-gray-600 text-base mb-20">
          Follow our latest updates to know about our offers, recipes and events. One cannot 
          think well, love well, sleep well, if one has not dined well.
        </p>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {itemsForDisplay.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image || '/img/placeholder-food.jpg'} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                {item.date && (
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.date}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description ? `${item.description.split(' ').slice(0, 20).join(' ')}...` : `Nikmati ${item.name} dengan cita rasa istimewa dari Sedap.`}
                </p>
                {item.price && (
                  <p className="text-yellow-700 font-bold text-lg mb-4">
                    Rp {Number(item.price).toLocaleString('id-ID')}
                  </p>
                )}
                <a
                  href={`#product-${item.id}`}
                  className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold 
                             px-6 py-2.5 rounded-lg text-sm transition duration-300 self-center"
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