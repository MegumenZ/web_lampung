import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SemuaKonten from '../data/SemuaKonten';
import Sidebar from './Sidebar';
import SidebarKanan from './SidebarKanan';

function SearchResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter hasil pencarian
  const hasil = SemuaKonten.filter(item =>
    (item.title || '').toLowerCase().includes(query) ||
    (item.content || '').toLowerCase().includes(query)
  );

  // Fungsi untuk highlight kata pencarian
  const highlight = (text, keyword) => {
    if (!text || !keyword) return text;
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === keyword ? (
        <span key={i} className="bg-yellow-200 font-semibold">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative">
      <Sidebar />

      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-12">
        {/* Konten Utama */}
        <div className="w-full md:w-3/4 h-auto overflow-y-auto pr-4 space-y-8">
          <div className="border border-yellow-300 bg-white rounded-2xl shadow-md p-6">
            <h1 className="text-4xl font-bold mb-6 border-b pb-3">
              Hasil pencarian: <span className="text-yellow-700">"{query}"</span>
            </h1>

            {hasil.length > 0 ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hasil.map((item, i) => (
                  <div
                    key={i}
                    className="bg-yellow-50 border border-yellow-200 shadow-sm hover:shadow-md rounded-xl p-6 transition-all"
                  >
                    <Link
                      to={item.link || '#'}
                      className="text-lg font-semibold text-yellow-800 hover:text-yellow-900 hover:underline"
                    >
                      {highlight(item.title, query)}
                    </Link>
                    <p className="text-gray-600 mt-2 text-sm">
                      {highlight(item.content, query)}
                    </p>
                    <Link
                      to={item.link || '#'}
                      className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Lihat Selengkapnya →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-4">Tidak ditemukan hasil yang cocok.</p>
            )}
          </div>
        </div>

        {/* Sidebar Kanan */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit mt-10 md:mt-0">
          <SidebarKanan />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;