import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const RuangLingkup = () => {
  const scopeData = [
    {
      title: 'Pelayanan Publik',
      desc: 'Pengelolaan pelayanan dasar seperti kesehatan, pendidikan, dan kesejahteraan sosial. Peningkatan kualitas pelayanan masyarakat melalui program-program inovatif dan berbasis teknologi.',
    },
    {
      title: 'Infrastruktur dan Pembangunan Daerah',
      desc: 'Pembangunan infrastruktur seperti jalan, pelabuhan, dan tata ruang wilayah yang berkelanjutan.',
    },
    {
      title: 'Ekonomi dan Investasi',
      desc: 'Mendukung industri lokal, pariwisata, pertanian, perdagangan, serta menciptakan iklim investasi yang kondusif.',
    },
    {
      title: 'Keamanan dan Ketertiban',
      desc: 'Menjaga stabilitas keamanan dan ketertiban umum di daerah.',
    },
    {
      title: 'Lingkungan Hidup',
      desc: 'Pengelolaan sumber daya alam dan pelestarian lingkungan yang berkelanjutan.',
    },
    {
      title: 'Kebudayaan dan Pariwisata',
      desc: 'Melestarikan budaya lokal dan mengembangkan destinasi wisata.',
    },
    {
      title: 'Perencanaan dan Pengendalian Keuangan Daerah',
      desc: 'Mengelola APBD dengan prinsip transparansi dan akuntabilitas.',
    },
    {
      title: 'Kesejahteraan Sosial dan Penanggulangan Kemiskinan',
      desc: 'Program sosial untuk masyarakat kurang mampu dan respons terhadap bencana.',
    },
  ];

  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Section Header with Fade-in Animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-6"
        >
          Ruang Lingkup Pemerintah Provinsi Lampung
        </motion.h1>

        {/* Section Content with Fade-in Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="space-y-6"
        >
          {scopeData.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#374151] p-6 rounded-md shadow-lg hover:shadow-xl transition hover:scale-[1.01]"
            >
              <h2 className="text-yellow-500 dark:text-yellow-400 text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </PageWithSidebar>
  );
};

export default RuangLingkup;
