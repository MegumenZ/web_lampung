import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const daftarPasar = [
  { nama: 'Pasar Pasir Gintung', slug: 'pasar-pasir-gintung', lokasi: 'Bandar Lampung', icon: '/icons/market.png' },
  { nama: 'Pasar Tugu', slug: 'pasar-tugu', lokasi: 'Bandar Lampung', icon: '/icons/market.png' },
  { nama: 'Pasar Natar', slug: 'pasar-natar', lokasi: 'Lampung Selatan', icon: '/icons/market.png' },
  { nama: 'Pasar Unit 2', slug: 'pasar-unit-2', lokasi: 'Tulang Bawang', icon: '/icons/market.png' },
  { nama: 'Pasar Metro Pusat', slug: 'pasar-metro', lokasi: 'Kota Metro', icon: '/icons/market.png' },
];

function HargaPasarList() {
  return (
    <div className="flex bg-[#0f172a] text-white min-h-screen">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama */}
      <main className="flex-grow p-6 md:px-16 space-y-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg mb-4 uppercase animate-fade-in-up">
              🏬 Daftar Pasar Provinsi Lampung
            </h1>
            <p className="text-gray-300 text-base animate-fade-in-up delay-100">Klik salah satu pasar di bawah ini untuk melihat harga</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {daftarPasar.map((pasar, index) => (
              <Link
                key={index}
                to={`/harga-pasar/${pasar.slug}`}
                className={`group bg-[#1e293b] rounded-xl p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-400 animate-fade-in-up delay-[${index * 100}ms]`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={pasar.icon}
                    alt={pasar.nama}
                    className="w-14 h-14 object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{pasar.nama}</h3>
                    <p className="text-sm text-gray-400">{pasar.lokasi}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Sidebar Kanan */}
      <div className="hidden md:block w-full md:w-1/4 sticky top-0 h-fit">
        <SidebarKanan />
      </div>
    </div>
  );
}

export default HargaPasarList;
