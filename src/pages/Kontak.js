import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Kontak() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative">
      <Sidebar />

      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-12">
        {/* Konten utama */}
        <div className="w-full md:w-3/4 space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-12 border border-gray-200 dark:border-gray-700 space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 animate_animated animate_fadeIn">
                Hubungi Kami
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Kami siap membantu Anda dengan pertanyaan atau informasi lebih lanjut. Hubungi kami kapan saja!
              </p>
            </div>

            {/* Informasi Kontak */}
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <FaMapMarkerAlt className="text-blue-500 text-4xl animate_animated animate_bounceIn" />,
                  title: 'Alamat',
                  desc: 'Jl. WR. Mongonsidi No.69, Teluk Betung',
                  link: 'https://www.google.com/maps?q=Jl.%20WR.%20Mongonsidi%20No.69,%20Teluk%20Betung'
                },
                {
                  icon: <FaEnvelope className="text-green-500 text-4xl animate_animated animate_bounceIn" />,
                  title: 'Email',
                  desc: 'info@lampungprov.go.id',
                  link: 'mailto:info@lampungprov.go.id'
                },
                {
                  icon: <FaPhone className="text-yellow-500 text-4xl animate_animated animate_bounceIn" />,
                  title: 'Telepon',
                  desc: '(0721) 475270',
                  link: 'tel:+62721475270'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mb-4 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 dark:bg-gray-700 shadow-xl transform hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                  {item.title === 'Alamat' ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800 transition-colors duration-200"
                    >
                      {item.desc}
                    </a>
                  ) : item.title === 'Email' ? (
                    <a
                      href={item.link}
                      className="text-sm text-green-600 dark:text-green-400 underline hover:text-green-800 transition-colors duration-200"
                    >
                      {item.desc}
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      className="text-sm text-yellow-600 dark:text-yellow-400 underline hover:text-yellow-800 transition-colors duration-200"
                    >
                      {item.desc}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-yellow-500 animate_animated animate_fadeInUp">
                Lokasi Kantor
              </h2>
              <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-600">
                <iframe
                  src="https://www.google.com/maps?q=Jl.%20WR.%20Mongonsidi%20No.69,%20Teluk%20Betung&output=embed"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                  title="Lokasi Kantor"
                ></iframe>
              </div>
            </div>

            {/* Form Kirim Pesan */}
            <div className="space-y-6 mt-12">
              <h2 className="text-3xl font-semibold text-gray-700 dark:text-white text-center animate_animated animate_fadeInUp">
                Kirim Pesan
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-600">
                <div className="space-y-6">
                  <div>
                    <label className="block font-medium mb-2">Nama Lengkap</label>
                    <input type="text" placeholder="Nama Anda" className="form-input w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Email</label>
                    <input type="email" placeholder="Email Anda" className="form-input w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Subyek</label>
                    <input type="text" placeholder="Judul Pesan" className="form-input w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Isi Pesan</label>
                    <textarea rows="6" placeholder="Tulis pesan Anda..." className="form-input w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"></textarea>
                  </div>
                  <div className="pt-4 flex gap-6 justify-end">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition-all duration-300">
                      Kirim Pesan
                    </button>
                    <button type="reset" className="bg-gray-300 hover:bg-gray-400 text-black dark:text-white font-semibold px-6 py-3 rounded-full shadow-xl transition-all duration-300">
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Sidebar kanan */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>
    </div>
  );
}

export default Kontak;