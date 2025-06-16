import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const Sejarah = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white animate-fade-in">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Tengah */}
      <main className="flex-1 px-6 py-10 overflow-y-auto ml-16">
        <div className="max-w-5xl mx-auto bg-[#1e293b] p-8 rounded-lg shadow-lg space-y-6">
          <h1 className="text-3xl font-bold text-yellow-300 text-center mb-6">Sejarah Lampung</h1>

          <p className="text-gray-200 leading-relaxed">
            Provinsi Lampung lahir pada tanggal 18 Maret 1964 dengan ditetapkannya Peraturan Pemerintah Nomor 31964 yang kemudian menjadi Undang-undang Nomor 14 tahun 1964. Sebelum itu Provinsi Lampung merupakan Karesidenan yang tergabung dengan Provinsi Sumatera Selatan.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Kendatipun Provinsi Lampung sebelum tanggal 18 maret 1964 tersebut secara administratif masih merupakan bagian dari Provinsi Sumatera Selatan, namun daerah ini jauh sebelum Indonesia merdeka memang telah menunjukkan potensi yang sangat besar serta corak warna kebudayaan tersendiri yang dapat menambah khasanah adat budaya di Nusantara yang tercinta ini. Oleh karena itu pada zaman VOC daerah Lampung tidak terlepas dari incaran penjajahan Belanda.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Tatkala Banten dibawah pimpinan Sultan Agung Tirtayasa (1651-1683) ... Sultan Haji akan menyerahkan penguasaan atas daerah Lampung kepada VOC. Akhirnya pada tanggal 7 April 1682 Sultan Agung Tirtayasa disingkirkan dan Sultan Haji dinobatkan menjadi Sultan Banten.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Dari perundingan-perundingan antara VOC dengan Sultan Haji ... karena ternyata tidak semua penguasa di Lampung langsung tunduk begitu saja kepada kekuasaan Sultan Haji.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Penempatan wakil-wakil Sultan Banten di Lampung yang disebut "Jenang" ... Jadi penguasaan Sultan Banten atas Lampung adalah dalam hal garis pantai saja.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Selanjutnya pada masa Raffles berkuasa pada tahun 1811 ... baru kemudian tahun 1829 ditunjuk Residen Belanda untuk Lampung.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Dalam pada itu sejak tahun 1817 posisi Radin Inten semakin kuat ... Radin Inten tidak diperkenankan meluaskan lagi wilayah selain dari desa-desa yang sampai saat itu berada dibawah pengaruhnya.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Tetapi persetujuan itu tidak pernah dipatuhi oleh Radin Inten ... sampai akhirnya Radin Inten II ini ditangkap dan dibunuh oleh tentara-tentara Belanda.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Sejak itu Belanda mulai leluasa menancapkan kakinya di daerah Lampung ... dibangun jalan kereta api dari Telukbetung menuju Palembang.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Hingga menjelang Indonesia merdeka tanggal 17 Agustus 1945 ... pada tahun 1964 Keresidenan Lampung ditingkatkan menjadi Daerah Tingkat I Provinsi Lampung.
          </p>
        </div>
      </main>

      {/* Sidebar Kanan */}
      <SidebarKanan />
    </div>
  );
};

export default Sejarah;
