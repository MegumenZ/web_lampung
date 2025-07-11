import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import Translations from '../data/Translation';
import { MdGTranslate } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi'; // Ikon hamburger dan close

import { motion, AnimatePresence } from 'framer-motion';
import AccessibilityMenuMobile from '../components/AccessibilityMenuMobile';



function Navbar() {
  
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  
  

  const { language, changeLanguage } = useContext(LanguageContext);
  const t = Translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { name: t.beranda, to: '/' },
    {
      name: t.keterbukaanInformasi,
      submenu: [
        {
           label: t.informasiPublik
,
        to: '/keterbukaan-informasi/publik',
        children: [
          { label: t.dokumenTransparansi, to: '/transparansi-keuangan' },
          {
            label: t.informasiKeuangan, to: '/informasi-keuangan', 
          },
          { label: t.transparansiPerizinan, to: '/transparansi-perizinan' },
        ]
      }, 
  
      ]
    },
    {
      name: t.berita,
      megaMenu: true, // ⬅ ini yang ditambahkan
  submenu: [
    {
      label: "Sebar Konten Pornografi, 3 Admin...",
      to: "https://regional.kompas.com/read/2025/07/07/132449078/sebar-konten-pornografi-3-admin-grup-gay-facebook-di-lampung-ditangkap",
      image: "/berita12.jpg"
    },
    {
      label: "3 Polisi Ditembak Mati di Judi...",
      to: "https://regional.kompas.com/read/2025/07/07/161925578/3-polisi-ditembak-mati-di-lokasi-judi-sabung-ayam-saksi-forensik-bripka",
      image: "/berita11.jpg"
    },
    {
      label: "Dokter Forensik Ungkap Kematian...",
      to: "https://regional.kompas.com/read/2025/07/07/131838278/dokter-forensik-ungkap-penyebab-kematian-3-polisi-di-way-kanan-lampung",
      image: "/berita10.jpg"
    },
    {
      label: t.semuaBerita,
      to: "/berita",
      isAllNews: true 
    }
  ]
},
    {
      name: t.informasi,
      submenu: [
        { label: t.pariwisata, external: true, to: 'https://disparekraf.lampungprov.go.id/' },
        { label: t.informasiHarga, external: true, to: 'https://disperindag.lampungprov.go.id/pasar/semua' },
        { label: t.lampungDalamAngka, to: '/lampung-dalam-angka' },
        { label: t.investasi, external: true, to: 'https://invest.lampungprov.go.id/' },
      ]
    },
    {
      name: t.kontak,
      submenu: [{ label: t.kontakKami, to: '/kontak' }],
    },
    {
      name: t.ipkd,
      submenu: [
        { label: `${t.ipkd} 2018`, to: '/ipkd2018' },
        { label: `${t.ipkd} 2019`, to: '/ipkd2019' },
        { label: `${t.ipkd} 2020`, to: '/ipkd2020' },
        { label: `${t.ipkd} 2021`, to: '/ipkd2021' },
        { label: `${t.ipkd} 2022`, to: '/ipkd2022' },
        { label: `${t.ipkd} 2023`, to: '/ipkd2023' },
        { label: `${t.ipkd} 2024`, to: '/ipkd2024' },
      ]
    },
    {
      name: t.profil,
      submenu: [
        { label: t.sejarah, to: '/profil-Sejarah' },
        { label: t.pimpinanDaerah, to: '/profil-pimpinan' },
        { label: t.KepalaOPD, to: '/profil-kepala-opd' },
        { label: 'LHKPN', to: '/profil-LHKPN' },
        { label: t.visiMisi, to: '/profil-VisiMisi' },
        { label: t.ruangLingkup, to: '/profil-RuangLingkup' },
        {
          label: t.strukturOrganisasi,
          children: [
            { label: t.strukturProvinsi, to: '/struktur-organisasi-provinsi' },
            { label: t.strukturPerangkat, to: '/struktur-organisasi-perangkat-daerah' },
          ]
        },
        { label: t.kanalRegulasi, to: '/profil-Kanal' },
        {
          label: 'Kanal Produk Hukum',
          externalChildren: [
            { label: 'JDIH Lampung', href: 'https://jdih.lampungprov.go.id/' },
            { label: 'JDIH DPRD Lampung', href: 'https://jdih.setwan-dprd.lampungprov.go.id/web/home' },
          ]
        },
        {
          label: t.informasiKomunikasi,
          children: [
            { label: 'Website', external: true, to: 'https://www.lampungprov.go.id' },
            { label: 'Social Media', external: true, to: 'https://linktr.ee/SosmedPemprovLp' },
          ]
        },
        {
          label: t.kanalPengaduan,
          children: [
            { label: t.tataCaraPengaduan, to: '/tata-cara-pengaduan' },
            {
              label: 'Call Center',
              external: true,
              to: 'https://api.whatsapp.com/send?phone=628117905000&text=Halo%20Saya%20...%0AMau%20Lapor',
            },
            {
              label: 'SPAN Lapor',
              external: true,
              to: 'https://www.lapor.go.id/instansi/pemerintah-provinsi-lampung',
            },
          ]
        },
      ]
    },
    {
      name: t.galeri,
      submenu: [
        { label: t.gambar, to: '/galeri-Image' },
        { label: t.video, to: '/galeri-Video' },
        { label: 'Short Video', to: 'https://www.youtube.com/@pemprov_lampung/shorts' },
        {label: 'Tiktok', to: 'https://www.tiktok.com/@pemprov.lampung'},
      ]
    },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#102027] shadow-md' : 'bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F]'}`}>
      <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-4 group">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        <div className="leading-tight">
          <span className="text-white font-bold text-lg block group-hover:text-yellow-300">
            {t.pemprovLampung}
          </span>
          <span className="text-white text-xs font-light tracking-wider group-hover:text-yellow-200">
            Sang Bumi Ruwa Jurai
          </span>
        </div>

        {/* Pilih Bahasa */}
        <div className="relative group ml-4">
          <button className="text-xs text-white font-medium hover:text-yellow-400 flex items-center gap-1">
            <MdGTranslate className="text-lg" />
            <span className="text-xs">▼</span>
          </button>
          <div className="absolute left-0 top-full mt-2 w-48 bg-[#263238] rounded-lg shadow-lg p-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <button
              onClick={() => changeLanguage('id')}
              className={`flex items-center gap-2 text-sm w-full text-left px-3 py-2 rounded hover:text-yellow-400 ${
                language === 'id' ? 'font-semibold text-yellow-400' : 'text-white'
              }`}
            >
              <img src="/indonesia.jpg" alt="ID" className="w-5 h-3 rounded shadow" />
              Indonesia
              {language === 'id' && <span className="ml-auto text-xs">✔</span>}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center gap-2 text-sm w-full text-left px-3 py-2 rounded hover:text-yellow-400 ${
                language === 'en' ? 'font-semibold text-yellow-400' : 'text-white'
              }`}
            >
              <img src="/inggris.jpg" alt="EN" className="w-5 h-3 rounded shadow" />
              English
              {language === 'en' && <span className="ml-auto text-xs">✔</span>}
            </button>
          </div>
        </div>
      </div>

          



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
                      className="font-medium text-sm text-white hover:text-yellow-400"
                    >
                      {name}
                    </Link>
                  ) : (
                    <button className="font-medium text-sm text-white hover:text-yellow-400 flex items-center gap-1 group">
                      {name}
                      {submenu?.length > 0 && (
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition duration-200">
                          ▼
                        </span>
                    )}
                  </button>

                  )}

                  {submenu && submenu.length > 0 && (
                    <div
                      className={`absolute right-0 ${
                        name === t.berita ? 'w-80' : 'min-w-[260px]'
                      } bg-[#263238] rounded-lg shadow-lg mt-2 p-4 z-20 transition-all duration-300 ${
                        dropdownOpen === name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {name === t.berita && (
                        <h3 className="text-white text-sm font-semibold mb-3 border-b border-gray-500 pb-2">
                          Berita Populer Saat Ini
                        </h3>
                      )}

                      {submenu.map((item) =>
                        item.children ? (
                          <div key={item.label} className="relative group/item">
                            <div className="flex items-center gap-2 text-white hover:text-yellow-400 text-sm py-2 cursor-default">
                              <span className="text-white">◀</span>
                              <span>{item.label}</span>
                            </div>
                            <div className="absolute right-full top-0 mr-4 w-56 bg-[#263238] rounded-lg shadow-lg p-4 z-30 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                              {item.children.map((child) =>
                                child.external ? (
                                  <a
                                    key={child.label}
                                    href={child.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-white hover:text-yellow-400 text-sm py-1"
                                  >
                                    {child.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    className="block text-white hover:text-yellow-400 text-sm py-1"
                                  >
                                    {child.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        ) : item.externalChildren ? (
                          <div key={item.label} className="relative group/item">
                            <div className="flex items-center gap-2 text-white hover:text-yellow-400 text-sm py-2 cursor-default">
                              <span className="text-white">◀</span>
                              <span>{item.label}</span>
                            </div>
                            <div className="absolute right-full top-0 mr-4 w-56 bg-[#263238] rounded-lg shadow-lg p-4 z-30 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                              {item.externalChildren.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-white hover:text-yellow-400 text-sm py-1"
                                >
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : item.image ? (
                          <a
                            key={item.label}
                            href={item.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 py-2 px-2 hover:bg-gray-700 rounded"
                          >
                            <img
                              src={item.image}
                              alt={item.label}
                              className="w-14 h-14 object-cover rounded"
                            />
                            <span className="text-white text-sm">{item.label}</span>
                          </a>
                        ) : item.external ? (
                          <a
                            key={item.label}
                            href={item.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-white hover:text-yellow-400 text-sm py-2"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="block text-white hover:text-yellow-400 text-sm py-2"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}

                </div>
              ))}
            </nav>

        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#263238] px-6 py-4 space-y-4">
          {menus.map(({ name, to, submenu }) => (
            <div key={name} className="space-y-2">
              {to ? (
                <Link to={to} className="block text-white hover:text-yellow-400">{name}</Link>
              ) : (
                <>
                  <button className="w-full text-left text-white font-medium" onClick={() => setOpenSubmenu(openSubmenu === name ? null : name)}>
                    {name}
                  </button>
                  {openSubmenu === name && (
                    <div className="pl-4 space-y-1">
                      {submenu.map((item) =>
                        item.children ? (
                          <div key={item.label}>
                            <p className="text-white text-sm font-semibold">{item.label}</p>
                            <div className="pl-4 space-y-1">
                              {item.children.map((child) =>
                                child.external ? (
                                  <a key={child.label} href={child.to} target="_blank" rel="noopener noreferrer" className="block text-white text-sm hover:text-yellow-400">{child.label}</a>
                                ) : (
                                  <Link key={child.label} to={child.to} className="block text-white text-sm hover:text-yellow-400">{child.label}</Link>
                                )
                              )}
                            </div>
                          </div>
                        ) : item.externalChildren ? (
                          <div key={item.label}>
                            <p className="text-white text-sm font-semibold">{item.label}</p>
                            <div className="pl-4 space-y-1">
                              {item.externalChildren.map((child) => (
                                <a key={child.label} href={child.href} target="_blank" rel="noopener noreferrer" className="block text-white text-sm hover:text-yellow-400">{child.label}</a>
                              ))}
                            </div>
                          </div>
                        ) : item.external ? (
                          <a key={item.label} href={item.to} target="_blank" rel="noopener noreferrer" className="block text-white text-sm hover:text-yellow-400">{item.label}</a>
                        ) : (
                          <Link key={item.label} to={item.to} className="block text-white text-sm hover:text-yellow-400">{item.label}</Link>
                        )
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="h-[10px] bg-repeat-x" style={{ backgroundImage: "url('/motif-tipis.png')", backgroundSize: 'contain' }}></div>
    </header>
  );
}

export default Navbar;
