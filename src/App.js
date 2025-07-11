// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import NavbarMenuMobile from './components/NavbarMenuMobile';
import Sidebar from './components/Sidebar';
import ShareButton from './components/ShareButton';
import AccessibilityMenu from './components/AccessibilityMenu';
import { FontSizeProvider } from './contexts/FontSizeContext';


import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaComment,
  FaLinkedin,
  FaTelegram,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

import Home from './pages/Home';
import Berita from './pages/Berita';
import PelayananPublik from './pages/PelayananPublik';
import ProfilPimpinan from './pages/ProfilPimpinan';
import ProfilKepalaOpd from './pages/ProfilKepalaOpd';
import LHKPN from './pages/LHKPN';
import VisiMisi from './pages/VisiMisi';
import RuangLingkup from './pages/RuangLingkup';
import Sejarah from './pages/Sejarah';
import TataKelola from './pages/TataKelola';
import Kanal from './pages/Kanal';
import Kontak from './pages/Kontak';
import TataCara from './pages/TataCara';
import LampungDalamAngka from './pages/LampungDalamAngka';
import InformasiKeuangan from './pages/InformasiKeuangan';
import TransparansiPerizinan from './pages/TransparansiPerizinan';
import ProfilPPID from './pages/ProfilPPID';
import InfoPerangkatDaerah from './components/InfoPerangkatDaerah';
import Video from './pages/Video';
import Image from './pages/Image';
import StrukturOrganisasiProvinsi from './pages/StrukturOrganisasiProvinsi';
import StrukturOrganisasiPerangkatDaerah from './pages/StrukturOrganisasiPerangkatDaerah';
import IPKD2018 from './pages/IPKD2018';
import IPKD2019 from './pages/IPKD2019';
import IPKD2020 from './pages/IPKD2020';
import IPKD2021 from './pages/IPKD2021';
import IPKD2022 from './pages/IPKD2022';
import IPKD2023 from './pages/IPKD2023';
import IPKD2024 from './pages/IPKD2024';
import TransparansiKeuangan from './pages/TransparansiKeuangan';
import HargaPasarList from './pages/HargaPasarList';
import PasarInfo from './pages/PasarInfo';
import HargaKomoditas from './pages/HargaKomoditas';
import SearchResult from './components/SearchResult';

function App() {
  const currentUrl = window.location.href;
  const [showAccessibility, setShowAccessibility] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setShowAccessibility((prev) => !prev);
    };
    document.addEventListener('toggleAccessibility', handleToggle);
    return () => {
      document.removeEventListener('toggleAccessibility', handleToggle);
    };
  }, []);

  useEffect(() => {
    const isContrast = localStorage.getItem('contrast');
    if (isContrast === 'on') {
      document.getElementById('root-wrapper')?.classList.add('high-contrast');
    }
  }, []);

  return (
    <LanguageProvider>
      <FontSizeProvider>
        <Router>
          <div id="root-wrapper" className="min-h-screen">
            <ScrollToTop />

            {/* Navbar Desktop */}
            <div className="hidden md:block">
              <Navbar />
            </div>

            {/* Sidebar Desktop */}
            <div className="hidden md:block">
              <Sidebar />
            </div>

            {/* Navbar Mobile */}
            <div className="block md:hidden">
              <NavbarMenuMobile />
            </div>

            <div className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/berita" element={<Berita />} />
                <Route path="/pelayanan-publik" element={<PelayananPublik />} />
                <Route path="/profil-pimpinan" element={<ProfilPimpinan />} />
                <Route path="/profil-kepala-opd" element={<ProfilKepalaOpd />} />
                <Route path="/profil-LHKPN" element={<LHKPN />} />
                <Route path="/profil-VisiMisi" element={<VisiMisi />} />
                <Route path="/profil-RuangLingkup" element={<RuangLingkup />} />
                <Route path="/profil-Sejarah" element={<Sejarah />} />
                <Route path="/profil-Kanal" element={<Kanal />} />
                <Route path="/kontak" element={<Kontak />} />
                <Route path="/tata-cara-pengaduan" element={<TataCara />} />
                <Route path="/lampung-dalam-angka" element={<LampungDalamAngka />} />
                <Route path="/profil-TataKelola" element={<TataKelola />} />
                <Route path="/informasi-keuangan" element={<InformasiKeuangan />} />
                <Route path="/transparansi-perizinan" element={<TransparansiPerizinan />} />
                <Route path="/profil-ppid" element={<ProfilPPID />} />
                <Route path="/galeri-Image" element={<Image />} />
                <Route path="/galeri-Video" element={<Video />} />
                <Route path="/struktur-organisasi-provinsi" element={<StrukturOrganisasiProvinsi />} />
                <Route path="/struktur-organisasi-perangkat-daerah" element={<StrukturOrganisasiPerangkatDaerah />} />
                <Route path="/ipkd2018" element={<IPKD2018 />} />
                <Route path="/ipkd2019" element={<IPKD2019 />} />
                <Route path="/ipkd2020" element={<IPKD2020 />} />
                <Route path="/ipkd2021" element={<IPKD2021 />} />
                <Route path="/ipkd2022" element={<IPKD2022 />} />
                <Route path="/ipkd2023" element={<IPKD2023 />} />
                <Route path="/ipkd2024" element={<IPKD2024 />} />
                <Route path="/transparansi" element={<TransparansiKeuangan />} />
                <Route path="/harga-pasar" element={<HargaPasarList />} />
                <Route path="/harga-pasar/:slug" element={<PasarInfo />} />
                <Route path="/harga-komoditas" element={<HargaKomoditas />} />
                <Route path="/search" element={<SearchResult />} />
                <Route path="/info-perangkat" element={<InfoPerangkatDaerah />} />
              </Routes>

              <div className="w-full flex flex-wrap justify-start items-center gap-2 mt-1 px-6 overflow-x-auto">
                <ShareButton
                  icon={<FaFacebook />}
                  label="Facebook"
                  url={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                  bgColor="bg-blue-600"
                  hoverColor="hover:bg-blue-700"
                />
                <ShareButton
                  icon={<FaTwitter />}
                  label="Twitter"
                  url={`https://twitter.com/intent/tweet?url=${currentUrl}`}
                  bgColor="bg-sky-500"
                  hoverColor="hover:bg-sky-600"
                />
                <ShareButton
                  icon={<FaWhatsapp />}
                  label="WhatsApp"
                  url={`https://api.whatsapp.com/send?text=${currentUrl}`}
                  bgColor="bg-green-500"
                  hoverColor="hover:bg-green-600"
                />
                <ShareButton
                  icon={<FaComment />}
                  label="SMS"
                  url={`sms:?&body=${currentUrl}`}
                  bgColor="bg-yellow-500"
                  hoverColor="hover:bg-yellow-600"
                />
                <ShareButton
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  url={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}
                  bgColor="bg-blue-700"
                  hoverColor="hover:bg-blue-800"
                />
                <ShareButton
                  icon={<FaTelegram />}
                  label="Telegram"
                  url={`https://t.me/share/url?url=${currentUrl}`}
                  bgColor="bg-teal-500"
                  hoverColor="hover:bg-teal-600"
                />
                <ShareButton
                  icon={<FaPinterest />}
                  label="Pinterest"
                  url={`https://pinterest.com/pin/create/button/?url=${currentUrl}`}
                  bgColor="bg-red-500"
                  hoverColor="hover:bg-red-600"
                />
                <ShareButton
                  icon={<FaInstagram />}
                  label="Instagram"
                  url={`https://www.instagram.com/?url=${currentUrl}`}
                  bgColor="bg-gradient-to-r from-purple-600 to-pink-500"
                  hoverColor="hover:bg-gradient-to-l from-purple-700 to-pink-600"
                />
              </div>
            </div>

            {showAccessibility && (
              <AccessibilityMenu onClose={() => setShowAccessibility(false)} />
            )}
          </div>
        </Router>
      </FontSizeProvider>
    </LanguageProvider>
  );
}

export default App;
