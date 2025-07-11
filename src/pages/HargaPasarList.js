import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageWithSidebar from '../components/PageWithSidebar'; // Ganti import ke PageWithSidebar

const daftarPasar = [
  {
    nama: 'Pasar Pasir Gintung',
    slug: 'pasar-pasir-gintung',
    lokasi: 'Bandar Lampung',
    gambar: '/img/pasargitung.jpg',
    deskripsi: 'Pasar tradisional terbesar di Bandar Lampung. Menyediakan kebutuhan pokok & sayuran segar.',
  },
  {
    nama: 'Pasar Panjang',
    slug: 'pasar-panjang',
    lokasi: 'Bandar Lampung',
    gambar: '/img/pasarpanjang.jpg',
    deskripsi: 'Pasar ramai di pusat kota, terkenal dengan pedagang ikan dan daging segar.',
  },
  {
    nama: 'Pasar Way Halim',
    slug: 'pasar-way-halim',
    lokasi: 'Bandar Lampung',
    gambar: '/img/pasarwayhalim.jpg',
    deskripsi: 'Pasar modern di kawasan Way Halim dengan fasilitas yang lengkap.',
  },
  {
    nama: 'Pasar Way Kandis',
    slug: 'pasar-way-kandis',
    lokasi: 'Bandar Lampung',
    gambar: '/img/pasarwaykandis.jpg',
    deskripsi: 'Pasar dengan akses mudah dan ramai di pinggiran kota.',
  },
  {
    nama: 'Pasar Tamin',
    slug: 'pasar-tamin',
    lokasi: 'Bandar Lampung',
    gambar: '/img/pasartamin.jpg',
    deskripsi: 'Pasar sentral kebutuhan pokok masyarakat sekitar.',
  },
  {
    nama: 'Pasar Inpres Kalianda',
    slug: 'pasar-kalianda',
    lokasi: 'Lampung Selatan',
    gambar: '/img/pasar-kalianda.jpg',
    deskripsi: 'Pasar utama Kabupaten Lampung Selatan dengan berbagai komoditas.',
  },
  {
    nama: 'Pasar Daerah Bandar Jaya',
    slug: 'pasar-bandar-jaya',
    lokasi: 'Lampung Tengah',
    gambar: '/img/pasar-bandar-jaya.jpg',
    deskripsi: 'Pasar daerah yang tumbuh pesat di Bandar Jaya.',
  },
  {
    nama: 'Pasar Sentral Kotabumi',
    slug: 'pasar-kotabumi',
    lokasi: 'Lampung Utara',
    gambar: '/img/pasar-kotabumi.jpg',
    deskripsi: 'Pasar tradisional dan pusat perdagangan utama di Kotabumi.',
  },
  {
    nama: 'Pasar Liwa',
    slug: 'pasar-liwa',
    lokasi: 'Lampung Barat',
    gambar: '/img/pasar-liwa.jpg',
    deskripsi: 'Pasar pegunungan dengan produk segar dari kebun lokal.',
  },
  {
    nama: 'Pasar Unit 2 Tulang Bawang',
    slug: 'pasar-unit-2',
    lokasi: 'Tulang Bawang',
    gambar: '/img/pasar-unit-2.jpg',
    deskripsi: 'Pasar regional yang strategis di jalur lintas timur.',
  },
  {
    nama: 'Pasar Kota Agung',
    slug: 'pasar-kota-agung',
    lokasi: 'Tanggamus',
    gambar: '/img/pasar-kota-agung.jpg',
    deskripsi: 'Pasar utama di pusat Kabupaten Tanggamus.',
  },
  {
    nama: 'Pasar Way Jepara Lampung Timur',
    slug: 'pasar-way-jepara',
    lokasi: 'Lampung Timur',
    gambar: '/img/pasar-way-jepara.jpg',
    deskripsi: 'Pasar tradisional di kecamatan Way Jepara.',
  },
  {
    nama: 'Pasar Baradatu',
    slug: 'pasar-baradatu',
    lokasi: 'Way Kanan',
    gambar: '/img/pasar-baradatu.jpg',
    deskripsi: 'Pasar sentral di kawasan Way Kanan.',
  },
  {
    nama: 'Pasar Sukaraja Gedong Tataan',
    slug: 'pasar-sukaraja',
    lokasi: 'Pesawaran',
    gambar: '/img/pasar-sukaraja.jpg',
    deskripsi: 'Pasar desa yang berkembang di Gedong Tataan.',
  },
  {
    nama: 'Pasar Rakyat Gading Rejo',
    slug: 'pasar-gading-rejo',
    lokasi: 'Pringsewu',
    gambar: '/img/pasar-gading-rejo.jpg',
    deskripsi: 'Pasar rakyat yang menjadi pusat aktivitas ekonomi Gading Rejo.',
  },
  {
    nama: 'Pasar Simpang Pematang',
    slug: 'pasar-simpang-pematang',
    lokasi: 'Mesuji',
    gambar: '/img/pasar-simpang.jpg',
    deskripsi: 'Pasar tradisional di Kabupaten Mesuji.',
  },
  {
    nama: 'Pasar Panaragan Jaya',
    slug: 'pasar-panaragan',
    lokasi: 'Tulang Bawang Barat',
    gambar: '/img/pasar-panaragan.jpg',
    deskripsi: 'Pasar yang terus berkembang di wilayah Panaragan.',
  },
  {
    nama: 'Pasar Way Batu',
    slug: 'pasar-way-batu',
    lokasi: 'Pesisir Barat',
    gambar: '/img/pasar-way-batu.jpg',
    deskripsi: 'Pasar pesisir dengan hasil laut segar.',
  },
  {
    nama: 'Pasar Kopindo',
    slug: 'pasar-kopindo',
    lokasi: 'Kota Metro',
    gambar: '/img/pasar-kopindo.jpg',
    deskripsi: 'Pasar legendaris di Kota Metro dengan pedagang yang variatif.',
  },
  {
    nama: 'Pasar Kangkung',
    slug: 'pasar-kangkung',
    lokasi: 'Bandar Lampung',
    gambar: '/img/pasar-kangkung.jpg',
    deskripsi: 'Pasar ramai di kawasan Kangkung, Bandar Lampung.',
  },
  {
    nama: 'Pasar Tugu',
    slug: 'pasar-tugu',
    lokasi: 'Bandar Lampung',
    gambar: '/img/pasar-tugu.jpg',
    deskripsi: 'Pasar dekat Tugu Adipura yang terkenal di pusat kota.',
  },
];

function HargaPasarList() {
  const titleRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const filteredPasar = daftarPasar.filter((pasar) =>
    pasar.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      {/* Gunakan PageWithSidebar sebagai komponen pengganti Sidebar dan SidebarKanan */}
      <PageWithSidebar>
        <main className="flex-grow p-6 md:px-16 space-y-12">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center animate-fade-in-up">
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg mb-4 uppercase"
              >
                🏬 Daftar Pasar Provinsi Lampung
              </h1>
              <p className="text-gray-300 text-base animate-fade-in-up delay-100">
                Klik salah satu pasar di bawah ini untuk melihat informasinya
              </p>
            </div>

            {/* Input pencarian + tombol komoditas */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <input
                type="text"
                placeholder="Cari pasar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/2 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-sm text-sm"
              />
              <Link
                to="/harga-komoditas"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-3 rounded-lg transition flex items-center"
              >
                📊 Lihat Harga Komoditas
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPasar.length === 0 ? (
                <p className="text-center col-span-full text-gray-300">Pasar tidak ditemukan.</p>
              ) : (
                filteredPasar.map((pasar, index) => (
                  <Link
                    key={index}
                    to={`/harga-pasar/${pasar.slug}`}
                    className="group bg-[#1e293b] rounded-xl p-6 shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/30 hover:border-yellow-400 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={pasar.gambar}
                        alt={pasar.nama}
                        className="w-16 h-16 object-cover rounded-lg transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{pasar.nama}</h3>
                        <p className="text-sm text-gray-400">{pasar.lokasi}</p>
                        <p className="text-xs text-gray-400 mt-1">{pasar.deskripsi}</p>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </main>
      </PageWithSidebar>
    </div>
  );
}

export default HargaPasarList;
