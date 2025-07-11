import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWheelchair } from 'react-icons/fa';
import { MdGTranslate } from 'react-icons/md';
import { LanguageContext } from '../contexts/LanguageContext';
import Translation from '../data/Translation';
import AccessibilityMenu from './AccessibilityMenu';

const SidebarMobile = ({ closeSidebar }) => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = Translation[language];
  const sidebarRef = useRef(null);
  const [showAccessibility, setShowAccessibility] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, );

  useEffect(() => {
    const handleToggle = () => setShowAccessibility((prev) => !prev);
    document.addEventListener('toggleAccessibility', handleToggle);
    return () => document.removeEventListener('toggleAccessibility', handleToggle);
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
      <aside
        ref={sidebarRef}
        className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F] text-white z-50 shadow-md px-5 py-6 overflow-y-auto"
      >
        {/* Logo & Teks */}
        <div className="flex flex-col items-start mb-4">
          <img src="/logo.png" alt="Logo" className="w-10 mb-2" />
          <span className="text-xs font-semibold tracking-tight">{t.pemprovLampung}</span>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-5">
          {menuItems.map((item, idx) =>
            item.external ? (
              <a
                href={item.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-yellow-400"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ) : (
              <Link
                to={item.link}
                key={idx}
                className="flex items-center space-x-3 text-sm hover:text-yellow-400"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )
          )}
        </nav>

        {/* Aksesibilitas */}
        <div className="mt-6">
          <button
            onClick={() => document.dispatchEvent(new Event('toggleAccessibility'))}
            className="flex items-center space-x-3 text-sm hover:text-yellow-400 focus:outline-none"
          >
            <FaWheelchair className="text-xl" />
            <span>Aksesibilitas</span>
          </button>
        </div>

        {/* Bahasa */}
        <div className="mt-6">
          <div className="flex items-center space-x-3 mb-2">
            <MdGTranslate className="text-lg" />

          </div>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => changeLanguage('id')}
              className={`flex items-center gap-2 text-sm hover:text-yellow-400 transition ${
                language === 'id' ? 'font-semibold text-yellow-400' : ''
              }`}
            >
              <img src="/indonesia.jpg" alt="ID" className="w-5 h-3 rounded shadow" />
              Indonesia
              {language === 'id' && <span className="ml-auto text-xs">✔</span>}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center gap-2 text-sm hover:text-yellow-400 transition ${
                language === 'en' ? 'font-semibold text-yellow-400' : ''
              }`}
            >
              <img src="/inggris.jpg" alt="EN" className="w-5 h-3 rounded shadow" />
              English
              {language === 'en' && <span className="ml-auto text-xs">✔</span>}
            </button>
          </div>
        </div>

        {/* Kontak */}
        <div className="mt-6">
          <a
            href="https://www.facebook.com/officialpemprovlampung/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-sm hover:text-yellow-400"
          >
            <FaPhoneAlt className="text-lg" />
            <span>Kontak Kami</span>
          </a>
        </div>

        {/* Tombol Tutup */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-yellow-500 text-2xl hover:text-yellow-400"
        >
          X
        </button>
      </aside>

      {/* Panel Aksesibilitas */}
      {showAccessibility && (
        <AccessibilityMenu onClose={() => setShowAccessibility(false)} />
      )}
    </>
  );
};

export default SidebarMobile;
