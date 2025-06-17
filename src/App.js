import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BeritaDetail from './pages/BeritaDetail';
import PelayananPublik from './pages/PelayananPublik';
import ProfilPimpinan from './pages/ProfilPimpinan';
import ProfilKepalaOpd from './pages/ProfilKepalaOpd';
import LHKPN from './pages/LHKPN';
import Video from './pages/Video';
import Image from './pages/Image';
import VisiMisi from './pages/VisiMisi';
import RuangLingkup from './pages/RuangLingkup';
import Sejarah from './pages/Sejarah'
import TataKelola from './pages/TataKelola'
import HargaPasarList from './pages/HargaPasarList';
import PasarDetail from './pages/PasarDetail';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import Berita from './pages/Berita';








function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/pelayanan-publik" element={<PelayananPublik />} />
          <Route path="/tata-kelola" element={<TataKelola />} />
          <Route path="/profil-pimpinan" element={<ProfilPimpinan />} />
          <Route path="/profil-kepala-opd" element={<ProfilKepalaOpd />} />
          <Route path="/profil-LHKPN" element={<LHKPN />} />
          <Route path="/profil-VisiMisi" element={<VisiMisi />} />
          <Route path="/profil-RuangLingkup" element={<RuangLingkup />} />
          <Route path="/profil-Sejarah" element={<Sejarah />} />
          <Route path="/profil-StrukturOrgano" element={<StrukturOrganisasi/>} />
          <Route path="/profil-StrukturOrganisasi" element={<StrukturOrganisasi />} />
          <Route path="/galeri-Image" element={<Image/>} />
          <Route path="/galeri-Video" element={<Video />} />
          <Route path="/berita" element={<Berita />} /> 




           <Route path="/harga-pasar" element={<HargaPasarList />} />
          <Route path="/harga-pasar/:namaPasar" element={<PasarDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
