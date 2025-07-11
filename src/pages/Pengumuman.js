import React from 'react';
import { motion } from 'framer-motion';
import PageWithSidebar from '../components/PageWithSidebar';

const announcementData = [
  {
    id: 1,
    title: 'Pemberitahuan Libur Nasional',
    date: '10/07/2024',
    description: 'Diberitahukan kepada seluruh masyarakat bahwa pada tanggal 17 Agustus akan diliburkan dalam rangka Hari Kemerdekaan RI.',
    image: '/pengumuman1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Perubahan Jam Operasional',
    date: '05/07/2024',
    description: 'Jam operasional layanan publik diubah menjadi pukul 08.00 - 14.00 selama bulan Ramadhan.',
    image: '/pengumuman2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Pemadaman Listrik Terjadwal',
    date: '01/07/2024',
    description: 'PLN akan melakukan pemeliharaan jaringan listrik di wilayah Bandar Lampung pada tanggal 12 Juli 2024.',
    image: '/pengumuman3.jpg',
    link: '#',
  },
];

function Pengumuman() {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Daftar Pengumuman
        </motion.h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {announcementData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transform transition duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="flex items-start gap-4 p-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-900 dark:text-white hover:text-yellow-500"
                  >
                    {item.title}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Tanggal: {item.date}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-yellow-500 hover:text-yellow-600 font-semibold mt-3 inline-block"
                  >
                    Lihat Selengkapnya →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default Pengumuman;
