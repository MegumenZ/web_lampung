import React, { useState } from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const images = [

  { src: '/contoh.png', alt: 'LAMPUNG, Salah satu mahasiswa ITERA sedang melakukan Kerja Lapangan' },
  { src: '/ini.jpg', alt: 'Gubernur Lampung dampingi Menteri Perhubungan dan Menteri Dalam Negeri Meninjau Pelabuhan Untuk Kesiapan Arus Mudik 2025' },
  { src: '/karl.jpg', alt: 'ROG Masterpiece' },
];

const Image = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img); // Menyimpan gambar yang dipilih
  };

  const closeModal = () => {
    setSelectedImage(null); // Menutup modal
  };

  // Fungsi untuk menangani klik di luar gambar untuk menutup modal
  const handleClickOutside = (e) => {
    if (e.target.id === "modalOverlay") {
      closeModal();
    }
  };

  return (
    <PageWithSidebar>
      <motion.div
        className="max-w-6xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">Gallery Images</h1>
          <p className="text-gray-300 mb-6 text-center">Album Provinsi Lampung</p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-yellow-200/30 bg-white transform transition duration-300 hover:scale-105"
                onClick={() => handleImageClick(img)} // Menangani klik gambar
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-60 object-cover cursor-pointer"
                />
                <div className="p-3 text-center text-gray-800 font-semibold">
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal untuk Gambar Besar */}
        {selectedImage && (
          <div
            id="modalOverlay"
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleClickOutside} // Menutup modal jika klik di luar gambar
          >
            <div className="relative">
              {/* Gambar yang Diperbesar */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain transition-transform transform scale-100 hover:scale-110"
              />
              {/* Deskripsi Gambar */}
              <div className="text-white mt-4 text-center font-semibold text-xl">{selectedImage.alt}</div>
            </div>
          </div>
        )}
      </motion.div>
    </PageWithSidebar>
  );
};

export default Image;
