import React, { useState } from 'react';
import { FiDownload, FiPrinter } from 'react-icons/fi';

const dataHarga = [
  { komoditas: 'Beras Rojolele', satuan: 'Kg', harga: 12300, status: 'Stabil' },
  { komoditas: 'Cabai Merah', satuan: 'Kg', harga: 45000, status: 'Naik' },
  { komoditas: 'Telur Ayam', satuan: 'Kg', harga: 28500, status: 'Turun' },
  { komoditas: 'Minyak Goreng', satuan: 'Ltr', harga: 17000, status: 'Stabil' },
  { komoditas: 'Bawang Merah', satuan: 'Kg', harga: 32000, status: 'Naik' },
];

function PasarDetail() {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('tabel');

  const filteredData = dataHarga.filter(item =>
    item.komoditas.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#0f172a] text-white animate-fade-in px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">
            🛒 Harga Komoditas – Pasar Pasir Gintung
          </h1>
          <p className="text-sm text-gray-400">Terakhir diupdate: 12 Juni 2025</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 text-sm border-b border-gray-600">
          {['tabel', 'grid', 'statistik'].map((label) => (
            <button
              key={label}
              onClick={() => setTab(label)}
              className={`uppercase pb-2 font-medium tracking-wide border-b-2 transition-all duration-300 ${
                tab === label
                  ? 'border-yellow-400 text-yellow-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search + Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Cari komoditas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring focus:ring-yellow-400"
          />
          <div className="flex gap-3">
            <button className="p-2 rounded hover:bg-gray-700 transition">
              <FiDownload className="text-xl" />
            </button>
            <button className="p-2 rounded hover:bg-gray-700 transition">
              <FiPrinter className="text-xl" />
            </button>
          </div>
        </div>

        {/* TABEL */}
        {tab === 'tabel' && (
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-700">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left">Komoditas</th>
                  <th className="px-4 py-3 text-left">Satuan</th>
                  <th className="px-4 py-3 text-left">Harga</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-700 hover:bg-gray-800 transition"
                    >
                      <td className="px-4 py-2">{item.komoditas}</td>
                      <td className="px-4 py-2">{item.satuan}</td>
                      <td className="px-4 py-2">Rp. {item.harga.toLocaleString()}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            item.status === 'Naik'
                              ? 'bg-red-100 text-red-700'
                              : item.status === 'Turun'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-4 text-gray-400 italic"
                    >
                      Tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* GRID */}
        {tab === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 border border-gray-700 p-5 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-yellow-300">{item.komoditas}</h3>
                <p className="text-sm text-gray-400">Satuan: {item.satuan}</p>
                <p className="text-md font-bold text-white mt-1">
                  Rp. {item.harga.toLocaleString()}
                </p>
                <span
                  className={`mt-2 inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === 'Naik'
                      ? 'bg-red-100 text-red-700'
                      : item.status === 'Turun'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* STATISTIK */}
        {tab === 'statistik' && (
          <div className="text-center text-gray-400 italic py-10">
            Grafik dan statistik belum tersedia.
          </div>
        )}
      </div>
    </section>
  );
}

export default PasarDetail;
