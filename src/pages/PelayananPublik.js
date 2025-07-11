// src/pages/PelayananPublik.js
import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const layanan = [
  {
    title: "Lapor Lampung",
    desc: "Pengaduan masyarakat secara online kepada Pemprov Lampung.",
    link: "https://lampung.lapor.go.id/",
    image: "https://image.thum.io/get/https://lampung.lapor.go.id/",
  },
  {
    title: "Cek Pajak Kendaraan",
    desc: "Cek status pajak kendaraan secara online di Pemprov Lampung.",
    link: "http://pkb.bapenda.lampungprov.go.id/pkb/",
    image: "https://image.thum.io/get/http://pkb.bapenda.lampungprov.go.id/pkb/",
  },
  {
    title: "Geoportal Lampung",
    desc: "Akses peta dan data geospasial Pemprov Lampung.",
    link: "https://geoportal.lampungprov.go.id/home/",
    image: "https://image.thum.io/get/https://geoportal.lampungprov.go.id/home/",
  },
  {
    title: "PPID Lampung",
    desc: "Public Information Disclosure (PPID) Pemprov Lampung.",
    link: "https://ppid.lampungprov.go.id/",
    image: "https://image.thum.io/get/https://ppid.lampungprov.go.id/",
  },
  {
    title: "Pengadaan Barang dan Jasa Lampung",
    desc: "Informasi terkait pengadaan barang dan jasa di Pemprov Lampung.",
    link: "https://bpbj.lampungprov.go.id/",
    image: "https://image.thum.io/get/https://bpbj.lampungprov.go.id/",
  },
  {
      title: "Jurnal Inovasi Pembangunan",
      desc: "Jurnal tentang inovasi pembangunan di Pemprov Lampung.",
      link: "https://jurnal.balitbangda.lampungprov.go.id/index.php/jip",
      image: "/img/inovasi.png", 
  },
  {
    title: "Kartu Petani Berjaya",
    desc: "Program kartu petani berjaya untuk mendukung pertanian di Lampung.",
    link: "https://kpb.lampungprov.go.id/",
    image: "https://image.thum.io/get/https://kpb.lampungprov.go.id/",
  },
  {
    title: "Sigajah App",
    desc: "Aplikasi Sigajah untuk pemerintahan daerah di Lampung.",
    link: "https://play.google.com/store/apps/details?id=com.diskominfotik.sigajahmobile",
    image: "https://image.thum.io/get/https://play.google.com/store/apps/details?id=com.diskominfotik.sigajahmobile",
  },
  {
    title: "E-Kliping Ketenagakerjaan",
    desc: "Informasi terkait ketenagakerjaan di Lampung.",
    link: "https://disnaker.lampungprov.go.id/detail-post/e-kliping-ketenagakerjaan-2021",
    image: "https://image.thum.io/get/https://disnaker.lampungprov.go.id/detail-post/e-kliping-ketenagakerjaan-2021",
  },
];

const PelayananPublik = () => {
  return (
    <PageWithSidebar>
      <motion.div
        className="p-6 md:p-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-yellow-400 mb-4 tracking-wide">
            Pelayanan Publik
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            Berikut adalah daftar layanan publik yang tersedia:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {layanan.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#374151] rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.03] p-6 text-center hover:bg-blue-50 dark:hover:bg-[#2c3a4a]"
              >
                <img
                  src={item.image}
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
      </motion.div>
    </PageWithSidebar>
  );
};

export default PelayananPublik;
