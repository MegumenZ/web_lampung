
import React, { useState } from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const dataKeuangan = [
  {
    kategori: 'Transparansi Keuangan',
    judul: 'Pergub Penjabaran APBD 2025',
    tanggal: '20/01/2025',
    file: 'https://lampungprov.go.id/uploads//files/1/BATANG%20TUBUH%20PERGUB%20PENJABARAN%20APBD%202025_compressed%20(1).pdf',
  },
  {
    kategori: 'Transparansi Keuangan',
    judul: 'Perda APBD Tahun 2025',
    tanggal: '20/01/2025',
    file: 'https://lampungprov.go.id/uploads//files/1/BATANG%20TUBUH%20PERDA%20APBD%202025.pdf',
  },
  {
    kategori: 'Transparansi Keuangan',
    judul: 'Perda No. 3 Tahun 2023 tentang LKPJ 2022',
    tanggal: '17/10/2024',
    file: 'https://lampungprov.go.id/uploads//files/1/Perda%20No%203%20th%202023%20ttg%20lkpj%202022_compressed.pdf',
  },
  {
    kategori: 'Transparansi Keuangan',
    judul: 'Dokumen RKPD 2023',
    tanggal: '13/09/2023',
    file: 'https://lampungprov.go.id/uploads//files/1/Buku%202%20RKPD%202023%20fix_compressed_compressed.pdf',
  },
  {
    kategori: 'Transparansi Keuangan',
    judul: 'Laporan Realisasi Semester 1 Tahun 2023',
    tanggal: '25/08/2023',
    file: 'https://example.com/laporan-realisasi-2023.pdf',
  },
  {
    kategori: 'Transparansi Keuangan',
    judul: 'RAPBD Tahun 2024',
    tanggal: '10/07/2023',
    file: 'https://example.com/rapbd-2024.pdf',
  },
  {
    kategori: 'Transparansi Keuangan',
    judul: 'RKPD 2024 Draft',
    tanggal: '01/06/2023',
    file: 'https://example.com/rkpd-2024.pdf',
  },
  {
    kategori: 'Transparansi Keuangan',
    judul: 'Perubahan APBD 2023',
    tanggal: '15/05/2023',
    file: 'https://example.com/perubahan-apbd-2023.pdf',
  },
];

function TransparansiKeuangan() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dataKeuangan.length / itemsPerPage);
  const paginatedData = dataKeuangan.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-6"
        >
          Transparansi Keuangan
        </motion.h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-700 text-left text-white">
                <th className="py-4 px-4 font-semibold">No</th>
                <th className="py-4 px-4 font-semibold">Kategori</th>
                <th className="py-4 px-4 font-semibold">Judul</th>
                <th className="py-4 px-4 font-semibold">Tanggal Upload</th>
                <th className="py-4 px-4 font-semibold">File</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, idx) => {
                const isSelected = selectedRow === idx;
                return (
                  <motion.tr
                    key={idx}
                    onClick={() => setSelectedRow(selectedRow === idx ? null : idx)}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`border-b border-gray-600 transition duration-200 cursor-pointer ${
                      isSelected ? 'bg-yellow-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <td className="py-3 px-4">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                    <td className="py-3 px-4">{row.kategori}</td>
                    <td className="py-3 px-4">{row.judul}</td>
                    <td className="py-3 px-4">{row.tanggal}</td>
                    <td className="py-3 px-4">
                      <a
                        href={row.file}
                        className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium shadow-md transition"
                        download
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                          />
                        </svg>
                        Download
                      </a>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4 text-sm text-gray-300">
          <div className="font-bold">
            Menampilkan {(currentPage - 1) * itemsPerPage + 1} sampai{' '}
            {Math.min(currentPage * itemsPerPage, dataKeuangan.length)} dari{' '}
            {dataKeuangan.length} entri
          </div>
          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }`}
            >
              Previous
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default TransparansiKeuangan;
