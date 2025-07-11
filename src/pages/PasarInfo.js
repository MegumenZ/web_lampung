import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MapPinIcon } from '@heroicons/react/24/solid';
import 'swiper/css';

const pasarData = {
  'pasar-pasir-gintung': {
    nama: 'Pasar Pasir Gintung',
    lokasiRingkas: 'Bandar Lampung',
    lokasiDetail: 'Jalan Imam Bonjol, Tanjung Karang Pusat, Bandar Lampung',
    gambar: '/img/pasargitung.jpg',
    deskripsi: 'Pasar ini kini menggabungkan elemen pasar tradisional dan modern dengan fasilitas seperti basement parkir dan area musala. Pasar Pasir Gintung menawarkan berbagai produk seperti sayuran segar, daging, ikan, pakaian, dan peralatan rumah tangga.',
    sejarah: 'Pasar Pasir Gintung merupakan salah satu pasar terbesar dan tertua di Bandar Lampung. Didirikan sejak tahun 1960-an, pasar ini menjadi tempat utama bagi pedagang dan pembeli untuk mencari berbagai barang kebutuhan pokok. Pada tahun 2024, pasar ini mengalami revitalisasi besar-besaran yang merubah desain fisiknya menjadi lebih modern, meskipun masih mempertahankan karakteristik pasar tradisional.',
    maps: 'https://maps.app.goo.gl/k3UYaoHG6oyBWgpR9'
  },
  'pasar-panjang': { 
    nama: 'Pasar Panjang',
    lokasiRingkas: 'Bandar Lampung',
    lokasiDetail: 'Jalan Pasar Panjang, Bandar Lampung',
    gambar: '/img/pasarpanjang.jpg',
    deskripsi: 'Pasar Panjang adalah pasar yang ramai di pusat kota Bandar Lampung, terkenal dengan pedagang ikan dan daging segar. Pasar ini menawarkan berbagai jenis komoditas mulai dari kebutuhan pokok hingga barang-barang kebutuhan sehari-hari.',
    sejarah: 'Pasar Panjang telah ada sejak tahun 1970-an dan menjadi salah satu pasar terbesar di Bandar Lampung. Seiring berjalannya waktu, pasar ini terus berkembang menjadi pusat perdagangan yang vital bagi masyarakat sekitar.',
    maps: 'https://maps.app.goo.gl/uZSw21vKCRoEBXrr8'  
  },
  'pasar-way-halim': { 
    nama: 'Pasar Way Halim',
    lokasiRingkas: 'Bandar Lampung',
    lokasiDetail: 'Jalan Way Halim, Bandar Lampung',
    gambar: '/img/pasarwayhalim.jpg',
    deskripsi: 'Pasar Way Halim merupakan pasar modern dengan berbagai fasilitas lengkap. Pasar ini melayani kebutuhan pokok sehari-hari seperti sayuran, buah-buahan, daging, dan kebutuhan lainnya.',
    sejarah: 'Pasar Way Halim dibangun pada tahun 1980-an dan menjadi salah satu pasar utama di kawasan Way Halim, Bandar Lampung. Kini, pasar ini terus berkembang dengan berbagai fasilitas yang mendukung kenyamanan pengunjung.',
    maps: 'https://maps.app.goo.gl/UmDpaH2wrugNuc9Y7' 
  },
  'pasar-way-kandis': { 
    nama: 'Pasar Way Kandis',
    lokasiRingkas: 'Bandar Lampung',
    lokasiDetail: 'Jalan Way Kandis, Bandar Lampung',
    gambar: '/img/pasarwaykandis.jpg',
    deskripsi: 'Pasar Way Kandis adalah pasar tradisional yang terletak di pinggiran kota Bandar Lampung. Pasar ini terkenal dengan berbagai barang kebutuhan pokok dan produk lokal.',
    sejarah: 'Pasar Way Kandis telah ada sejak tahun 1990-an dan menjadi pusat ekonomi di daerah tersebut. Meskipun tradisional, pasar ini terus berkembang dengan penambahan berbagai fasilitas baru.',
    maps: 'https://maps.app.goo.gl/52FvtMxj3kBqRpw86' 
  },
  'pasar-tamin': { 
    nama: 'Pasar Tamin',
    lokasiRingkas: 'Lampung Selatan',
    lokasiDetail: 'Jalan Pasar Tamin, Lampung Selatan',
    gambar: '/img/pasartamin.jpg',
    deskripsi: 'Pasar Tamin adalah pasar yang melayani kebutuhan pokok masyarakat di Lampung Selatan. Pasar ini terkenal dengan harga yang terjangkau dan berbagai produk lokal yang segar.',
    sejarah: 'Pasar Tamin berdiri sejak tahun 1995 dan menjadi salah satu pasar penting di Lampung Selatan. Pasar ini menjadi tempat utama bagi pedagang lokal dan pembeli untuk bertransaksi.',
    maps: 'https://maps.app.goo.gl/duMWAJ33uZz16agm7' 
  },
};

const komoditas = [
  { nama: 'Cabai Merah', gambar: '/cabai.jpg' },         
  { nama: 'Bawang Merah', gambar: '/bawangmerah.jpg' },   
  { nama: 'Bawang Putih', gambar: '/bawangputih.jpeg' },  
  { nama: 'Telur Ayam', gambar: '/telur.png' },          
  { nama: 'Minyak Goreng', gambar: '/minyak.jpg' },       
  { nama: 'Gula Pasir', gambar: '/gula.jpg' },            
  { nama: 'Daging Ayam', gambar: '/dagingayam.jpeg' },    
  { nama: 'Daging Sapi', gambar: '/dagingsapi.jpg' },    
  { nama: 'Ikan Segar', gambar: '/ikan.jpeg' },           
  { nama: 'Tomat', gambar: '/tomat.jpg' }                 
];

function PasarInfo() {
  const { slug } = useParams();
  const pasar = pasarData[slug];
  const swiperRef = useRef(null);

  if (!pasar) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold">Pasar tidak ditemukan</h2>
        <Link to="/harga-pasar" className="mt-4 inline-block text-yellow-400 underline">⬅ Kembali</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-12">
        <main className="w-full md:w-3/4 space-y-10">
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <img src={pasar.gambar} alt={pasar.nama} className="w-full h-72 object-cover brightness-75" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">{pasar.nama}</h1>
                <p className="mt-2 text-gray-300 text-sm font-medium">{pasar.lokasiRingkas}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1e293b] rounded-xl shadow-md p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Tentang Pasar</h2>
              <p className="text-gray-300 text-sm">{pasar.deskripsi}</p>
              <div className="mt-4 text-sm text-gray-400">
                <strong>Alamat Lengkap:</strong> {pasar.lokasiDetail}
              </div>
            </div>
            <div className="bg-[#1e293b] rounded-xl shadow-md p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Sejarah Pasar</h2>
              <p className="text-gray-300 text-sm">{pasar.sejarah}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Komoditas Sering Naik Harga</h2>
            <div className="relative">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={500}
                spaceBetween={16}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  640: { slidesPerView: 4 },
                  768: { slidesPerView: 5 },
                  1024: { slidesPerView: 6 }
                }}
              >
                {komoditas.map((item, index) => (
                  <SwiperSlide key={index} className="flex flex-col items-center text-center">
                    <div className="group transition-transform hover:scale-105">
                      <img
                        src={item.gambar}
                        alt={item.nama}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-yellow-400 shadow mb-2 group-hover:scale-110 transition"
                      />
                      <p className="text-sm text-white group-hover:text-yellow-400">{item.nama}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -left-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-yellow-400 text-white rounded-full z-10"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 -right-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-yellow-400 text-white rounded-full z-10"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-xl shadow-md border border-gray-700 p-6 flex items-start gap-4">
            <div className="bg-yellow-400 rounded-full p-2">
              <MapPinIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-yellow-400 mb-1">Lokasi Pasar</h2>
              <p className="text-sm text-gray-300">{pasar.lokasiDetail}</p>
              <a
                href={pasar.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-yellow-400 hover:text-yellow-300 transition"
              >
                📍 Buka di Google Maps →
              </a>
            </div>
          </div>

          {/* Tombol Navigasi Bawah */}
          <div className="pt-10 flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
            <Link
              to="/harga-pasar"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow transition w-full sm:w-auto"
            >
              ⬅ Kembali ke Daftar Pasar
            </Link>
            <Link
              to="/harga-komoditas"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition w-full sm:w-auto"
            >
              📊 Lihat Harga Komoditas
            </Link>
          </div>
        </main>

        {/* Sidebar Kanan */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>
    </div>
  );
}

export default PasarInfo;
