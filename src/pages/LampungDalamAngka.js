import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const LampungDalamAngka = () => {
  return (
    <PageWithSidebar>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
      >
        Lampung dalam Angka 2021
      </motion.h1>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Lampung dalam Angka 2021</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Provinsi Lampung Dalam Angka 2021 merupakan publikasi tahunan yang diterbitkan oleh BPS Provinsi Lampung...
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex justify-center mt-8"
      >
        <a
          href="https://drive.google.com/file/d/1BSSDzUDf24Dxq1QA18Dl9tk8_CWMzD4W/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg shadow-md transition duration-300"
        >
          Lihat Lampung Dalam Angka 2021
        </a>
      </motion.section>
    </PageWithSidebar>
  );
};

export default LampungDalamAngka;
