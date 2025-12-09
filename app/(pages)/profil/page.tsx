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
      icon: '🌾',
    },
    {
      title: 'Potensi Peternakan',
      description: 'Sektor peternakan dengan fokus pada ternak babi, sapi, dan ayam. Kawasan ini melimpah dengan sumber cadangan makanan ternak.',
      icon: '🐄',
    },
    {
      title: 'Potensi Penduduk',
      description: 'Jumlah penduduk yang besar merupakan sumber cadangan tenaga kerja yang luar biasa untuk pengembangan ekonomi lokal.',
      icon: '👥',
    },
    {
      title: 'Potensi Transportasi',
      description: 'Sarana transportasi yang sudah mencukupi dari segi jalan, angkutan, dan sumber daya manusia yang memadai.',
      icon: '🚗',
    },
    {
      title: 'Potensi Perumahan',
      description: 'Banyaknya rumah yang layak tinggal menunjukkan infrastruktur dasar yang sudah tertanam dengan baik di desa ini.',
      icon: '🏠',
    },
    {
      title: 'Potensi Alam',
      description: 'Sebagai desa pesisir, Minanga Dua memiliki ekosistem mangrove yang signifikan sebagai aset sumber daya alam yang berharga.',
      icon: '🌳',
    },
  ];

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
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-sm shadow-lg">📊 Data & Statistik</span>
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
                <span className="text-3xl animate-float">📍</span> Lokasi & Administrasi
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
                <span className="text-3xl animate-wave">🌊</span> Geografis & Wilayah
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
              <span className="text-3xl animate-float">👥</span> Demografi Penduduk
            </h2>

            {/* Total Penduduk */}
            <div className="mb-8 p-8 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 rounded-2xl shadow-xl border-2 border-cyan-300 relative z-10 overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full filter blur-2xl"></div>
              <p className="text-center text-5xl font-bold text-white relative z-10 drop-shadow-lg">👥 671 Jiwa</p>
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
              <span className="text-3xl animate-bounce-in">🎓</span> Fasilitas Pendidikan
            </h2>
            <div className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-cyan-200 shadow-md hover:shadow-lg transition-shadow z-10">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent mb-3 flex items-center gap-2">
                <span className="text-2xl">🏫</span> SD GMIM 362 Minanga
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
              <span className="text-3xl animate-glow">💡</span> Potensi Desa
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
                        <span className="text-4xl transform hover:scale-110 transition-transform">{item.icon}</span>
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
                <span className="text-3xl">🏗️</span> Pembangunan & Tata Kelola
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
