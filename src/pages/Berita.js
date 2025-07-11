import React from 'react';
import { motion } from 'framer-motion';
import PageWithSidebar from '../components/PageWithSidebar';


const newsData = [
  {
    id: 1,
    title: 'Lampung Targetkan Kenaikan Nilai IDI, Pj. Sekda Dorong Kolaborasi Seluruh Elemen',
    date: '31/05/2024',
    description: 'Diskusi tentang Indeks Demokrasi Indonesia (IDI) dan kolaborasi sektor...',
    image: '/berita1.jpg',
    link: 'https://ppid.lampungprov.go.id/detail-post/Lampung-Targetkan-Kenaikan-Nilai-IDI-Pj-Sekda-Dorong-Kolaborasi-Seluruh-Elemen',
  },
  {
    id: 2,
    title: 'Pelantikan Bupati Way Kanan',
    date: '31/05/2024',
    description: 'Pelantikan Bupati Way Kanan dan senyum kematian yang menarik perhatian...',
    image: '/berita2.jpeg',
    link: 'https://www.tribunnews.com/regional/2025/06/11/sosok-ayu-asalasiyah-kini-resmi-jabat-bupati-way-kanan-lampung-pengganti-ali-rahman#google_vignette',
  },
  {
    id: 3,
    title: 'Gubernur Lampung Resmikan Jalan Tol Baru',
    date: '30/05/2024',
    description: 'Peresmian jalan tol baru di Lampung untuk mempercepat konektivitas...',
    image: '/berita3.jpg',
    link: 'https://www.ayobandung.com/umum/7914915798/masyarakat-lampung-bersuka-cita-jalan-tol-baru-rp440-triliun-segera-dibangun-di-era-rahmat-mirzani-djausal-ini-namanya',
  },

  {
    id: 4,
    title: 'Pemprov Lampung Gelar Festival Budaya',
    date: '29/05/2024',
    description: 'Festival budaya Lampung disambut meriah oleh masyarakat...',
    image: '/berita7.jpg',
    link: 'https://gerbangpatriot.com/2025/06/20/pemprov-lampung-gelar-pesenggiri-culture-event-2025-wujud-nyata-pelestarian-budaya-lokal/',
  },
  {
    id: 5,
    title: 'Lampung Raih Penghargaan Nasional Inovasi Daerah',
    date: '28/05/2024',
    description: 'Penghargaan diberikan atas inovasi pelayanan publik...',
    image: '/berita8.jpg',
    link: 'https://lampung.nu.or.id/pemerintahan/raih-penghargaan-inovasi-jadi-landasan-perbaikan-pelayanan-publik-bagi-pemerintah-provinsi-lampung-1plrF',
  },
  {
    id: 6,
    title: 'Pemprov Lampung Fokus Tingkatkan UMKM',
    date: '27/05/2024',
    description: 'Program pengembangan UMKM untuk mendorong ekonomi daerah...',
    image: '/berita6.jpg',
    link: 'https://disperindag.lampungprov.go.id/detail-post/dialog-lampung-menyapa-sinergi-pemprov-lampung-dukung-umkm-berdaya-saing-global',
  },
  {
    id: 7,
    title: 'Lampung Luncurkan Aplikasi Layanan Publik Digital',
    date: '26/05/2024',
    description: 'Aplikasi mempermudah akses masyarakat ke layanan publik...',
    image: '/berita7.jpg',
    link: 'https://www.lampungprov.go.id/berita7',
  },
  {
    id: 8,
    title: 'Pemprov Lampung Dorong Pariwisata Berkelanjutan',
    date: '25/05/2024',
    description: 'Program wisata hijau diperkuat di berbagai destinasi...',
    image: '/berita8.jpg',
    link: 'https://www.lampungprov.go.id/berita8',
  },
  {
    id: 9,
    title: 'Pemprov Lampung Sosialisasikan Program Smart City',
    date: '24/05/2024',
    description: 'Transformasi digital untuk tata kelola pemerintahan...',
    image: '/berita9.jpg',
    link: 'https://www.lampungprov.go.id/berita9',
  },
  {
    id: 10,
    title: 'Gubernur Lampung Tinjau Pembangunan Rumah Sakit',
    date: '23/05/2024',
    description: 'Proyek rumah sakit baru untuk meningkatkan layanan kesehatan...',
    image: '/berita10.jpg',
    link: 'https://www.lampungprov.go.id/berita10',
  },
  {
    id: 11,
    title: 'Pemprov Lampung Terapkan Inovasi Teknologi untuk Pendidikan',
    date: '22/05/2024',
    description: 'Inovasi di bidang pendidikan untuk meningkatkan kualitas belajar...',
    image: '/berita11.jpg',
    link: 'https://www.lampungprov.go.id/berita11',
  },
  {
    id: 12,
    title: 'Lampung Luncurkan Program Bantuan Sosial Berbasis Data',
    date: '21/05/2024',
    description: 'Pemerintah Provinsi Lampung luncurkan bantuan sosial berbasis teknologi...',
    image: '/berita12.jpg',
    link: 'https://www.lampungprov.go.id/berita12',
  },
  {
    id: 13,
    title: 'Gubernur Lampung Resmikan Pusat Inovasi UMKM',
    date: '20/05/2024',
    description: 'Pusat inovasi untuk mendukung UMKM di Lampung...',
    image: '/berita13.jpg',
    link: 'https://www.lampungprov.go.id/berita13',
  },
  {
    id: 14,
    title: 'Pemprov Lampung Berikan Bantuan Infrastruktur untuk Desa',
    date: '19/05/2024',
    description: 'Program bantuan infrastruktur untuk desa-desa di Lampung...',
    image: '/berita14.jpg',
    link: 'https://www.lampungprov.go.id/berita14',
  },
  {
    id: 15,
    title: 'Lampung Luncurkan Kampanye Lingkungan Hidup Bersih',
    date: '18/05/2024',
    description: 'Kampanye bersih untuk meningkatkan kesadaran lingkungan...',
    image: '/berita15.jpg',
    link: 'https://www.lampungprov.go.id/berita15',
  },
  {
    id: 16,
    title: 'Pemprov Lampung Mengadakan Program Penyuluhan Hukum',
    date: '17/05/2024',
    description: 'Penyuluhan hukum untuk memberikan pemahaman kepada masyarakat...',
    image: '/berita16.jpg',
    link: 'https://www.lampungprov.go.id/berita16',
  },


];

function Berita() {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Daftar Berita
        </motion.h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transform transition duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="flex items-start gap-4 p-5">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-900 dark:text-white hover:text-yellow-500"
                  >
                    {news.title}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{news.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Tanggal: {news.date}</p>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-yellow-500 hover:text-yellow-600 font-semibold mt-3 inline-block"
                  >
                    Lihat Selengkapnya →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageWithSidebar>
  );
}

export default Berita;
