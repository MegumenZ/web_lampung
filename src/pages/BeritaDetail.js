import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';
import { LanguageContext } from '../contexts/LanguageContext';
import Translations from '../data/Translation';

const BeritaDetail = () => {
  const { language } = useContext(LanguageContext);
  const t = Translations[language];
  const { id } = useParams();
  const [showZoom, setShowZoom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const newsData = [
    {
      id: 1,
      title: {
        id: 'Lampung Targetkan Kenaikan Nilai IDI, Pj. Sekda Dorong Kolaborasi Seluruh Elemen',
        en: 'Lampung Targets Increased IDI Score, Acting Secretary Encourages Collaboration',
      },
      date: '31/05/2024',
      image: '/berita1.jpg',
      content: {
        id: [
          'Bandar Lampung — Pj. Sekdaprov Lampung, M. Firsada membuka Focus Group Discussion (FGD) bersama KPU Lampung dan BPS terkait Indeks Demokrasi Indonesia (IDI). Acara ini bertujuan untuk mendorong kualitas demokrasi lokal yang partisipatif dan transparan.',
          'Politik yang stabil ditandai dengan implementasi nilai demokrasi seperti partisipasi masyarakat, kebebasan pers, dan pemilihan yang adil. Firsada menekankan pentingnya kolaborasi lintas sektor untuk menjaga iklim demokrasi yang sehat.',
          'IDI sendiri merupakan alat ukur penting untuk mengkaji kualitas demokrasi daerah berdasarkan data empiris. Kegiatan ini diharapkan mampu mendorong kebijakan berbasis data dan meningkatkan kesadaran publik akan pentingnya demokrasi.',
        ],
        en: [
          'Bandar Lampung — Acting Provincial Secretary M. Firsada opened a Focus Group Discussion (FGD) with the Lampung General Elections Commission (KPU) and Statistics Indonesia (BPS) regarding the Indonesian Democracy Index (IDI). The event aims to promote a participatory and transparent local democracy.',
          'Stable politics are marked by the implementation of democratic values such as community participation, press freedom, and fair elections. Firsada emphasized the importance of cross-sector collaboration to maintain a healthy democratic climate.',
          'IDI itself is a vital measurement tool to assess the quality of local democracy based on empirical data. This activity is expected to encourage data-based policies and raise public awareness of the importance of democracy.',
        ],
      },
    },
    {
      id: 2,
      title: {
        id: 'Pelantikan Bupati Way Kanan',
        en: 'Inauguration of Way Kanan Regent',
      },
      date: '31/05/2024',
      image: '/berita2.jpeg',
      content: {
        id: [
          'Senyum LILI saat memimpin apel pagi telah menarik perhatian para pegawai. Banyak yang menilai senyum tersebut membawa aura tersendiri.',
          'Beberapa menyebutnya “senyum kematian” karena bisa membuat siapa pun diam membisu, terpaku oleh ketenangannya.',
          'Namun bagi sebagian lainnya, itu adalah bentuk ketegasan dan kharisma seorang pemimpin. Senyum itu kini menjadi pembicaraan hangat di media sosial ASN Lampung.',
        ],
        en: [
          'LILI’s smile during the morning assembly attracted the attention of employees. Many felt the smile brought a unique aura.',
          'Some called it a “death smile” for its ability to silence anyone, captivated by its calmness.',
          'To others, it was a sign of assertiveness and leadership charisma. That smile has now become a hot topic on Lampung ASN social media.',
        ],
      },
    },


          {
        id: 3,
        title: {
          id: 'Program Vaksinasi Gratis Diperpanjang',
          en: 'Free Vaccination Program Extended',
        },
        date: '02/06/2024',
        image: '/berita3.jpg',
        content: {
          id: [
            'Pemerintah Provinsi Lampung resmi memperpanjang program vaksinasi gratis bagi seluruh masyarakat sebagai upaya mencegah penyebaran penyakit menular.',
            'Perpanjangan ini berlaku hingga akhir tahun 2024 dan mencakup seluruh Puskesmas dan rumah sakit pemerintah di kabupaten/kota.',
            'Gubernur Lampung mengimbau masyarakat untuk memanfaatkan fasilitas ini dan menjaga kesehatan bersama.',
          ],
          en: [
            'The Lampung Provincial Government has officially extended the free vaccination program for all residents as an effort to prevent the spread of infectious diseases.',
            'The extension is valid until the end of 2024 and covers all health centers and public hospitals in the province.',
            'The Governor of Lampung urges the public to take advantage of this facility and maintain public health together.',
          ],
        }
      }

  ];

  

  const berita = newsData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    setIsVisible(true);
    const titleElement = document.getElementById('berita-judul');
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  if (!berita) {
    return (
      <div className="text-center mt-10 text-lg">
        {language === 'id' ? 'Berita tidak ditemukan' : 'News not found'}
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 relative">
      <Sidebar />

      <div className="flex flex-col md:flex-row px-6 md:px-20 gap-8 py-12">
        <div className={`w-full md:w-3/4 space-y-6 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}>
          <h1 id="berita-judul" className="text-3xl md:text-4xl font-extrabold tracking-wide text-center">
            {berita.title[language]}
          </h1>

          <div className="flex justify-center">
            <img
              src={berita.image}
              alt={berita.title[language]}
              onClick={() => setShowZoom(true)}
              className="w-[700px] max-w-full h-auto object-cover rounded-xl shadow cursor-zoom-in border border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {berita.content[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-500">
            {language === 'id' ? 'Tanggal' : 'Date'}: {berita.date}
          </p>
        </div>

        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <SidebarKanan />
        </div>
      </div>

      {/* Zoom overlay */}
      {showZoom && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowZoom(false)}
        >
          <img
            src={berita.image}
            alt={berita.title[language]}
            className="max-w-4xl max-h-[90vh] object-contain rounded-xl shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default BeritaDetail;
