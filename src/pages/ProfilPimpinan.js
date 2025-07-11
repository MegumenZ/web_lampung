import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const ProfilPimpinan = () => {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-8"
      >
        {/* Judul dengan animasi */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-10"
        >
          Profil Pimpinan Daerah
        </motion.h1>

        {/* Profil Gubernur dan Wakil Gubernur */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gubernur */}
          <div className="bg-[#374151] p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-center hover:scale-[1.01]">
            <img
              src="/gubernur.png"
              alt="Gubernur"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 hover:scale-105 transition duration-300"
            />
            <h2 className="text-lg font-bold text-yellow-300">Gubernur Lampung</h2>
            <p className="text-sm text-gray-300">RAHMAT MIRZANI DJAUSAL, S.T, M.M</p>

            <div className="mt-6 text-left space-y-4">
              <div>
                <h3 className="text-yellow-300 font-semibold">📍 Tempat & Tanggal Lahir</h3>
                <p className="text-gray-300">Tanjung Karang, 17 Juni 1956</p>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold">🎓 Pendidikan</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>S1 Pertanian, Universitas Lampung (1981)</li>
                  <li>Diklat PIM IV (1993), PIM III (1996), PIM II (2002)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold">🧑‍💼 Riwayat Jabatan</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 max-h-40 overflow-y-auto pr-2">
                  <li>Kepala Penyuluhan Pertanian Bandar Lampung (1986–1990)</li>
                  <li>Kepala Penyuluhan Pertanian Tanaman Pangan Provinsi (1990–1994)</li>
                  <li>Kepala Pengembangan Agribisnis (1994–1999)</li>
                  <li>Kepala Dinas Pertanian Metro (1999–2001)</li>
                  <li>Kepala Dinas Kehutanan Provinsi (2005–2010)</li>
                  <li>Asisten Pembangunan, Kesejahteraan, Pemerintahan, dan Sekda (2010–2016)</li>
                  <li>Gubernur Lampung (2019–sekarang)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold">🌐 Riwayat Organisasi</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 max-h-32 overflow-y-auto pr-2">
                  <li>Ketua Senat Mahasiswa Unila (1978–1980)</li>
                  <li>Ketua HMI Lampung (1981–1982)</li>
                  <li>Wakil Ketua HIPMI & KNPI Lampung</li>
                  <li>Sekjen PII Lampung (1992–2015)</li>
                  <li>Ketua DPD Golkar Lampung (2017–sekarang)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wakil Gubernur */}
          <div className="bg-[#374151] p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-center hover:scale-[1.01]">
            <img
              src="/wakil.png"
              alt="Wakil Gubernur"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 hover:scale-105 transition duration-300"
            />
            <h2 className="text-lg font-bold text-yellow-300">Wakil Gubernur</h2>
            <p className="text-sm text-gray-300">dr. JIHAN NURLELA, M.M.</p>

            <div className="mt-6 text-left space-y-4">
              <div>
                <h3 className="text-yellow-300 font-semibold">📍 Tempat & Tanggal Lahir</h3>
                <p className="text-gray-300">Lampung Timur, 12 Juli 1982</p>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold">🎓 Pendidikan</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>SDN 2 Sumber Rejo, SMPN 3 Jabung, SMAN Mayong</li>
                  <li>S1 Syariah IAIN Walisongo, S1 Hukum (Saburai)</li>
                  <li>S2 Politik (Universitas Nasional), S2 Notariat (UI)</li>
                  <li>S3 Ilmu Sosial dan Sastra (University of Malaya)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-yellow-300 font-semibold">🧑‍💼 Riwayat Organisasi</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 max-h-40 overflow-y-auto pr-2">
                  <li>Ketua DPW PKB Lampung (2021–2026)</li>
                  <li>Sekjen Bariknas (2014–2019)</li>
                  <li>Bendahara Sarbumusi (2013–2018)</li>
                  <li>Sekjen dan Wasekjen DPP PKB (2009–2014)</li>
                  <li>Pengurus PB PMII, DPM IAIN, FKAMS, dll.</li>
                  <li>Ketua Kwarda Pramuka Lampung (2020–2025)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
};

export default ProfilPimpinan;
