import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

function ProfilKepalaOpd() {
  const dataOPD = [
    {
      no: 1,
      nama: 'Inspektorat Lampung',
      link: 'https://inspektorat.lampungprov.go.id/pegawai/all',
    },
    {
      no: 2,
      nama: 'Badan Perencanaan Daerah',
      link: 'https://bappeda.lampungprov.go.id/pages/profile-kepala-bappeda',
    },
    {
      no: 3,
      nama: 'Sekretariat DPRD',
      link: 'https://setwan-dprd.lampungprov.go.id/pages/ketua-dprd',
    },
    {
      no: 4,
      nama: 'Badan Pengelolaan Keuangan dan Aset Daerah',
      link: 'https://bpkad.lampungprov.go.id/profile-pejabat',
    },
    { no: 5, nama: 'Badan Pendapatan Daerah', link: '' },
    { no: 6, nama: 'Badan Kepegawaian Daerah', link: '' },
    {
      no: 7,
      nama: 'Badan Pengembangan SDM Daerah',
      link: 'https://bpsdm.lampungprov.go.id/pegawai/all',
    },
    { no: 8, nama: 'Badan Penanggulangan Bencana Daerah', link: '' },
    { no: 9, nama: 'Badan Pendidikan dan Kebudayaan', link: '' },
    {
      no: 10,
      nama: 'Dinas Pemuda dan Olahraga',
      link: 'https://dispora.lampungprov.go.id/pegawai/all',
    },
    {
      no: 11,
      nama: 'Dinas Kesehatan',
      link: 'https://dinkes.lampungprov.go.id/profil-pejabat-dinas-kesehatan-provinsi-lampung-update-agustus-2016/',
    },
    {
      no: 12,
      nama: 'Dinas Sosial',
      link: 'https://dinsos.lampungprov.go.id/pegawai/all',
    },
    {
      no: 13,
      nama: 'Dinas Perhubungan',
      link: 'https://dishub.lampungprov.go.id/pegawai/all',
    },
    { no: 14, nama: 'Dinas Perkebunan', link: '' },
    {
      no: 15,
      nama: 'Dinas Kehutanan',
      link: 'https://dishut.lampungprov.go.id/pages/kepala-dinas',
    },
    { no: 16, nama: 'Dinas Bina Marga dan Bina Konstruksi', link: '' },
    {
      no: 17,
      nama: 'Dinas Perindustrian dan Perdagangan',
      link: 'https://disperindag.lampungprov.go.id/pages/profile-kepala',
    },
  ];

 return (
  <div className="flex min-h-screen bg-[#0f172a] text-white animate-fade-in">
    {/* Sidebar Kiri */}
    <Sidebar />

    {/* Konten Tengah */}
    <main className="flex-1 px-6 py-10 overflow-x-auto ml-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-yellow-300">
          Profil Kepala OPD
        </h1>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full table-auto border border-gray-700 text-sm md:text-base">
            <thead className="bg-[#2e3b4e] text-white sticky top-0 z-10">
              <tr>
                <th className="border px-4 py-2 text-left">No</th>
                <th className="border px-4 py-2 text-left">Perangkat Daerah Provinsi Lampung</th>
                <th className="border px-4 py-2 text-left">Link Data Profil Kepala Dinas/Pegawai</th>
              </tr>
            </thead>
            <tbody>
              {dataOPD.map((item) => (
                <tr key={item.no} className="even:bg-[#2c3848] hover:bg-[#3a4b61] transition duration-200">
                  <td className="border px-4 py-2">{item.no}</td>
                  <td className="border px-4 py-2">{item.nama}</td>
                  <td className="border px-4 py-2">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {item.link}
                      </a>
                    ) : (
                      <span className="italic text-gray-400">Belum ada</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>

    {/* Sidebar Kanan */}
    <SidebarKanan />
    </div>
  );
}
export default ProfilKepalaOpd;
