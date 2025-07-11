import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

function Kanal() {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="bg-[#1f2937] border border-yellow-400 p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-yellow-400 mb-2">
            Kanal Regulasi KIP
          </h1>
          <p className="text-sm text-gray-300">
            Peraturan Mengenai Pelayanan Informasi Publik
          </p>

          <a
            href="https://ppid.lampungprov.go.id/page/Peraturan-mengenai-Pelayanan-Informasi-Publik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded transition"
          >
            KLIK LINK BERIKUT
          </a>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default Kanal;
