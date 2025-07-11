import React, { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import Translation from '../data/Translation'; 

function SidebarKanan() {
  const { language } = useContext(LanguageContext);
  const t = Translation[language];

  const [search, setSearch] = useState('');

  const hargaPasar = [
    { icon: '/beras.png', nama: 'Beras Rojolele', harga: 'Rp. 12.300 / Kg', status: 'Stabil' },
    { icon: '/cabai.jpg', nama: 'Cabai Merah', harga: 'Rp. 45.000 / Kg', status: 'Naik' },
    { icon: '/bawangmerah.jpg', nama: 'Bawang Merah', harga: 'Rp. 32.000 / Kg', status: 'Stabil' },
    { icon: '/telur.png', nama: 'Telur Ayam', harga: 'Rp. 28.500 / Kg', status: 'Turun' },
    { icon: '/minyak.jpg', nama: 'Minyak Goreng', harga: 'Rp. 17.000 / Ltr', status: 'Stabil' },
    { icon: '/gula.jpg', nama: 'Gula Pasir', harga: 'Rp. 14.000 / Kg', status: 'Naik' },
  ];

  const contactInfo = [
    { icon: '📌', label: t.labelAlamat || 'Alamat', value: t.alamatKontak || 'Jl. WR. Mongonsidi No.69, Teluk Betung, Bandar Lampung' },
    { icon: '📞', label: t.labelTelepon || 'Telepon', value: t.teleponKontak || '(0721) 475270' },
    { icon: '✉', label: t.labelEmail || 'Email', value: t.emailKontak || 'info@lampungprov.go.id' }
  ];

  const filteredHarga = useMemo(() => {
    return hargaPasar.filter(item =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.harga.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredKontak = useMemo(() => {
    return contactInfo.filter(item =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.value.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <aside className="-mt-10 w-full md:w-96 rounded-2xl shadow-xl flex flex-col text-base transition-all duration-200 animate-fade-in overflow-hidden bg-[#f9f9f9] dark:bg-gray-800">
      
      {/* Motif atas */}
      <div
        className="w-full h-[40px] bg-no-repeat bg-top"
        style={{
          backgroundImage: "url('/lampungyay.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'top',
          marginBottom: '-1px'
        }}
      ></div>

      {/* Isi */}
      <div className="p-6 space-y-8">
        {/* Pencarian */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cari Informasi Pasar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 px-4 rounded-lg bg-[#fff6e6] text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-sm"
          />
        </div>

        {/* Call Center */}
        {search.trim() === '' && (
          <div className="bg-gradient-to-r from-[#0d2b59] to-[#081d3a] text-white p-6 rounded-xl text-center shadow-md">
            <div className="flex justify-center items-center space-x-2 mb-1">
              <FaPhoneAlt size={18} />
              <span className="font-bold uppercase text-sm tracking-wide">{t.callCenter || 'Call Center'}</span>
            </div>
            <p className="text-2xl font-bold tracking-wider">0811 7905 000</p>
          </div>
        )}

        {/* Harga Pasar */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow space-y-4 border border-gray-100 dark:border-gray-700 max-h-72 overflow-y-auto">
          <div className="bg-[#081d3a] text-white px-4 py-2 rounded-lg text-center font-bold">
            {t.pasar || 'Harga Pasar Hari Ini'}
          </div>
          {filteredHarga.length > 0 ? (
            filteredHarga.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={item.icon} alt={item.nama} className="w-10 h-10 object-contain" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-white">{item.nama}</p>
                  <p className="text-sm text-gray-500">{item.harga}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
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
            ))
          ) : (
            <p className="text-center text-sm text-gray-500">Tidak ditemukan</p>
          )}
        </div>

        {/* Tombol harga pasar */}
        <div className="text-center">
          <Link
            to="/harga-pasar"
            className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            {t.lihatHargaPasar || 'Lihat Semua Harga'}
          </Link>
        </div>

        {/* Kontak Pemerintah */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">📍 {t.kontak || 'Kontak Pemerintah'}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.infoKontak || 'Informasi resmi Pemerintah Provinsi Lampung'}</p>
            <div className="mt-2 border-b border-gray-200 dark:border-gray-700" />
          </div>

          <div className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
            <div className="text-center">
              <p className="font-bold uppercase text-sm tracking-wider">{t.pemerintahProv || 'Pemerintah Provinsi Lampung'}</p>
            </div>
            {filteredKontak.length > 0 ? (
              filteredKontak.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold">{item.label}:</p>
                    {item.label.toLowerCase().includes('email') ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-blue-600 hover:underline hover:text-blue-700 transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500">Tidak ditemukan</p>
            )}
          </div>
        </div>
      </div>

      {/* Logo FOLA */}
      <div className="flex justify-center pb-6 px-6">
        <a
          href="https://invest.lampungprov.go.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/fola.png"
            alt="Forum Investasi Lampung"
            className="w-auto max-w-[350px] object-contain"
          />
        </a>
      </div>

      {/* Motif bawah */}
      <div
        className="w-full h-[40px] bg-no-repeat bg-bottom"
        style={{
          backgroundImage: "url('/lampungyay.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'bottom',
          marginTop: '-1px'
        }}
      ></div>
    </aside>
  );
}

export default SidebarKanan;
