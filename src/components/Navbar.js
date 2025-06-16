import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { name: 'Beranda', to: '/' },
    { name: 'Berita', submenu: [] },
    { name: 'Informasi', submenu: [] },
    { name: 'Kontak', submenu: [] },
    { name: 'IPKD', submenu: [] },
    {
      name: 'Profil',
      submenu: [
        { label: 'Pimpinan Daerah', to: '/profil-pimpinan' },
        { label: 'Profil Kepala OPD', to: '/profil-kepala-opd' },
        { label: 'LHKPN', to: '/profil-LHKPN' },
        { label: 'Visi Misi', to: '/profil-VisiMisi' },
        { label: 'Ruang Lingkup Pemerintah Provinsi Lampung', to: '/profil-RuangLingkup' },
        {label: 'Sejarah', to: 'profil-Sejarah'},
      ],
    },
    { name: 'Galeri', 
      submenu: [
        { label: 'Image', to: '/galeri-Image' },
        { label: 'Video', to: '/galeri-Video' },
      ],
     },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#102027] shadow-md'
          : 'bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F]'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Text */}
        <div className="flex items-center gap-4 group">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <span className="text-white font-bold text-lg block transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:text-yellow-300 drop-shadow-[0_0_6px_rgba(255,255,200,0.6)]">
              PEMPROV LAMPUNG
            </span>
            <span className="text-white text-xs font-light tracking-wider transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:text-yellow-200 drop-shadow-[0_0_4px_rgba(255,255,200,0.5)]">
              Sai Bumi Ruwa Jurai
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {menus.map(({ name, to, submenu }) => (
              
              <div
                key={name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >

              {to ? (
                <Link
                  to={to}
                  className="font-medium text-sm text-white hover:text-yellow-400 flex items-center gap-1 transition duration-300"
                >
                  {name}
                </Link>
              ) : (
                <button
                  className="font-medium text-sm text-white hover:text-yellow-400 flex items-center gap-1 transition duration-300"
                >
                  {name} {submenu.length > 0 && <span className="text-xs">▼</span>}
                </button>
              )}

              {/* Dropdown Submenu */}
                {submenu && submenu.length > 0 && (
                  <div
                    className={`absolute right-0 md:left-auto w-56 bg-[#263238] rounded-lg shadow-lg mt-2 p-4 z-10 transition-all duration-300 ease-in-out ${
                      dropdownOpen === name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >

                  {submenu.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block text-white hover:text-yellow-400 text-sm py-2 transition duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hamburger (dummy untuk mobile) */}
        <div className="md:hidden">
          <button
            onClick={() =>
              setDropdownOpen(dropdownOpen === 'mobile' ? null : 'mobile')
            }
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {dropdownOpen === 'mobile' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Motif Tapis Garis Bawah */}
      <div
        className="h-[10px] bg-repeat-x"
        style={{
          backgroundImage: "url('/motif-tipis.png')",
          backgroundSize: 'contain',
        }}
      ></div>
    </header>
  );
}

export default Navbar;
