'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PotensiItem {
  title: string;
  description: string;
  icon: string;
}

export default function ProfilPage() {
  const [expandedPotential, setExpandedPotential] = useState<string | null>(null);

  const demografis = [
    { label: 'Laki-laki', value: 347, color: 'from-blue-400 to-blue-600' },
    { label: 'Perempuan', value: 324, color: 'from-pink-400 to-pink-600' },
  ];

  const usia = [
    { label: '0 - 17 Tahun', value: 160 },
    { label: '18 - 56 Tahun', value: 386 },
    { label: '56+ Tahun', value: 119 },
  ];

  const potensiDesa: PotensiItem[] = [
    {
      title: 'Potensi Tanah',
      description: 'Areal tanah yang subur cocok untuk berbagai jenis tanaman yang dapat mendorong perekonomian desa ke tingkat yang lebih baik.',
      icon: 'tanah',
    },
    {
      title: 'Potensi Peternakan',
      description: 'Sektor peternakan dengan fokus pada ternak babi, sapi, dan ayam. Kawasan ini melimpah dengan sumber cadangan makanan ternak.',
      icon: 'ternak',
    },
    {
      title: 'Potensi Penduduk',
      description: 'Jumlah penduduk yang besar merupakan sumber cadangan tenaga kerja yang luar biasa untuk pengembangan ekonomi lokal.',
      icon: 'penduduk',
    },
    {
      title: 'Potensi Transportasi',
      description: 'Sarana transportasi yang sudah mencukupi dari segi jalan, angkutan, dan sumber daya manusia yang memadai.',
      icon: 'transport',
    },
    {
      title: 'Potensi Perumahan',
      description: 'Banyaknya rumah yang layak tinggal menunjukkan infrastruktur dasar yang sudah tertanam dengan baik di desa ini.',
      icon: 'rumah',
    },
    {
      title: 'Potensi Alam',
      description: 'Sebagai desa pesisir, Minanga Dua memiliki ekosistem mangrove yang signifikan sebagai aset sumber daya alam yang berharga.',
      icon: 'alam',
    },
  ];

  const PotensiIcon = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
      tanah: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/></svg>,
      ternak: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10.5 12H8v-2h2.5V12zm5 0H13v-2h2.5V12zM19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-7 3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm5.5 11c-.42 0-.82-.09-1.19-.25-.21.16-.46.25-.72.25-.55 0-1.05-.22-1.41-.59-.36.37-.86.59-1.41.59-.56 0-1.05-.22-1.41-.59-.37.37-.86.59-1.41.59-.27 0-.52-.09-.73-.25-.37.16-.77.25-1.19.25-1.66 0-3-1.34-3-3 0-.23.03-.46.08-.68-.03-.01-.05-.01-.08-.01 0-1.1.9-2 2-2h1.5V9h5v2.31H16c1.1 0 2 .9 2 2-.03 0-.05 0-.08.01.05.22.08.45.08.68 0 1.66-1.34 3-3 3z"/></svg>,
      penduduk: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
      transport: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>,
      rumah: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
      alam: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>,
    };
    return icons[type] || <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-20 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt="Village aerial view"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-300 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-4 animate-fade-in-down">
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-sm shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Data & Statistik
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg animate-fade-in-up">Profil Desa Minanga Dua</h1>
          <p className="text-white/90 text-lg drop-shadow-md animate-fade-in-up animation-delay-200">Informasi lengkap tentang desa kami</p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-16 bg-gradient-to-b from-cyan-50/30 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Lokasi dan Administrasi */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group animate-fade-in-left">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-200/20 to-transparent rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 flex items-center gap-2 relative z-10">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-md animate-float">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </span>
                Lokasi & Administrasi
              </h2>
              <div className="space-y-4 relative z-10">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg hover:from-teal-100 hover:to-cyan-100 transition-all transform hover:scale-105 border border-teal-100">
                  <p className="text-sm font-semibold text-teal-700">PROVINSI</p>
                  <p className="text-lg text-gray-800 font-bold">Sulawesi Utara</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg hover:from-cyan-100 hover:to-blue-100 transition-all transform hover:scale-105 border border-cyan-100">
                  <p className="text-sm font-semibold text-cyan-700">KABUPATEN</p>
                  <p className="text-lg text-gray-800 font-bold">Minahasa Tenggara</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg hover:from-blue-100 hover:to-teal-100 transition-all transform hover:scale-105 border border-blue-100">
                  <p className="text-sm font-semibold text-blue-700">KECAMATAN</p>
                  <p className="text-lg text-gray-800 font-bold">Pusomaen</p>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg hover:from-teal-100 hover:to-cyan-100 transition-all transform hover:scale-105 border border-teal-100">
                  <p className="text-sm font-semibold text-teal-700">KODE POS</p>
                  <p className="text-lg text-gray-800 font-bold">95997</p>
                </div>
              </div>
            </div>

            {/* Geografis */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group animate-fade-in-right">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6 flex items-center gap-2 relative z-10">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md animate-wave">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.92V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.08c0-.41.25-.78.63-.93L12 12l8.37 3.99c.38.15.63.52.63.93z"/><path d="M12 2L3.63 5.99A1 1 0 003 6.92V9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V6.92a1 1 0 00-.63-.93L12 2z"/></svg>
                </span>
                Geografis & Wilayah
              </h2>
              <div className="space-y-4 relative z-10">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg hover:from-orange-100 hover:to-amber-100 transition-all transform hover:scale-105 border border-orange-100">
                  <p className="text-sm font-semibold text-orange-700">LUAS WILAYAH</p>
                  <p className="text-lg text-gray-800 font-bold">1,47 km²</p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-all transform hover:scale-105 border border-amber-100">
                  <p className="text-sm font-semibold text-amber-700">KETINGGIAN</p>
                  <p className="text-lg text-gray-800 font-bold">±15 meter dari permukaan laut</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg hover:from-orange-100 hover:to-amber-100 transition-all transform hover:scale-105 border border-orange-100">
                  <p className="text-sm font-semibold text-orange-700">TIPE DESA</p>
                  <p className="text-lg text-gray-800 font-bold">Desa Pesisir</p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-all transform hover:scale-105 border border-amber-100">
                  <p className="text-sm font-semibold text-amber-700">KARAKTERISTIK</p>
                  <p className="text-lg text-gray-800 font-bold">Area dengan iklim tropis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Demografi Section */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-16 border-2 border-gray-100 overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8 flex items-center gap-2 relative z-10">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-md animate-float">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </span>
              Demografi Penduduk
            </h2>

            {/* Total Penduduk */}
            <div className="mb-8 p-8 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 rounded-2xl shadow-xl border-2 border-cyan-300 relative z-10 overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full filter blur-2xl"></div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                </div>
                <p className="text-center text-5xl font-bold text-white relative z-10 drop-shadow-lg">671 Jiwa</p>
              </div>
              <p className="text-center text-white/90 font-semibold mt-2 relative z-10 drop-shadow-md">Total Penduduk Desa Minanga Dua</p>
            </div>

            {/* Gender Distribution */}
            <div className="mb-12 relative z-10">
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent mb-6">Distribusi Berdasarkan Jenis Kelamin</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demografis.map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 overflow-hidden group relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-lg font-semibold mb-2 relative z-10">{item.label}</p>
                    <p className="text-4xl font-bold relative z-10 drop-shadow-lg">{item.value}</p>
                    <p className="text-sm mt-2 opacity-90 relative z-10">Jiwa ({((item.value / 671) * 100).toFixed(1)}%)</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Distribution */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent mb-6">Distribusi Berdasarkan Kelompok Usia</h3>
              <div className="space-y-4">
                {usia.map((item, idx) => {
                  const colors = [
                    { bg: 'from-green-50 to-emerald-50', bar: 'from-green-500 to-emerald-600', text: 'text-green-700' },
                    { bg: 'from-orange-50 to-amber-50', bar: 'from-orange-500 to-amber-600', text: 'text-orange-700' },
                    { bg: 'from-blue-50 to-cyan-50', bar: 'from-blue-500 to-cyan-600', text: 'text-blue-700' },
                  ];
                  const style = colors[idx];
                  return (
                    <div key={idx} className={`bg-gradient-to-r ${style.bg} rounded-xl p-4 shadow-md hover:shadow-xl transition-all transform hover:scale-102 border border-gray-100`}>
                      <div className="flex justify-between items-center mb-2">
                        <p className={`font-bold ${style.text}`}>{item.label}</p>
                        <p className={`font-bold text-lg ${style.text}`}>{item.value} Jiwa</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                        <div
                          className={`bg-gradient-to-r ${style.bar} h-full transition-all duration-500 shadow-md`}
                          style={{ width: `${(item.value / 671) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 font-medium">{((item.value / 671) * 100).toFixed(1)}% dari total penduduk</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Fasilitas Pendidikan */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 mb-16 border-l-4 border-cyan-600 overflow-hidden hover:shadow-2xl transition-all group animate-fade-in-up animation-delay-100">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-200/20 to-transparent rounded-bl-full group-hover:scale-110 transition-transform"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6 flex items-center gap-2 relative z-10">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md animate-bounce-in">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
              </span>
              Fasilitas Pendidikan
            </h2>
            <div className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-cyan-200 shadow-md hover:shadow-lg transition-shadow z-10">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/></svg>
                </span>
                SD GMIM 362 Minanga
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-bold text-cyan-700">Lokasi:</span> Minanga Dua, Jaga 1</p>
                <p><span className="font-bold text-cyan-700">Status:</span> Sekolah Dasar</p>
                <p className="text-sm mt-3 text-gray-600 font-medium">Fasilitas pendidikan dasar yang melayani pendidikan anak-anak di desa ini</p>
              </div>
            </div>
          </div>

          {/* Potensi Desa */}
          <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-8 mb-16 shadow-xl border-2 border-orange-200 overflow-hidden animate-fade-in-up animation-delay-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-300/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 flex items-center gap-2 relative z-10">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md animate-glow">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
              </span>
              Potensi Desa
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed relative z-10 font-medium">
              Desa Minanga Dua memiliki berbagai potensi yang beragam. Meskipun desa ini tergolong tertinggal dibandingkan dengan desa lain di Kecamatan Pusomaen, 
              namun dengan jumlah penduduk yang semakin bertambah, potensi ini dapat menumbuhkan pergerakan ekonomi jika dibina dan diarahkan dengan benar.
            </p>

            <div className="space-y-4 relative z-10">
              {potensiDesa.map((item, idx) => {
                const colors = [
                  { border: 'border-teal-300 hover:border-teal-500', bg: 'from-white to-teal-50 hover:from-teal-50 hover:to-teal-100', title: 'from-teal-600 to-cyan-600' },
                  { border: 'border-orange-300 hover:border-orange-500', bg: 'from-white to-orange-50 hover:from-orange-50 hover:to-orange-100', title: 'from-orange-600 to-amber-600' },
                  { border: 'border-blue-300 hover:border-blue-500', bg: 'from-white to-blue-50 hover:from-blue-50 hover:to-blue-100', title: 'from-blue-600 to-cyan-600' },
                  { border: 'border-green-300 hover:border-green-500', bg: 'from-white to-green-50 hover:from-green-50 hover:to-green-100', title: 'from-green-600 to-emerald-600' },
                  { border: 'border-purple-300 hover:border-purple-500', bg: 'from-white to-purple-50 hover:from-purple-50 hover:to-purple-100', title: 'from-purple-600 to-indigo-600' },
                  { border: 'border-emerald-300 hover:border-emerald-500', bg: 'from-white to-emerald-50 hover:from-emerald-50 hover:to-emerald-100', title: 'from-emerald-600 to-green-600' },
                ];
                const style = colors[idx % colors.length];
                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-r ${style.bg} rounded-xl border-2 ${style.border} overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-102`}
                    onClick={() => setExpandedPotential(expandedPotential === item.title ? null : item.title)}
                  >
                    <div className="p-6 flex items-center justify-between transition-colors">
                      <div className="flex items-center gap-4">
                        <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${style.title} flex items-center justify-center text-white shadow-md transform hover:scale-110 transition-transform`}>
                          <PotensiIcon type={item.icon} />
                        </span>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${style.title} bg-clip-text text-transparent`}>{item.title}</h3>
                      </div>
                      <span className={`text-2xl transition-transform duration-300 ${expandedPotential === item.title ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                    {expandedPotential === item.title && (
                      <div className="px-6 pb-6 pt-0 border-t border-gray-200 bg-white/50 animate-slide-down">
                        <p className="text-gray-700 text-lg leading-relaxed pt-4 font-medium">{item.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pembangunan dan Tata Kelola */}
          <div className="relative bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white rounded-2xl p-8 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all animate-fade-in-up animation-delay-300">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-48 h-48 bg-orange-400 rounded-full filter blur-3xl group-hover:scale-110 transition-transform animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-300 rounded-full filter blur-3xl group-hover:scale-110 transition-transform animate-float"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-300 rounded-full filter blur-3xl animate-pulse-slow"></div>
            </div>
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 drop-shadow-lg">
                <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6H6z"/></svg>
                </span>
                Pembangunan & Tata Kelola
              </h2>
              <p className="text-white/90 text-lg leading-relaxed drop-shadow-md font-medium">
                Pemerintah Desa Minanga Dua aktif dalam merealisasikan program-program pembangunan yang bermanfaat bagi masyarakat. 
                Berbagai inisiatif telah dilakukan, termasuk penyaluran Bantuan Langsung Tunai (BLT), Program Ketahanan Pangan Desa 
                melalui pendanaan dari Dana Desa, serta berbagai kegiatan pemberdayaan masyarakat lainnya yang dirancang untuk meningkatkan 
                kesejahteraan dan kualitas hidup penduduk Desa Minanga Dua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
