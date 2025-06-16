import React from 'react';

function PimpinanSection() {
  return (
    <section
      id="pimpinan"
      className="relative py-20 px-6 md:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/motif-lampung.jpg')" }} // ganti dengan motif khas Lampung
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-12">
          Pimpinan Daerah
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gubernur */}
          <div className="flex flex-col items-center">
            <img
              src="/gubernur.png"
              alt="Gubernur Lampung"
              className="w-[280px] h-[380px] object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
            <h3 className="mt-6 text-xl font-semibold text-yellow-300">RAHMAT MIRZANI DJAUSAL, S.T, M.M</h3>
            <p className="text-sm text-white/80">Gubernur Provinsi Lampung</p>
          </div>

          {/* Wakil Gubernur */}
          <div className="flex flex-col items-center">
            <img
              src="/wakil.png"
              alt="Wakil Gubernur Lampung"
              className="w-[280px] h-[380px] object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
            <h3 className="mt-6 text-xl font-semibold text-yellow-300">dr. JIHAN NURLELA, M.M.</h3>
            <p className="text-sm text-white/80">Wakil Gubernur Provinsi Lampung</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PimpinanSection;
