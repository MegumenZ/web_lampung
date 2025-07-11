import React, { useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import { LanguageContext } from '../contexts/LanguageContext';
import Translations from '../data/Translation';

const perangkatDaerahLainnya = [
  { nama: 'Dinas Lingkungan Hidup', logo: '/img/lingkungan.jpg', url: 'https://dlh.lampungprov.go.id' },
  { nama: 'Dinas Sosial', logo: '/img/sosial.jpg', url: 'https://dinsos.lampungprov.go.id' },
  { nama: 'Dinas Pariwisata', logo: '/img/pariwisata.jpg', url: 'https://disparekraf.lampungprov.go.id/' },
  { nama: 'Dinas Pertanian', logo: '/img/pertanian.jpg', url: 'https://dinastph.lampungprov.go.id/' },
  { nama: 'Disperindag', logo: '/img/disperindag.jpg', url: 'https://disperindag.lampungprov.go.id' },
  { nama: 'Dinas Kelautan & Perikanan', logo: '/img/laut.jpg', url: 'https://dkp.lampungprov.go.id' },
  { nama: 'Dinas Tenaga Kerja', logo: '/img/kerja.jpg', url: 'https://disnaker.lampungprov.go.id' },
  { nama: 'Dukcapil', logo: '/img/capil.jpg', url: 'https://disdukcapil.lampungprov.go.id/' },
  { nama: 'DP3A', logo: '/img/sehat.jpg', url: 'https://dinaspppa.lampungprov.go.id/' },
  { nama: 'Dinas PU', logo: '/img/pu.jpg', url: 'https://disperkim.lampungprov.go.id/' },
];


function PerangkatDaerahSlider() {
  const swiperRef = useRef(null);
  const { language } = useContext(LanguageContext);
  const t = Translations[language];

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-14 px-4 md:px-6 rounded-2xl shadow-sm relative">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-tight">
        {'PERANGKAT DAERAH LAINNYA'}
      </h2>

      <div className="relative px-4 md:px-6 lg:px-10">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          speed={500}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          className="pb-6"
        >
          {perangkatDaerahLainnya.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[170px] sm:w-[190px] md:w-[210px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                  rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:ring-2 hover:ring-yellow-400"
              >
                <div className="flex flex-col items-center p-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 bg-white shadow-inner">
                    <img
                      src={item.logo}
                      alt={`Logo ${item.nama}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-center text-[13px] sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-white group-hover:text-yellow-500 transition">
                    {item.nama}
                  </h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Panah */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 
            bg-white/80 dark:bg-gray-700/80 backdrop-blur p-2 md:p-3 rounded-full shadow-lg 
            hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition z-30"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 
            bg-white/80 dark:bg-gray-700/80 backdrop-blur p-2 md:p-3 rounded-full shadow-lg 
            hover:scale-110 hover:text-yellow-500 text-gray-700 dark:text-white transition z-30"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default PerangkatDaerahSlider;
