// src/pages/TataKelola.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const tataKelolaData = [
  {
    title: "Tata Kelola ER-KPD",
    desc: "Deskripsi layanan Tata Kelola ER-KPD di Pemprov Lampung.",
    link: "https://www.erkpd.lampungprov.go.id/",
    image: "tawa.jpg",
  },
  {
    title: "Tata Kelola ERPJMD",
    desc: "Deskripsi layanan Tata Kelola ERPJMD di Pemprov Lampung.",
    link: "https://erpjmd.lampungprov.go.id/",
    image: "tawa.jpg",
  },
  {
    title: "Tata Kelola SIPPKD",
    desc: "Deskripsi layanan Tata Kelola SIPPKD di Pemprov Lampung.",
    link: "http://www.sippkd.lampungprov.go.id/site/login",
    image: "tawa.jpg",
  },
  {
    title: "Tata Kelola Api Data",
    desc: "Deskripsi layanan Tata Kelola Api Data di Pemprov Lampung.",
    link: "https://jama-jama.lampungprov.go.id/",
    image: "tawa.jpg",
  },
  {
    title: "Tata Kelola ABSENSI",
    desc: "Deskripsi layanan Tata Kelola Absensi di Pemprov Lampung.",
    link: "https://absensi.lampungprov.go.id/",
    image: "tawa.jpg",
  },
  {
    title: "Tata Kelola E-POKIR",
    desc: "Deskripsi layanan Tata Kelola E-POKIR di Pemprov Lampung.",
    link: "http://emusrenbang.lampungprov.go.id/pokir/site/login",
    image: "tawa.jpg",
  },
];

const TataKelola = () => {
  return (
    <div className="flex min-h-screen bg-[#f9fafb] dark:bg-[#0f172a] text-gray-800 dark:text-white">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama */}
      <main className="flex-1 px-6 py-10 ml-16 animate-fade-in">
        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-blue-700 dark:text-yellow-400 mb-4 text-center tracking-wide">
            Tata Kelola
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            Berikut adalah daftar layanan yang terkait dengan Tata Kelola di Pemprov Lampung:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tataKelolaData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#374151] rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.03] p-6 text-center hover:bg-blue-50 dark:hover:bg-[#2c3a4a]"
              >
                <img
                  src={`/${item.image}`}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md border-2 border-blue-500 mb-4"
                />
                <h2 className="text-lg font-bold text-blue-800 dark:text-yellow-300">{item.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:text-blue-700 dark:hover:text-yellow-400 font-semibold transition-colors"
                >
                  Kunjungi
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Sidebar Kanan */}
      <div className="hidden md:block sticky top-0 h-screen">
        <SidebarKanan />
      </div>
    </div>
  );
};

export default TataKelola;
