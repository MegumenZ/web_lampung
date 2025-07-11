import React, { useState } from 'react';
import { HiMenu, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import SidebarMobile from './SidebarMobile'; // Sidebar Kiri Mobile
import SidebarKananMobile from './SidebarKananMobile'; // Sidebar Kanan Mobile
import AccessibilityMenuMobile from './AccessibilityMenuMobile'; // Menu Aksesibilitas Mobile

const NavbarMenuMobile = ({ onOpenNavbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // untuk toggle menu
  const [showSidebarLeft, setShowSidebarLeft] = useState(false);
  const [showSidebarRight, setShowSidebarRight] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false); // Aksesibilitas
  const [openSubmenu, setOpenSubmenu] = useState(null); // Tambahkan state untuk submenu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle visibility of the main menu
  };

  const openSidebarLeft = () => {
    setShowSidebarLeft(true);
  };

  const closeSidebarLeft = () => {
    setShowSidebarLeft(false);
  };

  const openSidebarRight = () => {
    setShowSidebarRight(true);
  };

  const closeSidebarRight = () => {
    setShowSidebarRight(false);
  };

  const handleLinkClick = () => {
    setShowSidebarLeft(false); // Tutup sidebar kiri
    setShowSidebarRight(false); // Tutup sidebar kanan
    setIsMenuOpen(false); // Tutup menu utama
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu); // Toggle submenu
  };

  const menus = [
    { name: 'Home', to: '/' },
    {
      name: 'Keterbukaan Informasi',
      submenu: [
        {
          label: 'Informasi Publik',
          to: '/keterbukaan-informasi/publik',
          children: [
            { label: 'Dokumen Transparansi Keuangan', to: '/keterbukaan-informasi/publik/daftar' },
            { label: 'Informasi Berkala', to: '/keterbukaan-informasi/publik/berkala' },
            { label: 'Informasi Serta Merta', to: '/keterbukaan-informasi/publik/serta-merta' },
          ],
        },
        {
          label: 'Tentang PPID',
          to: '/keterbukaan-informasi/ppid',
          children: [
            { label: 'Struktur Organisasi', to: '/keterbukaan-informasi/ppid/struktur' },
            { label: 'Tugas & Fungsi', to: '/keterbukaan-informasi/ppid/tugas-fungsi' },
            { label: 'Visi & Misi', to: '/keterbukaan-informasi/ppid/visi-misi' },
          ],
        },
        {
          label: 'Permohonan Informasi',
          to: '/keterbukaan-informasi/permohonan',
          children: [
            { label: 'Formulir Permohonan', to: '/keterbukaan-informasi/permohonan/formulir' },
            { label: 'Prosedur', to: '/keterbukaan-informasi/permohonan/prosedur' },
            { label: 'Hak & Kewajiban', to: '/keterbukaan-informasi/permohonan/hak-kewajiban' },
          ],
        },
      ],
    },
    {
      name: 'Berita',
      submenu: [{ label: 'Semua Berita', to: '/berita' }],
    },
    {
      name: 'Informasi',
      submenu: [
        { label: 'Pariwisata', external: true, to: 'https://disparekraf.lampungprov.go.id/' },
        { label: 'Informasi Harga', external: true, to: 'https://disperindag.lampungprov.go.id/pasar/semua' },
        { label: 'Lampung Dalam Angka', to: '/lampung-dalam-angka' },
        { label: 'Investasi', external: true, to: 'https://invest.lampungprov.go.id/' },
      ],
    },
    {
      name: 'Kontak',
      submenu: [{ label: 'Kontak Kami', to: '/kontak' }],
    },
    {
      name: 'Profil',
      submenu: [
        { label: 'Sejarah', to: '/profil-Sejarah' },
        { label: 'Pimpinan Daerah', to: '/profil-pimpinan' },
        { label: 'Profil Kepala OPD', to: '/profil-kepala-opd' },
        { label: 'LHKPN', to: '/profil-LHKPN' },
        { label: 'Visi & Misi', to: '/profil-VisiMisi' },
        { label: 'Ruang Lingkup', to: '/profil-RuangLingkup' },
        {
          label: 'Struktur Organisasi',
          children: [
            { label: 'Struktur Provinsi', to: '/struktur-organisasi-provinsi' },
            { label: 'Struktur Perangkat', to: '/struktur-organisasi-perangkat-daerah' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F] text-white py-5 px-3 flex items-center justify-between shadow-lg">
      {/* Logo dan Judul */}
      <div className="flex items-center gap-2 w-full justify-between">
        <img src="/logo.png" alt="Logo" className="h-8 md:h-10" />
        <div className="leading-tight text-center flex-grow">
          <h1 className="text-xs sm:text-sm font-bold">Pemerintah Provinsi</h1>
          <h2 className="text-xs sm:text-sm font-light tracking-wide">Lampung</h2>
        </div>
      </div>

      {/* Tombol Aksesibilitas dan Sidebar */}
      <div className="flex items-center gap-3 text-2xl">
        <button onClick={openSidebarLeft} className="hover:text-yellow-400 transition-colors" aria-label="Sidebar Kiri">
          <HiChevronLeft />
        </button>
        <button onClick={toggleMenu} className="text-white hover:text-yellow-400 transition-colors" aria-label="Menu Utama">
          <HiMenu />
        </button>
        <button onClick={openSidebarRight} className="hover:text-yellow-400 transition-colors" aria-label="Sidebar Kanan">
          <HiChevronRight />
        </button>
        <button onClick={() => setShowAccessibility(true)} className="hover:text-yellow-400 transition-colors" aria-label="Aksesibilitas">
          ♿
        </button>
      </div>

      {/* Menu Toggle */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gradient-to-r from-[#102027] via-[#263238] to-[#37474F] text-white py-6 transition-all duration-300`}>
        <ul className="space-y-4 px-4">
          {menus.map(({ name, to, submenu }) => (
            <li key={name}>
              {to ? (
                <Link to={to} className="text-lg hover:text-yellow-400" onClick={() => { handleLinkClick(); toggleMenu(); }}>
                  {name}
                </Link>
              ) : (
                <div>
                  <button onClick={() => toggleSubmenu(name)} className="text-lg hover:text-yellow-400 flex justify-between items-center w-full">
                    {name} <HiChevronRight className="inline text-sm" />
                  </button>
                  {openSubmenu === name && submenu && (
                    <ul className="pl-5 space-y-2">
                      {submenu.map((item) => (
                        <li key={item.label}>
                          <Link to={item.to} className="text-sm hover:text-yellow-400" onClick={() => { handleLinkClick(); }}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Kiri */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${showSidebarLeft ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <SidebarMobile closeSidebar={closeSidebarLeft} />
      </div>

      {/* Sidebar Kanan */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${showSidebarRight ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <SidebarKananMobile closeSidebar={closeSidebarRight} />
      </div>

      {/* Aksesibilitas */}
      {showAccessibility && (
        <AccessibilityMenuMobile onClose={() => setShowAccessibility(false)} />
      )}
    </div>
  );
};

export default NavbarMenuMobile;
