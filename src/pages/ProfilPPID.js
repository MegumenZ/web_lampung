import React from 'react';
import { motion } from 'framer-motion'; // Untuk animasi
import PageWithSidebar from '../components/PageWithSidebar'; // Mengimpor komponen PageWithSidebar

const ProfilPPID = () => {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto p-6 bg-[#f8fafc] rounded-lg shadow-lg space-y-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-yellow-300 mb-6">
          Profil PPID
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Undang Undang No 14 Tahun 2008 tentang Keterbukaan Informasi Publik (KIP) mengamanatkan, setiap Badan Publik Pemerintah maupun Badan Publik Non Pemerintah mempunyai kewajiban untuk menyediakan Informasi Publik yang berada di bawah kewenangannya kepada masyarakat dengan cepat, actual, tepat waktu, biaya ringan dan cara sederhana.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Sisi lain Undang Undang Keterbukaan Informasi Publik, menuntut kinerja Badan Publik yang transparan, efektif, efisien dan akuntabel. Oleh karena itu pelayanan informasi publik harus mendapat perhatian yang serius bagi kita semua sebagai Badan Publik penyedia informasi, dengan meningkatkan pengelolaan informasi yang berkualitas serta memberikan pelayanan dan menyediakan informasi publik yang mudah diakses oleh masyarakat.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Untuk tujuan inilah setiap Badan Publik wajib menunjuk Pejabat Pengelola Informasi dan Dokumentasi (PPID), yang tugas pokok dan fungsinya adalah bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan dan pelayanan informasi.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Di tingkat Provinsi Lampung, PPID ditetapkan dengan Surat Keputusan Gubernur Lampung dan untuk Badan Publik SKPD di lingkungan Pemerintah Provinsi Lampung sebagai PPID Pembantu/SKPD ditetapkan dengan surat Keputusan Kepala Badan Publik/SKPD.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Demikian di tingkat Kabupaten dan Kota di Provinsi Lampung, PPID Kabupaten/Kota ditetapkan dengan Surat Keputusan Bupati atau Walikota, sedangkan Badan Publik / SKPD di lingkungan Pemerintah Kabupaten atau Kota sebagai PPID Pembantu/SKPD ditetapkan dengan Surat Keputusan Kepala Badan Publik / SKPD.
        </p>
      </motion.div>
    </PageWithSidebar>
  );
};

export default ProfilPPID;
