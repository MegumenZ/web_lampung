import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import Translation from '../data/Translation';

function HeroSection() {
  const { language } = useContext(LanguageContext);
  const t = Translation[language];
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="hero-section-bg w-full h-full object-cover absolute top-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none"
        src="/gas.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full h-full px-4 md:px-12 text-white">
        {/* Greeting */}
        <p className="text-base sm:text-lg font-bold tracking-widest text-white/90 font-serif mb-2 uppercase drop-shadow-xl">
          {language === 'id' ? 'Selamat Datang di' : 'Welcome to'}
        </p>

        {/* Title */}
        <h1 className="typewriter text-yellow-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-3 font-extrabold tracking-wide leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[90vw] mx-auto text-center break-words">
          {language === 'id'
            ? 'Website Resmi Pemerintah Provinsi Lampung'
            : 'Official Website of Lampung Provincial Government'}
        </h1>

        {/* Motto */}
        <h2 className="text-sm sm:text-lg italic font-light tracking-wide text-white/90 relative mb-8">
          <span className="relative z-10 hover:scale-105 transition duration-300">
            Sang Bumi Ruwa Jurai
          </span>
          <span className="absolute left-1/2 bottom-0 w-[110%] h-[3px] bg-yellow-400 blur-sm rounded-full -translate-x-1/2 animate-pulse"></span>
        </h2>

        {/* Search Input */}
        <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t?.cariInformasi || 'Cari informasi publik...'}
            className="flex-1 py-3 px-5 rounded-full shadow-lg text-gray-900 bg-white/90 focus:outline-none w-full text-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition text-lg"
          >
            {language === 'id' ? 'Cari' : 'Search'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
