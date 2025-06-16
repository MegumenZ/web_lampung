// src/pages/PelayananPublik.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const layanan = [
  {
    title: "Lapor Lampung",
    desc: "Pengaduan masyarakat secara online kepada Pemprov Lampung.",
    link: "https://lampung.lapor.go.id/",
    image: "squall.jpg",
  },
  {
    title: "Cek Pajak Kendaraan",
    desc: "Cek status pajak kendaraan secara online di Pemprov Lampung.",
    link: "http://pkb.bapenda.lampungprov.go.id/pkb/",
    image: "squall.jpg",
  },
  {
    title: "Geoportal Lampung",
    desc: "Akses peta dan data geospasial Pemprov Lampung.",
    link: "https://geoportal.lampungprov.go.id/home/",
    image: "squall.jpg",
  },
  {
    title: "PPID Lampung",
    desc: "Public Information Disclosure (PPID) Pemprov Lampung.",
    link: "https://ppid.lampungprov.go.id/",
    image: "squall.jpg",
  },
  {
    title: "Pengadaan Barang dan Jasa Lampung",
    desc: "Informasi terkait pengadaan barang dan jasa di Pemprov Lampung.",
    link: "https://bpbj.lampungprov.go.id/",
    image: "squall.jpg",
  },
  {
    title: "Jurnal Inovasi Pembangunan",
    desc: "Jurnal tentang inovasi pembangunan di Pemprov Lampung.",
    link: "https://jurnal.balitbangda.lampungprov.go.id/index.php/jip",
    image: "squall.jpg",
  },
  {
    title: "Kartu Petani Berjaya",
    desc: "Program kartu petani berjaya untuk mendukung pertanian di Lampung.",
    link: "https://kpb.lampungprov.go.id/",
    image: "squall.jpg",
  },
  {
    title: "Sigajah App",
    desc: "Aplikasi Sigajah untuk pemerintahan daerah di Lampung.",
    link: "https://play.google.com/store/apps/details?id=com.diskominfotik.sigajahmobile",
    image: "squall.jpg",
  },
  {
    title: "E-Kliping Ketenagakerjaan",
    desc: "Informasi terkait ketenagakerjaan di Lampung.",
    link: "https://disnaker.lampungprov.go.id/detail-post/e-kliping-ketenagakerjaan-2021",
    image: "squall.jpg",
  },
];

const PelayananPublik = () => {
  return (
    <div className="flex min-h-screen bg-[#f9fafb] dark:bg-[#0f172a] text-gray-800 dark:text-white">
      <Sidebar />

      <main className="flex-1 ml-16 px-6 py-10 animate-fade-in">
        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-yellow-400 mb-4 tracking-wide">Pelayanan Publik</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            Berikut adalah daftar layanan publik yang tersedia:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {layanan.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#374151] rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-[1.03] p-6 flex flex-col items-center hover:bg-blue-50 dark:hover:bg-[#2c3a4a]"
              >
                <img
                  src={`/${item.image}`}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-yellow-400 font-semibold mt-3 transition-colors"
                >
                  Kunjungi
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="hidden md:block sticky top-0 h-screen">
        <SidebarKanan />
      </div>
    </div>
  );
};

export default PelayananPublik;
