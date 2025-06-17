// StrukturOrganisasi.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

function StrukturOrganisasi() {
  const submenu = [
    {
      title: 'Struktur Organisasi Provinsi Lampung',
      description: 'Bagan resmi kelembagaan tingkat provinsi.',
      link: '/struktur-organisasi-provinsi',
    },
    {
      title: 'Struktur Organisasi Perangkat Daerah Pemprov Lampung',
      description: 'Bagan internal organisasi perangkat daerah.',
      link: '/struktur-organisasi-perangkat-daerah',
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />

      <main className="flex-1 px-6 py-10 ml-16 animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold text-yellow-300 text-center">Struktur Organisasi</h1>
          <p className="text-center text-gray-300 max-w-xl mx-auto">
            Silakan pilih salah satu struktur organisasi yang ingin Anda lihat.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {submenu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="p-6 bg-[#1e293b] rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-700 hover:border-yellow-400"
              >
                <h2 className="text-lg font-semibold text-yellow-400 mb-2">{item.title}</h2>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <SidebarKanan />
    </div>
  );
}

export default StrukturOrganisasi;
