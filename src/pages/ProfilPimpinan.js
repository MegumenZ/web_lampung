import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const ProfilPimpinan = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white animate-fade-in">
      <Sidebar />

      {/* Konten Tengah */}
      <main className="flex-1 px-6 py-10 overflow-x-auto ml-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-yellow-300 mb-6 text-center">Profil Pimpinan Daerah</h1>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Gubernur */}
              <div className="bg-[#374151] p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-center hover:scale-[1.01]">
                <img src="/gubernur.png" alt="Gubernur" className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 hover:scale-105 transition duration-300" />
                <h2 className="text-lg font-bold text-yellow-300">Gubernur Lampung</h2>
                <p className="text-sm text-gray-300">Nama Gubernur</p>
                <p className="text-sm text-gray-400 italic mt-1">Universitas Lampung</p>
              </div>

              {/* Wakil Gubernur */}
              <div className="bg-[#374151] p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-center hover:scale-[1.01]">
                <img src="/wakil.png" alt="Wakil Gubernur" className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4 hover:scale-105 transition duration-300" />
                <h2 className="text-lg font-bold text-yellow-300">Wakil Gubernur</h2>
                <p className="text-sm text-gray-300">Nama Wakil Gubernur</p>
                <p className="text-sm text-gray-400 italic mt-1">Universitas Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SidebarKanan />
    </div>
  );
};

export default ProfilPimpinan;
