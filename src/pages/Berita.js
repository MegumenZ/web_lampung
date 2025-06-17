import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const newsData = [
  {
    id: 1,
    title: 'Lampung Targetkan Kenaikan Nilai IDI, Pj. Sekda Dorong Kolaborasi Seluruh Elemen',
    date: '31/05/2024',
    description: 'Diskusi tentang Indeks Demokrasi Indonesia (IDI) dan kolaborasi sektor...',
    image: '/berita1.jpg',
    link: 'https://www.lampungprov.go.id/berita1',
  },
  {
    id: 2,
    title: 'Pelantikan Bupati Way Kanan',
    date: '31/05/2024',
    description: 'Pelantikan Bupati Way Kanan dan senyum kematian yang menarik perhatian...',
    image: '/hoak1.jpg',
    link: 'https://www.lampungprov.go.id/berita2',
  },
  {
    id: 3,
    title: 'Gubernur Lampung Resmikan Jalan Tol Baru',
    date: '30/05/2024',
    description: 'Peresmian jalan tol baru di Lampung untuk mempercepat konektivitas...',
    image: '/berita3.jpg',
    link: 'https://www.lampungprov.go.id/berita3',
  },
  {
    id: 4,
    title: 'Pemprov Lampung Gelar Festival Budaya',
    date: '29/05/2024',
    description: 'Festival budaya Lampung disambut meriah oleh masyarakat...',
    image: '/berita4.jpg',
    link: 'https://www.lampungprov.go.id/berita4',
  },
  {
    id: 5,
    title: 'Lampung Raih Penghargaan Nasional Inovasi Daerah',
    date: '28/05/2024',
    description: 'Penghargaan diberikan atas inovasi pelayanan publik...',
    image: '/berita5.jpg',
    link: 'https://www.lampungprov.go.id/berita5',
  },
  {
    id: 6,
    title: 'Pemprov Lampung Fokus Tingkatkan UMKM',
    date: '27/05/2024',
    description: 'Program pengembangan UMKM untuk mendorong ekonomi daerah...',
    image: '/berita6.jpg',
    link: 'https://www.lampungprov.go.id/berita6',
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
  // Bisa ditambahkan lebih banyak berita
];

function Berita() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative">
      <Sidebar />

      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-12">
        {/* Konten utama berita */}
        <div className="w-full md:w-3/4 h-auto overflow-y-auto pr-4 space-y-8">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Daftar Berita
          </h1>

          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-6 transform transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-6">
                {/* Gambar Berita */}
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-32 h-32 object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-110"
                />

                {/* Deskripsi Berita */}
                <div className="flex flex-col">
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-yellow-500 transition duration-300"
                  >
                    {news.title}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{news.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Tanggal: {news.date}</p>

                  {/* Tombol "Lihat Selengkapnya" */}
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-yellow-500 hover:text-yellow-600 font-semibold transition duration-300"
                  >
                    Lihat Selengkapnya &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Kanan */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>
    </div>
  );
}

export default Berita;