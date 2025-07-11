import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const ipkd2019Data = [
  "Ringkasan Dokumen RKPD",
  "Kebijakan Umum Anggaran",
  "Ringkasan Dokumen Prioritas dan Plafon Anggaran",
  "Ringkasan Dokumen RKA SKPD",
  "Ringkasan Dokumen RKA PPKD",
  "Ringkasan Dokumen Rancangan Perda APBD",
  "Peraturan Daerah tentang APBD",
  "Peraturan Kepala Daerah tentang Penjabaran APBD",
  "Ringkasan DPA SKPD",
  "DPA PPKD",
  "Realisasi Pendapatan Daerah",
  "Realisasi Belanja Daerah",
  "Realisasi Pembiayaan Daerah",
  "Ringkasan Dokumen Perubahan APBD",
  "Peraturan Daerah tentang Perubahan APBD",
  "Peraturan Kepala Daerah tentang Penjabaran Perubahan APBD",
  "Ringkasan Perubahan RKA APBD",
  "Rencana Umum Pengadaan",
  "SK Kepala Daerah tentang Pejabat Pengelolaan Keuangan Daerah",
  "Peraturan Kepala Daerah tentang Kebijakan Akuntansi",
  "Laporan Arus Kas",
  "Laporan Realisasi Anggaran Seluruh SKPD",
  "Laporan Realisasi Anggaran PPKD",
  "Neraca",
  "CALK Pemerintah Daerah",
  "Laporan Keuangan BUMD/Perusahaan Daerah",
  "Laporan Akuntabilitas dan Kinerja Tahunan Pemerintah Daerah",
  "Penetapan Perda Pertanggungjawaban Pelaksanaan APBD",
  "Opini BPK RI"
];

const IPKD2019 = () => {
  return (
    <PageWithSidebar>
      <motion.div
        className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Judul dengan Animasi dan Gradasi */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-10"
        >
          INDEKS PENGELOLAAN KEUANGAN DAERAH TAHUN 2019
        </motion.h1>

        {/* Tabel Data IPKD 2019 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base border border-gray-600">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                <th className="px-4 py-3 border border-gray-600">NOMOR</th>
                <th className="px-4 py-3 border border-gray-600">JENIS INFORMASI</th>
                <th className="px-4 py-3 border border-gray-600">TAHUN</th>
                <th className="px-4 py-3 border border-gray-600">TAUTAN</th>
              </tr>
            </thead>
            <tbody>
              {ipkd2019Data.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}
                >
                  <td className="px-4 py-2 border border-gray-600 text-gray-300">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-600 text-gray-300">{item}</td>
                  <td className="px-4 py-2 border border-gray-600 text-gray-300">2019</td>
                  <td className="px-4 py-2 border border-gray-600">
                    <a
                      href="#"
                      className="text-yellow-400 hover:underline hover:text-yellow-300"
                    >
                      KLIK DISINI
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
};

export default IPKD2019;
