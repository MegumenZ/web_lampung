import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function PerangkatDaerahSlider() {
  const perangkatDaerahLainnya = [
    { nama: 'Dinas Lingkungan Hidup', link: 'https://dlh.lampungprov.go.id' },
    { nama: 'Dinas Sosial', link: 'https://dinsos.lampungprov.go.id' },
    { nama: 'Dinas Pariwisata', link: 'https://pariwisata.lampungprov.go.id' },
    { nama: 'Dinas Pertanian', link: 'https://pertanian.lampungprov.go.id' },
    { nama: 'Dinas Perindustrian dan Perdagangan', link: 'https://disperindag.lampungprov.go.id' },
    { nama: 'Dinas Kelautan dan Perikanan', link: 'https://dkp.lampungprov.go.id' },
    { nama: 'Dinas Tenaga Kerja', link: 'https://disnaker.lampungprov.go.id' },
    { nama: 'Dinas Kependudukan dan Pencatatan Sipil', link: 'https://dukcapil.lampungprov.go.id' },
    { nama: 'Dinas Pemberdayaan Perempuan dan Perlindungan Anak', link: 'https://dp3a.lampungprov.go.id' },
    { nama: 'Dinas Pekerjaan Umum', link: 'https://pu.lampungprov.go.id' },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-6 rounded-lg shadow animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        PERANGKAT DAERAH LAINNYA
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={1600}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6 },
        }}
        className="pb-4"
      >
        {perangkatDaerahLainnya.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="px-2 h-full">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full h-[180px] bg-blue-800 text-white rounded-xl p-4 shadow-md
                  hover:shadow-xl hover:ring-2 hover:ring-yellow-400 hover:ring-offset-2 hover:ring-offset-blue-900
                  transition transform hover:-translate-y-1
                  flex flex-col justify-center items-center text-center
                "
              >
                <h3 className="font-bold text-base sm:text-lg leading-tight mb-2 break-words">
                  {item.nama}
                </h3>
                <p className="text-sm opacity-90">Klik untuk kunjungi situs</p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default PerangkatDaerahSlider;
