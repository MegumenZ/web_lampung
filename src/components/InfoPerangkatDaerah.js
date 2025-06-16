// src/components/InfoPerangkatDaerah.js
import React from 'react';

const dataPerangkat = [
  {
    nama: 'Dinas Pendidikan dan Kebudayaan',
    deskripsi: 'Mengelola urusan pendidikan dan kebudayaan di wilayah Provinsi Lampung.',
    ikon: '/roblox.png',
  },
  {
    nama: 'Dinas Kesehatan',
    deskripsi: 'Menyelenggarakan pelayanan kesehatan masyarakat secara menyeluruh.',
    ikon: '/roblox.png',
  },
  {
    nama: 'Dinas Perhubungan',
    deskripsi: 'Mengatur transportasi dan kelancaran lalu lintas di provinsi.',
    ikon: '/roblox.png',
  },
  {
    nama: 'Dinas Kominfo',
    deskripsi: 'Mengelola komunikasi, informasi, dan teknologi pemerintahan.',
    ikon: '/roblox.png',
  },
];

function InfoPerangkatDaerah() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-20 transition-all">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Info Perangkat Daerah
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {dataPerangkat.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={item.ikon}
              alt={item.nama}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {item.nama}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoPerangkatDaerah;
