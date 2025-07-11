import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar'; // Mengimpor komponen PageWithSidebar
import { motion } from 'framer-motion'; // Untuk animasi

const TransparansiPerizinan = () => {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        {/* Teks Judul dengan Efek Gradasi */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-6"
        >
          Transparansi Perizinan
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center"
        >
          Berikut transparansi perizinan:
        </motion.p>

        {/* Daftar Button */}
        <div className="space-y-4">
          <a
            href="https://drive.google.com/file/d/1LLC-pLeRl0HZu3W2geN-NeXCpF2FNH3D/view"
            className="bg-blue-500 text-white p-3 rounded-lg text-center w-full block hover:bg-blue-600 transition duration-200"
          >
            Rekap Perizinan
          </a>

          <a
            href="https://drive.google.com/file/d/1LoS0vGNJzKtxVKTyblGrmHx592novj-I/view"
            className="bg-blue-500 text-white p-3 rounded-lg text-center w-full block hover:bg-blue-600 transition duration-200"
          >
            Laporan Tahunan Penerbitan Perizinan Berusaha
          </a>

          <p className="text-gray-800 dark:text-gray-400">Persyaratan izin secara manual dapat dilihat link dibawah ini:</p>

          <a
            href="https://drive.google.com/file/d/1LrHmLU14laY3DH-GfCW8MXtkXcD5VHtw/view"
            className="bg-blue-500 text-white p-3 rounded-lg text-center w-full block hover:bg-blue-600 transition duration-200"
          >
            Buku Informasi Persyaratan Non OSS
          </a>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
};

export default TransparansiPerizinan;
