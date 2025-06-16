import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const KabupatenKotaSection = () => {
  const kabupatenKota = [
    { logo: '/logos/balam.webp', url: 'https://bandarlampungkota.go.id/' },
    { logo: '/logos/metro.webp', url: 'https://www.metrokota.go.id/' },
    { logo: '/logos/lamsel.webp', url: 'https://www.lampungselatankab.go.id/' },
    { logo: '/logos/lamteng.webp', url: 'https://www.lampungtengahkab.go.id/' },
    { logo: '/logos/lamtim.webp', url: 'https://www.lampungtimurkab.go.id/' },
    { logo: '/logos/lambar.webp', url: 'https://www.lampungbaratkab.go.id/' },
    { logo: '/logos/lamtara.webp', url: 'https://www.lampungutarakab.go.id/' },
    { logo: '/logos/tulang.webp', url: 'https://tulangbawangkab.go.id/' },
    { logo: '/logos/tubaba.webp', url: 'https://www.tulangbawangbaratkab.go.id/' },
    { logo: '/logos/tanggamus.webp', url: 'https://www.tanggamuskab.go.id/' },
    { logo: '/logos/pesawaran.webp', url: 'https://www.pesawaran.go.id/' },
    { logo: '/logos/pringsewu.webp', url: 'https://www.pringsewukab.go.id/' },
    { logo: '/logos/waykanan.webp', url: 'https://www.waykanankab.go.id/' },
    { logo: '/logos/mesuji.webp', url: 'https://mesujikab.go.id/' },
    { logo: '/logos/pesisir.webp', url: 'https://pesisirbaratkab.go.id/' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 md:px-6 rounded-lg shadow animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        PEMERINTAH KABUPATEN / KOTA
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={2000}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
          1280: { slidesPerView: 9 },
          1536: { slidesPerView: 11 },
        }}
        className="pb-2"
      >
        {kabupatenKota.map((item, index) => (
          <SwiperSlide key={index} className="w-auto flex justify-center items-center">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-500 hover:scale-105"
            >
              <img
                src={item.logo}
                alt={`Logo ${item.url}`}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
              />

            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default KabupatenKotaSection;
