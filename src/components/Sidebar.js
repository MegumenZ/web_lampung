// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdGTranslate } from 'react-icons/md';

const Sidebar = () => {
  const menuItems = [
    { icon: '🏛️', label: 'Pelayanan Publik', link: '/pelayanan-publik', external: false },
    { icon: '📊', label: 'Open Data Lampung', link: 'https://data.lampungprov.go.id/', external: true },
    { icon: '🗂️', label: 'PPID Lampung', link: 'https://ppid.lampungprov.go.id/', external: true },
    { icon: '⚙️', label: 'Tata Kelola', link: '/tata-kelola', external: false },
    { icon: '🏖️', label: 'Pariwisata', link: 'https://disparekraf.lampungprov.go.id/', external: true },
    { icon: '📱', label: 'Apps Provinsi', link: '/apps-provinsi', external: false },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-16 group hover:w-64 bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F] text-white transition-all duration-500 ease-in-out z-50 flex flex-col items-center py-6 space-y-6 overflow-hidden shadow-md hover:scale-[1.03] hover:shadow-xl hover:shadow-yellow-400/30">
      
      {/* Logo & Teks */}
      <div className="flex flex-col items-start px-4 w-full">
        <img src="/logo.png" alt="Logo" className="w-10 mb-1" />
        <span className="text-xs font-semibold tracking-tight whitespace-nowrap group-hover:opacity-100 opacity-0 transition-opacity duration-300">
          PEMPROV LAMPUNG
        </span>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col items-start px-5 space-y-6 w-full mt-9">
        {menuItems.map((item, idx) => (
          item.external ? (
            <a
              href={item.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="whitespace-nowrap group-hover:inline-block hidden transition-opacity duration-300">{item.label}</span>
            </a>
          ) : (
            <Link
              to={item.link}
              key={idx}
              className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="whitespace-nowrap group-hover:inline-block hidden transition-opacity duration-300">{item.label}</span>
            </Link>
          )
        ))}
      </nav>

      <div className="flex-grow" />

      {/* Bahasa */}
      <div className="flex items-center space-x-3 px-4">
        <MdGTranslate className="text-lg" />
        <span className="text-sm group-hover:inline-block hidden">Bahasa/EN</span>
      </div>

      {/* Media Sosial */}
      <div className="flex items-center space-x-3 px-4 pt-4">
        <a href="https://www.facebook.com/officialpemprovlampung/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaFacebookF />
        </a>
        <a href="https://x.com/LampungProv_" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/pemprovlampung_/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@pemprov_lampung" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaYoutube />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
