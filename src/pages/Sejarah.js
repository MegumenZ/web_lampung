import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const Sejarah = () => {
  return (
    <PageWithSidebar>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        {/* Judul dengan animasi */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 text-center mb-10"
        >
          Sejarah Provinsi Lampung
        </motion.h1>

        {/* Konten Sejarah */}
        <div className="space-y-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Provinsi Lampung lahir pada tanggal 18 Maret 1964 dengan ditetapkannya Peraturan Pemerintah Nomor 3 Tahun 1964 yang kemudian menjadi Undang-Undang Nomor 14 Tahun 1964. Sebelum itu, Provinsi Lampung merupakan karesidenan yang tergabung dengan Provinsi Sumatera Selatan.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Kendati sebelum tanggal tersebut Lampung secara administratif masih merupakan bagian dari Sumatera Selatan, namun sejak lama daerah ini telah menunjukkan potensi besar dan memiliki corak kebudayaan yang khas, yang menambah kekayaan budaya Nusantara. Pada zaman VOC, Lampung pun menjadi incaran penjajahan Belanda.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Saat Banten dipimpin Sultan Agung Tirtayasa (1651–1683), wilayah Banten menjadi pusat perdagangan yang menyaingi VOC. Namun putranya, Sultan Haji, bersekutu dengan VOC untuk menggantikan ayahnya. Sebagai imbalan, Sultan Haji menyerahkan penguasaan atas daerah Lampung kepada VOC. Pada 7 April 1682, Sultan Agung Tirtayasa disingkirkan, dan Sultan Haji diangkat menjadi Sultan Banten.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Piagam tertanggal 27 Agustus 1682 dari Sultan Haji menyerahkan pengawasan perdagangan rempah di Lampung kepada VOC. Namun ekspedisi VOC yang dipimpin Vander Schuur ke Lampung gagal karena sebagian besar penguasa Lampung masih loyal pada Sultan Agung Tirtayasa dan menolak kekuasaan Sultan Haji serta VOC.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            VOC kemudian menyadari bahwa kekuasaan Sultan Banten atas Lampung tidak mutlak. Wakil Sultan di Lampung yang disebut "Jenang" atau "Gubernur" hanya mengurusi perdagangan lada. Para adipati lokal tetap berkuasa atas wilayahnya dan tidak tunduk pada Jenang. Hubungan Banten dan Lampung bersifat saling membutuhkan, terutama terkait perdagangan hasil bumi.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Pada masa Raffles berkuasa (1811), Lampung diduduki dan tidak dikembalikan ke Belanda karena dianggap bukan jajahan Belanda. Setelah Raffles pergi, pada 1829 barulah Residen Belanda ditunjuk untuk Lampung.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Pada 1817, kekuasaan Radin Inten menguat sehingga Belanda khawatir dan mengirim ekspedisi yang menghasilkan persetujuan: Radin Inten mendapat tunjangan f.1.200/tahun, saudara-saudaranya masing-masing f.600/tahun, dan Radin Inten tidak boleh memperluas wilayah. Namun, Radin Inten tetap melakukan perlawanan.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Pada 1825, Belanda memerintahkan penangkapan Radin Inten, namun gagal karena benteng Belanda diserbu dan Lilevier dibunuh. Karena saat itu Belanda sibuk dengan Perang Diponegoro (1825–1830), mereka tidak bisa membalas. Radin Inten wafat pada 1825, dan digantikan anaknya, Radin Imba Kusuma.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Setelah Perang Diponegoro usai, Belanda menyerbu Lampung. Pada 1833, mereka gagal merebut benteng Radin Imba Kusuma. Baru pada 1834, dengan perwira militer baru, benteng berhasil direbut. Radin Imba Kusuma ditangkap di Lingga dan dibuang ke Pulau Timor.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Perlawanan terus berlanjut, bahkan saat Belanda membentuk tentara sewaan Lampung. Radin Inten II, putra Radin Imba Kusuma, memimpin perlawanan hingga akhirnya ia ditangkap dan dibunuh oleh tentara Belanda yang didatangkan dari Batavia.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Sejak saat itu Belanda mulai leluasa menancapkan kekuasaan. Perkebunan kopi, karet, tembakau, kelapa sawit, dan kaitsyuk mulai dikembangkan. Tahun 1913, jalur kereta api dibangun dari Telukbetung ke Palembang untuk mengangkut hasil perkebunan.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Menjelang kemerdekaan Indonesia pada 17 Agustus 1945 dan masa perjuangan fisik setelahnya, rakyat Lampung juga ikut berjuang. Hingga akhirnya, pada tahun 1964, keresidenan Lampung resmi menjadi Daerah Tingkat I Provinsi Lampung.
          </p>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
};

export default Sejarah;
