import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

function ProfilKepalaOpd() {
  const dataOPD = [
    { no: 1, nama: 'Inspektorat Lampung', link: 'https://inspektorat.lampungprov.go.id/pegawai/all' },
    { no: 2, nama: 'Badan Perencanaan Daerah', link: 'https://bappeda.lampungprov.go.id/pages/profile-kepala-bappeda' },
    { no: 3, nama: 'Sekretariat DPRD', link: 'https://setwan-dprd.lampungprov.go.id/pages/ketua-dprd' },
    { no: 4, nama: 'Badan Pengelolaan Keuangan dan Aset Daerah', link: 'https://bpkad.lampungprov.go.id/profile-pejabat' },
    { no: 5, nama: 'Badan Pendapatan Daerah', link: '' },
    { no: 6, nama: 'Badan Kepegawaian Daerah', link: '' },
    { no: 7, nama: 'Badan Pengembangan SDM Daerah', link: 'https://bpsdm.lampungprov.go.id/pegawai/all' },
    { no: 8, nama: 'Badan Penanggulangan Bencana Daerah', link: '' },
    { no: 9, nama: 'Badan Pendidikan dan Kebudayaan', link: '' },
    { no: 10, nama: 'Dinas Pemuda dan Olahraga', link: 'https://dispora.lampungprov.go.id/pegawai/all' },
    { no: 11, nama: 'Dinas Kesehatan', link: 'https://dinkes.lampungprov.go.id/profil-pejabat-dinas-kesehatan-provinsi-lampung-update-agustus-2016/' },
    { no: 12, nama: 'Dinas Sosial', link: 'https://dinsos.lampungprov.go.id/pegawai/all' },
    { no: 13, nama: 'Dinas Perhubungan', link: 'https://dishub.lampungprov.go.id/pegawai/all' },
    { no: 14, nama: 'Dinas Perkebunan', link: '' },
    { no: 15, nama: 'Dinas Kehutanan', link: 'https://dishut.lampungprov.go.id/pages/kepala-dinas' },
    { no: 16, nama: 'Dinas Bina Marga dan Bina Konstruksi', link: '' },
    { no: 17, nama: 'Dinas Perindustrian dan Perdagangan', link: 'https://disperindag.lampungprov.go.id/pages/profile-kepala' },
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
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-6"
          >
            Profil Kepala OPD
          </motion.h1>

          {/* Table Data Kepala OPD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="overflow-x-auto rounded-lg shadow"
          >
            <table className="w-full table-auto border border-gray-700 text-sm md:text-base">
              <thead className="bg-[#2e3b4e] text-white sticky top-0 z-10">
                <tr>
                  <th className="border px-4 py-2 text-left">No</th>
                  <th className="border px-4 py-2 text-left">Perangkat Daerah Provinsi Lampung</th>
                  <th className="border px-4 py-2 text-left">Link Data Profil Kepala Dinas/Pegawai</th>
                </tr>
              </thead>
              <tbody>
                {dataOPD.map((item) => (
                  <tr
                    key={item.no}
                    className="bg-white dark:bg-[#374151] hover:bg-[#f1f5f9] dark:hover:bg-[#4b5563] transition duration-200"
                  >
                    <td className="border px-4 py-2">{item.no}</td>
                    <td className="border px-4 py-2">{item.nama}</td>
                    <td className="border px-4 py-2">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline break-all"
                        >
                          {item.link}
                        </a>
                      ) : (
                        <span className="italic text-gray-400">Belum ada</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default ProfilKepalaOpd;
