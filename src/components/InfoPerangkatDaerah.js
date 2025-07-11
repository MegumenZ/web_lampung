import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { LanguageContext } from '../contexts/LanguageContext';
import Translations from '../data/Translation';
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';  

function InfoPerangkatDaerah() {
  const { language } = useContext(LanguageContext);
  const t = Translations[language];

  const navigate = useNavigate(); // Inisialisasi navigate

  const dataPerangkat = [
    {
      nama: 'Badan Pengelolaan Keuangan dan Aset Daerah',
      deskripsi: 'Mengelola keuangan dan aset daerah',
      url: 'https://bpkad.lampungprov.go.id/',  
      logo: '/img/BPKAD.png', 
    },
    {
      nama: 'Badan Pengembangan Aset Daerah',
      deskripsi: 'Bertanggung jawab dalam pengembangan dan optimalisasi aset daerah',
      url: 'https://bpsdm.lampungprov.go.id/',  
      logo: '/img/BPSDM.png', 
    },
    {
      nama: 'Dinas Energi dan Sumber Daya Mineral',
      deskripsi: 'Mengatur dan mengelola kebijakan energi',
      url: 'https://esdm.lampungprov.go.id/',  
      logo: '/img/ESDM.png', 
    },
    {
      nama: 'Badan Pendapatan Daerah Lampung',
      deskripsi: 'Bertugas untuk mengelola dan meningkatkan pendapatan daerah',
      url: 'https://bapenda.lampungprov.go.id/landpage/',  
      logo: '/img/Bapenda.png', 
    },
  ];

  // Fungsi untuk menavigasi ke detail perangkat, jika ingin menavigasi ke halaman lain gunakan navigate sesuai kebutuhan
  const showDetail = (index) => {
    // Jika Anda tidak lagi membutuhkan halaman detail, hapus atau ganti logika ini
    window.open(dataPerangkat[index].url, "_blank"); // Membuka URL di tab baru
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-20 transition-all">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        {t.infoPerangkatDaerah || 'Info Perangkat Daerah'}
      </h2>

      {/* Menggunakan grid untuk membuat layout dua di atas dan dua di bawah, dan memastikan gambar tidak gepeng */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataPerangkat.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-yellow-500 flex flex-col items-center text-center cursor-pointer"
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-20 mb-4 flex justify-center items-center overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.nama}
                  className="object-contain w-full h-full transition-transform duration-500 transform group-hover:scale-110" // Menjaga gambar tetap proporsional
                />
              </div>
            </a>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-left w-full">
              {item.nama}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-left w-full">
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoPerangkatDaerah;
