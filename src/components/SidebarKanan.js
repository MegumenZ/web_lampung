import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

function SidebarKanan() {
  const hargaPasar = [
    { icon: '/test.jpg', nama: 'Beras Rojolele', harga: 'Rp. 12.300 / Kg', status: 'Stabil' },
    { icon: '/test.jpg', nama: 'Cabai Merah', harga: 'Rp. 45.000 / Kg', status: 'Naik' },
    { icon: '/test.jpg', nama: 'Bawang Merah', harga: 'Rp. 32.000 / Kg', status: 'Stabil' },
    { icon: '/test.jpg', nama: 'Telur Ayam', harga: 'Rp. 28.500 / Kg', status: 'Turun' },
    { icon: '/test.jpg', nama: 'Minyak Goreng', harga: 'Rp. 17.000 / Ltr', status: 'Stabil' },
    { icon: '/test.jpg', nama: 'Gula Pasir', harga: 'Rp. 14.000 / Kg', status: 'Naik' },
  ];

  return (
    <aside className="w-full md:w-96 rounded-2xl shadow-xl flex flex-col text-base transition-all duration-300 animate-fade-in overflow-hidden bg-[#f9f9f9] dark:bg-gray-800">
      
      {/* HEADER MOTIF */}
      <div
        className="w-full h-[40px] bg-no-repeat bg-top"
        style={{
          backgroundImage: "url('/lampungyay.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'top',
          marginBottom: '-1px'
        }}
      ></div>

      {/* ISI SIDEBAR */}
      <div className="p-6 space-y-8">
        {/* Pencarian */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cari informasi..."
            className="w-full py-3 px-4 rounded-lg bg-[#fff6e6] text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-sm"
          />
        </div>

        {/* Pilih Bahasa */}
        <div>
          <p className="font-semibold mb-2 text-sm text-gray-700 dark:text-gray-200">Pilih Bahasa</p>
          <div className="flex flex-col gap-2 bg-white dark:bg-gray-700 rounded-lg p-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <img src="/indonesia.jpg" alt="ID" className="w-6 h-4 rounded shadow" />
              <span className="text-sm text-gray-800 dark:text-white">Indonesia</span>
              <input type="radio" name="lang" defaultChecked className="ml-auto accent-yellow-500" />
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <img src="/inggris.jpg" alt="EN" className="w-6 h-4 rounded shadow" />
              <span className="text-sm text-gray-800 dark:text-white">English</span>
              <input type="radio" name="lang" className="ml-auto accent-yellow-500" />
            </label>
          </div>
        </div>

        {/* Call Center */}
        <div className="bg-gradient-to-r from-[#0d2b59] to-[#081d3a] text-white p-6 rounded-xl text-center shadow-md">
          <div className="flex justify-center items-center space-x-2 mb-1">
            <FaPhoneAlt size={18} />
            <span className="font-bold uppercase text-sm tracking-wide">Call Center</span>
          </div>
          <p className="text-2xl font-bold tracking-wider">0811 7905 000</p>
        </div>

        {/* Logo FOLA */}
        <div className="flex justify-center">
          <a
            href="https://invest.lampungprov.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/fola.png"
              alt="Forum Investasi Lampung"
              className="w-auto max-w-[250px] object-contain"
            />
          </a>
        </div>

        {/* Harga Pasar */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow space-y-4 border border-gray-100 dark:border-gray-700 max-h-72 overflow-y-auto">
          <div className="bg-[#081d3a] text-white px-4 py-2 rounded-lg text-center font-bold">
            PASAR PASIR GINTUNG
          </div>
          {hargaPasar.map((item, index) => (
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
          ))}
        </div>

        {/* Lihat Semua Harga Pasar */}
        <div className="text-center">
          <Link
            to="/harga-pasar"
            className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Lihat Semua Harga Pasar
          </Link>
        </div>

        {/* Kontak Pemerintah */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">📍 Kontak</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Informasi Kontak Resmi</p>
            <div className="mt-2 border-b border-gray-200 dark:border-gray-700" />
          </div>

          <div className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
            <div className="text-center">
              <p className="font-bold uppercase text-sm tracking-wider">
                PEMERINTAH PROVINSI LAMPUNG
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">📌</span>
              <div>
                <p className="font-semibold">Alamat:</p>
                <p>Jl. WR. Mongonsidi No.69<br />Teluk Betung</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <p><span className="font-semibold">Telepon:</span> (0721) 475270</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:info@lampungprov.go.id"
                  className="text-blue-600 hover:underline hover:text-blue-700 transition"
                >
                  info@lampungprov.go.id
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Sosial Media */}
        <div className="flex justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {[
            { icon: 'facebook-f', color: 'blue-500' },
            { icon: 'twitter', color: 'blue-400' },
            { icon: 'instagram', color: 'pink-500' },
            { icon: 'youtube', color: 'red-600' },
          ].map((sosmed, i) => (
            <a
              key={i}
              href="#"
              className={`text-gray-500 hover:text-${sosmed.color} transition`}
            >
              <i className={`fab fa-${sosmed.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* FOOTER MOTIF */}
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
