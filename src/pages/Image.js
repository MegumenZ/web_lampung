import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const images = [
  { src: '/retro.jpg', alt: 'EUPHORIA' },
  { src: '/faithh.jpg', alt: 'POINT' },
  { src: '/dhiass.jpg', alt: 'ANOMALY' },
  { src: '/contoh.png', alt: 'LAMPUNG, Salah satu mahasiswa ITERA sedang melakukan Kerja Lapangan' },
  { src: '/ini.jpg', alt: 'Gubernur Lampung dampingi Menteri Perhubungan dan Menteri Dalam Negeri Meninjau Pelabuhan Untuk Kesiapan Arus Mudik 2025' },
    { src: '/karl.jpg', alt: 'ROG Masterpiece' },
];

const Image = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white animate-fade-in">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Tengah */}
      <main className="flex-1 px-6 py-10 overflow-x-auto ml-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">Gallery Images</h1>
            <p className="text-gray-300 mb-6 text-center">Album Provinsi Lampung</p>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-yellow-200/30 bg-white transform transition duration-300 hover:scale-105"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-3 text-center text-gray-800 font-semibold">
                    {img.alt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Sidebar Kanan */}
      <SidebarKanan />
    </div>
  );
};

export default Image;
