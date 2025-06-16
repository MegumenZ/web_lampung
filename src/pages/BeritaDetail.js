import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const BeritaDetail = () => {
  const { id } = useParams();
  const [showZoom, setShowZoom] = useState(false);

  const newsData = [
    {
      id: 1,
      title: 'Lampung Targetkan Kenaikan Nilai IDI, Pj. Sekda Dorong Kolaborasi Seluruh Elemen',
      desc: 'WOW GANTENG BANGET.',
      date: '31/05/2024',
      image: '/berita1.jpg',
      content: [
        'Bandar Lampung — Pj. Sekdaprov Lampung, M. Firsada membuka Focus Group Discussion (FGD) bersama KPU Lampung dan BPS terkait Indeks Demokrasi Indonesia (IDI). Acara ini bertujuan untuk mendorong kualitas demokrasi lokal yang partisipatif dan transparan.',
        'Politik yang stabil ditandai dengan implementasi nilai demokrasi seperti partisipasi masyarakat, kebebasan pers, dan pemilihan yang adil. Firsada menekankan pentingnya kolaborasi lintas sektor untuk menjaga iklim demokrasi yang sehat.',
        'IDI sendiri merupakan alat ukur penting untuk mengkaji kualitas demokrasi daerah berdasarkan data empiris. Kegiatan ini diharapkan mampu mendorong kebijakan berbasis data dan meningkatkan kesadaran publik akan pentingnya demokrasi.'
      ]
    },
    {
      id: 2,
      title: 'Senyuman Kematian LILI',
      desc: 'Senyuman yang sangat responsif membuat otak lunglay',
      date: '31/05/2024',
      image: '/hoak1.jpg',
      content: [
        'Senyum LILI saat memimpin apel pagi telah menarik perhatian para pegawai. Banyak yang menilai senyum tersebut membawa aura tersendiri.',
        'Beberapa menyebutnya “senyum kematian” karena bisa membuat siapa pun diam membisu, terpaku oleh ketenangannya.',
        'Namun bagi sebagian lainnya, itu adalah bentuk ketegasan dan kharisma seorang pemimpin. Senyum itu kini menjadi pembicaraan hangat di media sosial ASN Lampung.'
      ]
    },
    // Tambahkan berita lainnya di sini jika perlu
  ];

  const berita = newsData.find((item) => item.id === parseInt(id));

  if (!berita) {
    return <div className="text-center mt-10 text-lg">Berita tidak ditemukan</div>;
  }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama + Sidebar Kanan */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 gap-8 py-12">
        {/* Konten Utama */}
        <div className="w-full md:w-3/4 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-center">
            {berita.title}
          </h1>

          {/* Gambar Berita */}
          <div className="flex justify-center">
            <img
              src={berita.image}
              alt={berita.title}
              onClick={() => setShowZoom(true)}
              className="w-[400px] max-w-full h-auto object-cover rounded-xl shadow cursor-zoom-in border border-gray-300 dark:border-gray-700"
            />
          </div>

          {/* Isi Berita (banyak paragraf) */}
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {berita.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tanggal */}
          <p className="text-sm text-gray-400 dark:text-gray-500">Tanggal: {berita.date}</p>
        </div>

        {/* Sidebar Kanan */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>

      {/* Modal Zoom Gambar */}
      {showZoom && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowZoom(false)}
        >
          <img
            src={berita.image}
            alt={berita.title}
            className="max-w-4xl max-h-[90vh] object-contain rounded-xl shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default BeritaDetail;
