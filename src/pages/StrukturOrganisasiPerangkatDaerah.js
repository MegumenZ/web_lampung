import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

function StrukturOrganisasiPerangkatDaerah() {
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
            Struktur Organisasi Perangkat Daerah
          </h1>
          <p className="text-sm text-gray-300">
            Dokumen struktur organisasi perangkat daerah Pemerintah Provinsi Lampung.
          </p>
        </motion.div>

        {/* iFrame Section for the Document */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bg-white border border-gray-700 rounded-lg shadow p-4"
        >
          <iframe
            title="Struktur Organisasi Perangkat Daerah"
            src="https://drive.google.com/file/d/10nDHU5hqxO2coCga1Pk43uQc2TaGnVDo/preview"
            width="100%"
            height="600"
            allow="autoplay"
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default StrukturOrganisasiPerangkatDaerah;
