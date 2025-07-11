import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

function Sidebarstat() {
  const [visitStats, setVisitStats] = useState({ today: 0, week: 0, month: 0, year: 0 });
  const [popularArticles, setPopularArticles] = useState([]);
  const [categories] = useState([
    { name: 'Pengumuman' },
    { name: 'Berita' },
    { name: 'Lain-lain' },
    { name: 'Lampung Terkini' },
    { name: 'Artikel' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const updateVisitStats = () => {
    const keys = ['today', 'week', 'month', 'year'];
    const stats = {};
    keys.forEach((key) => {
      const storageKey = `visit_${key}`;
      const count = parseInt(localStorage.getItem(storageKey) || 0) + 1;
      localStorage.setItem(storageKey, count);
      stats[key] = count;
    });
    setVisitStats(stats);
  };

  const fetchPopularArticles = async () => {
    try {
      const response = await fetch('/api/popular-articles');
      const data = await response.json();
      setPopularArticles(data);
    } catch (err) {
      console.error('Gagal fetch artikel:', err);
    }
  };

  useEffect(() => {
    updateVisitStats();
    fetchPopularArticles();
  }, []);

  const chartData = {
    labels: ['Hari Ini', 'Minggu Ini', 'Bulan Ini', 'Tahun Ini'],
    datasets: [
      {
        label: 'Jumlah Kunjungan',
        data: [visitStats.today, visitStats.week, visitStats.month, visitStats.year],
        borderColor: '#facc15',
        backgroundColor: 'rgba(250, 204, 21, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="w-full px-4 md:px-2 max-w-full md:max-w-[480px] lg:max-w-[460px] xl:max-w-[440px]">
<aside className="w-full rounded-2xl shadow-xl flex flex-col text-base transition-all duration-300 animate-fade-in overflow-hidden bg-[#f9f9f9] dark:bg-gray-800 text-gray-800 dark:text-gray-100" style={{ marginLeft: '30px', marginTop: '-30px' }}>


        
        {/* Motif Atas */}
        <div
          className="w-full h-[40px] bg-no-repeat bg-top"
          style={{
            backgroundImage: "url('/lampungyay.png')",
            backgroundSize: '100% auto',
            backgroundPosition: 'top',
            marginBottom: '-1px',
          }}
        />

        <div className="p-6 space-y-8">
          {/* Pencarian */}
          <input
            type="text"
            placeholder="Cari Informasi..."
            className="w-full py-2 px-3 rounded-md bg-[#fff6e6] dark:bg-gray-700 placeholder:text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Pilihan Bahasa */}
          <div>
            <p className="font-semibold mb-2">Pilih Bahasa</p>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <img src="/indonesia.jpg" alt="ID" className="w-5 h-4 rounded shadow" />
                <span>Indonesia</span>
                <input type="radio" name="lang" defaultChecked className="ml-auto accent-yellow-500" />
              </label>
              <label className="flex items-center gap-3 opacity-70">
                <img src="/inggris.jpg" alt="EN" className="w-5 h-4 rounded shadow" />
                <span>English</span>
                <input type="radio" name="lang" disabled className="ml-auto accent-yellow-500" />
              </label>
            </div>
          </div>

          {/* Call Center */}
          <div className="bg-gradient-to-r from-[#0d2b59] to-[#081d3a] text-white rounded-xl p-5 text-center shadow">
            <div className="flex justify-center items-center gap-2 mb-2">
              <FaPhoneAlt size={16} />
              <span className="text-sm font-bold uppercase">Call Center</span>
            </div>
            <p className="text-xl font-semibold">0811 7905 000</p>
          </div>

          {/* Kategori */}  
          <div>
            <h3 className="bg-[#081d3a] text-white px-4 py-2 rounded-md text-center font-bold text-sm">Kategori</h3>
            <div className="mt-3 space-y-2">
              {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => {
              setSelectedCategory(cat);
              const lower = cat.name.toLowerCase();
              if (lower === 'berita') navigate('/berita');
              else if (lower === 'pengumuman') navigate('/pengumuman');
              // kamu bisa tambahkan logika lain jika kategori lain butuh routing juga
            }}
            className={`w-full text-left px-4 py-2 rounded-md transition ${
              selectedCategory === cat
                ? 'bg-yellow-300 text-black font-semibold'
                : 'bg-[#f0f0f0] dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            {cat.name}
          </button>
        ))}

            </div>
          </div>

          {/* Artikel Terpopuler */}
          <div>
            <h3 className="bg-[#081d3a] text-white px-4 py-2 rounded-md text-center font-bold text-sm">
              Terpopuler Bulan Ini
            </h3>
            <div className="mt-4 space-y-3">
              {popularArticles.length > 0 ? (
                popularArticles.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img
                      src={item.imageUrl}
                      alt="thumb"
                      className="w-10 h-10 object-cover rounded-full border border-gray-300"
                    />
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Belum ada artikel terpopuler.
                </p>
              )}
            </div>
          </div>

          {/* Statistik Kunjungan */}
          <div>
            <h3 className="text-center font-bold text-lg mb-3">Statistik Kunjungan</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Hari Ini</span>
                <span className="font-semibold text-teal-400">{visitStats.today}</span>
              </div>
              <div className="flex justify-between">
                <span>Minggu Ini</span>
                <span className="font-semibold text-lime-400">{visitStats.week}</span>
              </div>
              <div className="flex justify-between">
                <span>Bulan Ini</span>
                <span className="font-semibold text-indigo-400">{visitStats.month}</span>
              </div>
              <div className="flex justify-between">
                <span>Tahun Ini</span>
                <span className="font-semibold text-rose-400">{visitStats.year}</span>
              </div>
            </div>
            <div className="mt-4">
              <Line data={chartData} />
            </div>
          </div>

          {/* Logo Link */}
          <div className="pt-6 text-center">
            <a
              href="https://invest.lampungprov.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-300"
            >
              <img src="/fola.png" alt="Forum Investasi Lampung" className="w-full max-w-xs mx-auto" />
            </a>
          </div>
        </div>

        {/* Motif Bawah */}
        <div
          className="w-full h-[40px] bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url('/lampungyay.png')",
            backgroundSize: '100% auto',
            backgroundPosition: 'bottom',
            marginTop: '-1px',
          }}
        />
      </aside>
    </div>
  );
}

export default Sidebarstat;
