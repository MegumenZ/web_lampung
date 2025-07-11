import React, { useState, useContext } from 'react';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';
import KabupatenKotaSection from '../components/KabupatenKotaSection';
import PerangkatDaerahSlider from '../components/PerangkatDaerahSlider';
import InfoPerangkatDaerah from '../components/InfoPerangkatDaerah'; 
import { LanguageContext } from '../contexts/LanguageContext';
import Translations from '../data/Translation';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const [setSelectedNews] = useState(null);
  const handleNewsClick = (news) => setSelectedNews(news);
  const { language } = useContext(LanguageContext);
  const t = Translations[language];

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative">
      <Sidebar />
      <HeroSection />

      {/* Motif Atas Global */}
      <div
        className="w-full h-[46px] bg-repeat-x bg-top"
        style={{ backgroundImage: "url('motif.png')", backgroundSize: 'contain' }}
      ></div>

      {/* Pimpinan Daerah */}
      <section
        className="relative bg-cover bg-center py-20 px-6 md:px-20 text-center"
        style={{ backgroundImage: "url('/batik3.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-500 drop-shadow-[0_3px_15px_rgba(255,255,255,0.6)] mb-6 animate-fade-in-up uppercase">
            {t.pimpinanDaerah}
          </h2>
          <div className="w-24 h-1 mx-auto bg-yellow-400 rounded-full animate-pulse shadow-md mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
            {[{
              name: 'RAHMAT MIRZANI DJAUSAL, S.T, M.M',
              title: t.gubernur,
              image: '/gubernur.png',
              delay: 'delay-100'
            }, {
              name: 'dr. JIHAN NURLELA, M.M.',
              title: t.wakilGubernur,
              image: '/wakil.png',
              delay: 'delay-200'
            }].map((person, i) => (
              <div
                key={i}
                className={`group transform transition duration-500 animate-fade-in-up ${person.delay} cursor-pointer`}
              >
                <div className="w-[300px] h-[400px] mx-auto overflow-hidden rounded-2xl shadow-xl transition duration-500 group-hover:scale-105">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 uppercase mt-4 transition duration-300 group-hover:scale-105 group-hover:text-yellow-300">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base text-gray-100 italic transition duration-300 group-hover:scale-105 group-hover:text-gray-300">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motif Bawah Global */}
      <div
        className="w-full h-[46px] bg-repeat-x bg-top"
        style={{ backgroundImage: "url('motif.png')", backgroundSize: 'contain' }}
      ></div>

      {/* Konten Bawah */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 gap-8 py-12">
        <div className="relative w-full md:w-3/4 space-y-12 bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden pt-0 pb-16 px-4">
          {/* Ornamen atas & bawah */}
          <div
            className="absolute top-0 left-0 right-0 h-[30px] bg-no-repeat bg-top pointer-events-none z-0"
            style={{
              backgroundImage: "url('tapisatas.jpg')",
              backgroundSize: '100% 30px',
              backgroundPosition: 'top',
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[30px] bg-no-repeat bg-bottom pointer-events-none z-0"
            style={{
              backgroundImage: "url('tapisbawah.jpg')",
              backgroundSize: '100% 30px',
              backgroundPosition: 'bottom',
            }}
          ></div>

          <div className="relative z-10 space-y-12">

            {/* Info Perangkat Daerah - Mengganti dengan Komponen InfoPerangkatDaerah */}
            <InfoPerangkatDaerah />

            <PerangkatDaerahSlider />
            <KabupatenKotaSection />
          </div>
        </div>

        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>
    </div>
  );
}

export default Home;
