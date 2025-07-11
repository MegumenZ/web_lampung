import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageWithSidebar from '../components/PageWithSidebar';

const InformasiKeuangan = () => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const tahun2023 = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <a href="https://drive.google.com/file/d/1gDaXuGQwf00LAEcC0xSz3vDuiotiuDqG/view?usp=drivesdk" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        LKPD Provinsi Lampung
      </a>
      <a href="https://drive.google.com/file/d/1AeiiOM_gnJTPKJp3Cx0OZf8uf4amuISt/view?usp=drivesdk" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        LKPD BPKAD
      </a>
      <a href="https://drive.google.com/file/d/1ufn02ObX0fHeCG-OCzTK8bbn4iEL0Bp8/view?usp=drivesdk" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        LRA Provinsi Lampung
      </a>
      <a href="https://drive.google.com/file/d/1vv1VTXAxEBXO2JSZpj_2JAzJaMG6Wans/view?usp=drivesdk" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        LRA BPKAD
      </a>
      <a href="#" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        LAKIP BPKAD
      </a>
      <a href="#" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Neraca Provinsi Lampung
      </a>
      <a href="#" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        CALK Provinsi Lampung
      </a>
      <a href="#" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        LHKPN
      </a>
    </div>
  );

  const tahun2024 = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <a href="https://drive.google.com/file/d/1eSLna0zpbo3I-E8qVvnKB8N2uV-yiZke/view?usp=sharing" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Ringkasan RKA SKPD Provinsi Lampung
      </a>
      <a href="https://drive.google.com/file/d/1xZJrVCx7fvDTJTkYcWMqWinrzfAJ2J6k/view" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Ringkasan RKA PPKD
      </a>
      <a href="https://drive.google.com/file/d/12Yt69_Z8d-Ze0pNw6tme6rMpUlJOsvxL/view" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Ringkasan DPA SKPD Provinsi Lampung
      </a>
      <a href="https://drive.google.com/file/d/1Lx8EDBln0lweDf0Q5DcrxcIHSRmZAUSH/view" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Ringkasan DPA BPKAD
      </a>
      <a href="https://drive.google.com/file/d/1h5_Dvadc8T65fiLFCF0RQLQGX3bmzKUB/view" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Ringkasan Program dan Kegiatan BPKAD
      </a>
      <a href="https://drive.google.com/file/d/1Mp1ABNjqmhzQVZMp4FxhSGJSEg2h-kbI/view" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Target Capaian dan Capaian Program Kegiatan
      </a>
      <a href="https://drive.google.com/file/d/1QpBqWyoxfnv73ZGjbuVlS4WJr6FbmCtf/view" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        KUA-PPAS
      </a>
      <a href="#" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        SOP
      </a>
      <a href="#" className="bg-blue-500 text-white p-3 rounded-lg text-center">
        Informasi Rencana Aksi 2024(Capaian Kerja)
      </a>
    </div>
  );

  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-6"
        >
          Informasi Keuangan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center"
        >
          Pilih Tahun untuk melihat informasi keuangan
        </motion.p>

        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={() => handleYearChange('2023')}
            className={`px-6 py-2 rounded-lg ${selectedYear === '2023' ? 'bg-yellow-500' : 'bg-gray-300'} hover:bg-yellow-400 transition duration-200`}
          >
            Tahun 2023
          </button>
          <button
            onClick={() => handleYearChange('2024')}
            className={`px-6 py-2 rounded-lg ${selectedYear === '2024' ? 'bg-yellow-500' : 'bg-gray-300'} hover:bg-yellow-400 transition duration-200`}
          >
            Tahun 2024
          </button>
        </div>

        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {selectedYear === '2023' ? tahun2023 : tahun2024}
        </motion.div>
      </motion.div>
    </PageWithSidebar>
  );
};

export default InformasiKeuangan;
