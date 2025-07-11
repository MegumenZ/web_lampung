import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

function LHKPN() {
  const dataLHKPN = [
    {
      jabatan: 'Pj. Gubernur',
      tahun: [
        {
          label: 'TAHUN 2023',
          link: 'https://drive.google.com/file/d/105xLtmMggptLyNPI2CyCEG2oIbkgfKcu/view',
        },
      ],
    },
    {
      jabatan: 'Sekretaris Daerah',
      tahun: [
        { label: 'TAHUN 2022', link: '#' },
        {
          label: 'TAHUN 2023',
          link: 'https://drive.google.com/file/d/1-yLx4prbSxR9bDgriIkC558P00TT3Awb/view',
        },
      ],
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
        <div className="bg-white dark:bg-[#1e293b] p-8 rounded-lg shadow-lg space-y-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-6">
            Laporan Harta Kekayaan Pejabat Negara
          </h1>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
            Berikut Laporan Harta Kekayaan Pejabat Negara Pemprov Lampung
          </p>

          {dataLHKPN.map((item, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] dark:bg-[#374151] p-6 rounded-lg shadow hover:shadow-lg transition duration-300 hover:scale-[1.01]"
            >
              <h2 className="text-xl font-semibold text-[#374151] dark:text-white mb-4 uppercase">
                {index + 1}. {item.jabatan}
              </h2>
              <div className="flex flex-wrap gap-4">
                {item.tahun.map((t, idx) => (
                  <a
                    key={idx}
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-500 hover:text-[#1e293b] dark:hover:text-[#f5f5f5] transition duration-300 hover:scale-105"
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default LHKPN;
