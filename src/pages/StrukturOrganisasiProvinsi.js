import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

function StrukturOrganisasiProvinsi() {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          className="bg-[#374151] p-6 rounded-xl shadow-md"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-2">
            Struktur Organisasi Provinsi Lampung
          </h1>
          <p className="text-sm text-gray-300">
            Bagan resmi kelembagaan tingkat provinsi.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="overflow-auto rounded-lg shadow-lg border border-gray-700 bg-white p-4"
        >
          <img
            src="/struktur.jpg"
            alt="Struktur Organisasi Provinsi Lampung"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default StrukturOrganisasiProvinsi;
