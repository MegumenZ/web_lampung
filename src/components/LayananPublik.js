import React from 'react';
import { FaFileAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const layanan = [
  {
    icon: React.createElement(FaFileAlt, { className: 'text-2xl text-blue-500' }),
    title: 'Lapor Lampung',
    desc: 'Sampaikan aspirasi, keluhan, atau pengaduan Anda kepada Pemerintah Provinsi Lampung.',
  },
  {
    icon: React.createElement(FaPhone, { className: 'text-2xl text-green-500' }),
    title: 'Lembaga Pengadaan Secara Elektronik (LPSE)',
    desc: 'Mendukung proses pengadaan barang dan jasa secara elektronik.',
  },
  {
    icon: React.createElement(FaEnvelope, { className: 'text-2xl text-red-500' }),
    title: 'Kontak Publik',
    desc: 'Hubungi dinas terkait dengan cepat dan mudah.',
  },
  {
    icon: React.createElement(FaGlobe, { className: 'text-2xl text-purple-500' }),
    title: 'Layanan Online',
    desc: 'Akses layanan pemerintah langsung dari rumah Anda secara digital.',
  },
];

function LayananPublik() {
  return React.createElement(
    'section',
    { className: 'px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-800' },
    [
      React.createElement(
        'h2',
        {
          className: 'text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white',
          key: 'title',
        },
        'Layanan Publik'
      ),
      React.createElement(
        'div',
        {
          className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8',
          key: 'grid',
        },
        layanan.map((item, index) =>
          React.createElement(
            'div',
            {
              key: index,
              className:
                'bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300',
            },
            [
              React.createElement('div', { className: 'mb-4', key: 'icon' }, item.icon),
              React.createElement(
                'h3',
                {
                  className: 'text-xl font-semibold mb-2 text-gray-800 dark:text-white',
                  key: 'title',
                },
                item.title
              ),
              React.createElement(
                'p',
                {
                  className: 'text-gray-600 dark:text-gray-300 text-sm',
                  key: 'desc',
                },
                item.desc
              ),
            ]
          )
        )
      ),
    ]
  );
}

export default LayananPublik;
