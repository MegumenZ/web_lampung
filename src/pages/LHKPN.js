import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

function LHKPN() {
  const dataLHKPN = [
    {
      jabatan: 'Pj. Gubernur',
      tahun: [
        { label: 'TAHUN 2023', link: 'https://drive.google.com/file/d/105xLtmMggptLyNPI2CyCEG2oIbkgfKcu/view' },
      ],
    },
    {
      jabatan: 'Sekretaris Daerah',
      tahun: [
        { label: 'TAHUN 2022', link: '#' },
        { label: 'TAHUN 2023', link: 'https://drive.google.com/file/d/1-yLx4prbSxR9bDgriIkC558P00TT3Awb/view' },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white animate-fade-in">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Tengah */}
      <main className="flex-1 px-6 py-10 overflow-x-auto ml-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-yellow-300 text-center">
            Laporan Harta Kekayaan Pejabat Negara
          </h1>
          <p className="text-center text-gray-300">
            Berikut Laporan Harta Kekayaan Pejabat Negara Pemprov Lampung
          </p>

          {dataLHKPN.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-lg transition duration-300 hover:scale-[1.01]"
            >
              <h2 className="text-lg font-bold mb-4 text-yellow-400 uppercase">
                {index + 1}. {item.jabatan}
              </h2>
              <div className="flex flex-wrap gap-4">
                {item.tahun.map((t, idx) => (
                  <a
                    key={idx}
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-[#1e293b] transition duration-300 hover:scale-105"
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar Kanan */}
      <SidebarKanan />
    </div>
  );
}

export default LHKPN;
