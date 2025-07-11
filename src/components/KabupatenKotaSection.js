import React, { useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import Translations from '../data/Translation';
import 'swiper/css';

const KabupatenKotaSection = () => {
  const { language } = useContext(LanguageContext);
  const t = Translations[language];
  const swiperRef = useRef(null);

  const kabupatenKota = [
    { nama: 'Bandar Lampung', logo: '/logos/balam.webp', url: 'https://bandarlampungkota.go.id/' },
    { nama: 'Metro', logo: '/logos/metro.webp', url: 'https://www.metrokota.go.id/' },
    { nama: 'Lampung Selatan', logo: '/logos/lamsel.webp', url: 'https://www.lampungselatankab.go.id/' },
    { nama: 'Lampung Tengah', logo: '/logos/lamteng.webp', url: 'https://www.lampungtengahkab.go.id/' },
    { nama: 'Lampung Timur', logo: '/logos/lamtim.webp', url: 'https://www.lampungtimurkab.go.id/' },
    { nama: 'Lampung Barat', logo: '/logos/lambar.webp', url: 'https://www.lampungbaratkab.go.id/' },
    { nama: 'Lampung Utara', logo: '/logos/lamtara.webp', url: 'https://www.lampungutarakab.go.id/' },
    { nama: 'Tulang Bawang', logo: '/logos/tulang.webp', url: 'https://tulangbawangkab.go.id/' },
    { nama: 'Tulang Bawang Barat', logo: '/logos/tubaba.webp', url: 'https://www.tulangbawangbaratkab.go.id/' },
    { nama: 'Tanggamus', logo: '/logos/tanggamus.webp', url: 'https://www.tanggamuskab.go.id/' },
    { nama: 'Pesawaran', logo: '/logos/pesawaran.webp', url: 'https://www.pesawaran.go.id/' },
    { nama: 'Pringsewu', logo: '/logos/pringsewu.webp', url: 'https://www.pringsewukab.go.id/' },
    { nama: 'Way Kanan', logo: '/logos/waykanan.webp', url: 'https://www.waykanankab.go.id/' },
    { nama: 'Mesuji', logo: '/logos/mesuji.webp', url: 'https://mesujikab.go.id/' },
    { nama: 'Pesisir Barat', logo: '/logos/pesisir.webp', url: 'https://pesisirbaratkab.go.id/' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 md:px-6 rounded-lg shadow animate-fade-in relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        {t.kabupatenKotaTitle || (language === 'id' ? 'PEMERINTAH KABUPATEN / KOTA' : 'REGENCY / CITY GOVERNMENTS')}
      </h2>

      <div className="relative px-4 md:px-6 lg:px-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={600}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
            1536: { slidesPerView: 8 },
          }}
          className="pb-6"
        >
          {kabupatenKota.map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center text-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center transition-transform duration-500 hover:scale-105 group"
              >
                <img
                  src={item.logo}
                  alt={`Logo ${item.nama}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full shadow-md mb-2 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white group-hover:text-yellow-500 transition">
                  {item.nama}
                </h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 
            bg-white/80 dark:bg-gray-700/80 backdrop-blur p-2 md:p-3 rounded-full shadow 
            hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition z-30"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 
            bg-white/80 dark:bg-gray-700/80 backdrop-blur p-2 md:p-3 rounded-full shadow 
            hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition z-30"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default KabupatenKotaSection;
