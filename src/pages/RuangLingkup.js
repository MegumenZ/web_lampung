import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const RuangLingkup = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white animate-fade-in">
      <Sidebar />

      <main className="flex-1 px-6 py-10 overflow-x-auto ml-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg space-y-6">
            <h1 className="text-3xl font-bold text-yellow-300 text-center">Ruang Lingkup Pemerintah Provinsi Lampung</h1>

            {[
              { title: 'Pelayanan Publik', desc: 'Pengelolaan pelayanan dasar seperti kesehatan, pendidikan, dan kesejahteraan sosial. Peningkatan kualitas pelayanan masyarakat melalui program-program inovatif dan berbasis teknologi.' },
              { title: 'Infrastruktur dan Pembangunan Daerah', desc: 'Pembangunan infrastruktur seperti jalan, pelabuhan, dan tata ruang wilayah yang berkelanjutan.' },
              { title: 'Ekonomi dan Investasi', desc: 'Mendukung industri lokal, pariwisata, pertanian, perdagangan, serta menciptakan iklim investasi yang kondusif.' },
              { title: 'Keamanan dan Ketertiban', desc: 'Menjaga stabilitas keamanan dan ketertiban umum di daerah.' },
              { title: 'Lingkungan Hidup', desc: 'Pengelolaan sumber daya alam dan pelestarian lingkungan yang berkelanjutan.' },
              { title: 'Kebudayaan dan Pariwisata', desc: 'Melestarikan budaya lokal dan mengembangkan destinasi wisata.' },
              { title: 'Perencanaan dan Pengendalian Keuangan Daerah', desc: 'Mengelola APBD dengan prinsip transparansi dan akuntabilitas.' },
              { title: 'Kesejahteraan Sosial dan Penanggulangan Kemiskinan', desc: 'Program sosial untuk masyarakat kurang mampu dan respons terhadap bencana.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#374151] p-6 rounded-md shadow hover:shadow-lg transition hover:scale-[1.01]">
                <h2 className="text-yellow-400 text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SidebarKanan />
    </div>
  );
};

export default RuangLingkup;
