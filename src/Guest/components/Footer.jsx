// src/Guest/components/Footer.jsx
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 tracking-wider">Sedap</h3>
            <p className="text-sm leading-loose">
              Restoran, bar, dan coffee roastery terbaik di kota. Menyajikan pengalaman kuliner yang tak terlupakan dengan bahan-bahan segar dan chef berbakat.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
            <p className="text-sm mb-1">Email: <a href="mailto:info@dbento.com" className="hover:text-yellow-400">yogxfx@sedap.com</a></p>
            <p className="text-sm mb-1">Telp: <a href="tel:+62123456789" className="hover:text-yellow-400">+62 813 8053 4961</a></p>
            <p className="text-sm">Alamat: Jl. Yos Sudarso No. 1, Kota Pekanbaru</p>
            {/* Partner image bisa diletakkan di sini jika masih relevan */}
            {/* <img src="/img/PCR.jpg" alt="Partner Logo" className="w-32 mt-4 rounded bg-white p-1" /> */}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sedap. All rights reserved. Dirancang dengan ❤️.</p>
        </div>
      </div>
    </footer>
  );
}