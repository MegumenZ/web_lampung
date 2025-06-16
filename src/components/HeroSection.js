import React from 'react';
import './HeroSection.css'; // Untuk animasi typewriter

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/gas.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 md:px-12 text-white">

        {/* Sapaan */}
        <p className="text-2xl md:text-3xl font-bold tracking-widest text-white/90 font-serif mb-2 uppercase drop-shadow-xl">
          Selamat Datang di
        </p>

        {/* Judul dengan efek ketik */}
        <h1 className="typewriter text-4xl md:text-6xl font-extrabold tracking-wide leading-tight text-yellow-400 mb-6 drop-shadow-2xl">
          Website Resmi Pemerintah Provinsi Lampung
        </h1>

        {/* Motto */}
        <h2 className="text-xl md:text-3xl italic font-light tracking-wide text-white/90 relative mb-12">
          <span className="relative z-10 transition-all duration-300 ease-in-out hover:scale-105">
            Sang Bumi Ruwa Jurai
          </span>
          <span className="absolute left-1/2 bottom-0 w-[110%] h-[3px] bg-yellow-400 blur-sm rounded-full -translate-x-1/2 animate-pulse"></span>
        </h2>

        {/* Search Bar */}
        <div className="w-full max-w-xl flex flex-col md:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Cari informasi publik..."
            className="flex-1 py-3 px-5 rounded-full shadow-lg text-gray-900 bg-white/90 focus:outline-none w-full"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition">
            Cari
          </button>
        </div>

        {/* CTA Button */}
        <button className="mt-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-medium px-6 py-2 rounded-full shadow transition">
          Lihat Profil
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
