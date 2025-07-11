import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWheelchair,
} from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import Translations from '../data/Translation';
import AccessibilityMenu from './AccessibilityMenu'; // ⬅️ Tambahkan

const Sidebar = () => {
  const { language } = useContext(LanguageContext);
  const t = Translations[language];
  const [showAccessibility, setShowAccessibility] = useState(false); // ⬅️ State untuk panel

  useEffect(() => {
    const handleToggle = () => setShowAccessibility((prev) => !prev);
    document.addEventListener('toggleAccessibility', handleToggle);
    return () => {
      document.removeEventListener('toggleAccessibility', handleToggle);
    };
  }, []);

  const menuItems = [
    { icon: '🏛️', label: t.pelayananPublik, link: '/pelayanan-publik', external: false },
    { icon: '📊', label: t.openDataLampung, link: 'https://data.lampungprov.go.id/', external: true },
    { icon: '🗂️', label: t.ppidLampung, link: 'https://ppid.lampungprov.go.id/', external: true },
    { icon: '⚙️', label: t.tataKelola, link: '/tata-kelola', external: false },
    { icon: '🏖️', label: t.pariwisata, link: 'https://disparekraf.lampungprov.go.id/', external: true },
    {
      icon: '📱',
      label: t.appsProvinsi,
      link: 'https://play.google.com/store/apps/developer?id=Pemerintah+Provinsi+Lampung&hl=id',
      external: true,
    },
  ];

  return (
    <>
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-16 group hover:w-64 bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F] text-white transition-all duration-500 ease-in-out z-50 flex-col items-center py-6 space-y-6 overflow-hidden shadow-md hover:scale-[1.03] hover:shadow-xl hover:shadow-yellow-400/30">
        
        {/* Logo & Teks */}
        <div className="flex flex-col items-start px-4 w-full">
          <img src="/logo.png" alt="Logo" className="w-10 mb-1" />
          <span className="text-xs font-semibold tracking-tight whitespace-nowrap group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            {t.pemprovLampung}
          </span>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col items-start px-5 space-y-6 w-full mt-9">
          {menuItems.map((item, idx) =>
            item.external ? (
              <a
                href={item.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="whitespace-nowrap group-hover:inline-block hidden transition-opacity duration-300">
                  {item.label}
                </span>
              </a>
            ) : (
              <Link
                to={item.link}
                key={idx}
                className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="whitespace-nowrap group-hover:inline-block hidden transition-opacity duration-300">
                  {item.label}
                </span>
              </Link>
            )
          )}
        </nav>

        {/* Tombol Aksesibilitas */}
        <div className="flex items-center px-5 mt-4 w-full">
          <button
            onClick={() => document.dispatchEvent(new Event('toggleAccessibility'))}
            className="flex items-center space-x-3 text-sm hover:text-yellow-400 cursor-pointer focus:outline-none"
          >
            <FaWheelchair className="text-xl" />
            <span className="whitespace-nowrap group-hover:inline-block hidden transition-opacity duration-300">
              {t.aksesibilitas.aksesibilitas} {/* Menggunakan terjemahan untuk "Aksesibilitas" */}
            </span>
          </button>
        </div>

        <div className="flex-grow" />

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

      {/* Panel Aksesibilitas */}
      {showAccessibility && (
        <AccessibilityMenu onClose={() => setShowAccessibility(false)} />
      )}
    </>
  );
};

export default Sidebar;
