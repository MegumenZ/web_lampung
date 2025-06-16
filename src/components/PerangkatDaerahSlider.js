import React, { useRef } from 'react';

function PerangkatDaerahSlider() {
  const sliderRef = useRef(null);

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
    { nama: 'Dinas Pekerjaan Umum', link: 'https://pu.lampungprov.go.id' }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-6 rounded-lg shadow relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">PERANGKAT DAERAH LAINNYA</h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 py-2 px-1 snap-x scroll-smooth"
      >
        {perangkatDaerahLainnya.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[250px] bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white rounded-lg p-5 shadow hover:shadow-md transition transform hover:-translate-y-1 text-center flex-shrink-0 snap-center"
          >
            <h3 className="font-bold text-lg mb-1">{item.nama}</h3>
            <p className="text-sm">Klik untuk kunjungi situs</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default PerangkatDaerahSlider;
