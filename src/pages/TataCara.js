import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

function TataCara() {
  return (
    <PageWithSidebar>
      <motion.div
        className="max-w-5xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#1f2937] border border-yellow-400 p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-4">
            Tata Cara Pengaduan Penyalahgunaan Wewenang
          </h1>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Dalam rangka membangun kepercayaan publik terhadap pelayanan publik yang diselenggarakan Pemerintah Provinsi Lampung, perlu dilakukan penataan pelayanan diantaranya membangun fasilitas kepada publik, serta peningkatan kinerja. Masyarakat dapat menyampaikan laporan langsung apabila ada keluhan terhadap penyalahgunaan wewenang terhadap semua tindakan pejabat publik dalam menjalankan tugas dan fungsinya.
          </p>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base mt-4">
            Berikut kontak yang bisa Anda hubungi jika terdapat penyalahgunaan wewenang pejabat publik di Lingkungan Pemerintah Provinsi Lampung:
          </p>

          {/* Kontak dengan ikon + hover */}
          <div className="text-sm md:text-base text-gray-200 space-y-3 mt-6">
            <p className="flex items-start gap-3 group">
              <FaMapMarkerAlt className="mt-1 text-yellow-400 group-hover:drop-shadow-[0_0_4px_#facc15]" />
              <span>
                <strong>Alamat:</strong> Jl. Wolter Monginsidi No. 69 Telukbetung Bandar Lampung 35215
              </span>
            </p>
            <p className="flex items-start gap-3 group">
              <FaEnvelope className="mt-1 text-yellow-400 group-hover:drop-shadow-[0_0_4px_#facc15]" />
              <span>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@lampungprov.go.id" className="text-blue-400 underline">
                  info@lampungprov.go.id
                </a>
              </span>
            </p>
            <p className="flex items-start gap-3 group">
              <FaPhone className="mt-1 text-yellow-400 group-hover:drop-shadow-[0_0_4px_#facc15]" />
              <span>
                <strong>Telepon:</strong> (0721) 475270
              </span>
            </p>
            <p className="flex items-start gap-3 group">
              <FaWhatsapp className="mt-1 text-yellow-400 group-hover:drop-shadow-[0_0_4px_#facc15]" />
              <span>
                <strong>Call Center:</strong>{' '}
                <a href="tel:+628117905000" className="text-blue-400 underline">
                  +62 811-7905-000
                </a>
              </span>
            </p>
          </div>

          {/* Kanal Pengaduan */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-white mb-3">Kanal Pengaduan SP4N-LAPOR:</h2>
            <a
              href="https://lampung.lapor.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded transition"
            >
              Kunjungi Situs LAPOR
            </a>
          </div>

          {/* Gambar interaktif */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="tel:+628117905000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block transition"
            >
              <img
                src="1.png"
                alt="Call Center"
                className="rounded-lg shadow w-full max-h-[200px] object-contain"
              />
            </motion.a>

            <motion.a
              href="https://lampung.lapor.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block transition"
            >
              <img
                src="2.png"
                alt="Lapor"
                className="rounded-lg shadow w-full max-h-[200px] object-contain"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default TataCara;
