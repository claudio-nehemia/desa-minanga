'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MapFeature {
  id: string;
  name: string;
  type: 'landmark' | 'facility' | 'natural' | 'infrastructure';
  description: string;
  icon: string;
  coordinates?: string;
}

interface StatCard {
  title: string;
  value: string;
  icon: string;
  color: string;
}

export default function PetaPage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [showLegend, setShowLegend] = useState(true);
  const [imageError, setImageError] = useState(false);

  const mapFeatures: MapFeature[] = [
    {
      id: 'gmahk',
      name: 'GMAHK Minanga',
      type: 'landmark',
      description: 'Gereja dengan arsitektur yang indah, menjadi landmark utama desa',
      icon: '⛪',
      coordinates: 'Jaga 1',
    },
    {
      id: 'gmim',
      name: 'GMIM Betlehem',
      type: 'landmark',
      description: 'Gereja yang melayani komunitas lokal dengan berbagai kegiatan sosial',
      icon: '⛪',
      coordinates: 'Jaga 2',
    },
    {
      id: 'sdgmim',
      name: 'SD GMIM 362 Minanga',
      type: 'facility',
      description: 'Sekolah Dasar yang menjadi pusat pendidikan anak-anak desa',
      icon: '🎓',
      coordinates: 'Jaga 1',
    },
    {
      id: 'kantor-hukum',
      name: 'Kantor Hukum Tua Desa',
      type: 'infrastructure',
      description: 'Kantor administrasi desa yang menjalankan pemerintahan lokal',
      icon: '🏛️',
      coordinates: 'Pusat Desa',
    },
    {
      id: 'masjid-mutaqin',
      name: 'Masjid Al-Mutaqin',
      type: 'landmark',
      description: 'Tempat ibadah yang melayani komunitas muslim desa',
      icon: '🕌',
      coordinates: 'Jaga 2',
    },
    {
      id: 'gpdi-eben',
      name: 'GPDI Eben Heazer',
      type: 'landmark',
      description: 'Gereja Pentakosta untuk pelayanan spiritual masyarakat',
      icon: '⛪',
      coordinates: 'Jaga 3',
    },
    {
      id: 'jalan-pekuburan',
      name: 'Jalan Pekuburan',
      type: 'infrastructure',
      description: 'Jalan utama yang menghubungkan berbagai bagian desa',
      icon: '🛣️',
      coordinates: 'Selatan Desa',
    },
    {
      id: 'pantai',
      name: 'Pantai Minanga',
      type: 'natural',
      description: 'Pantai pesisir dengan potensi ekosistem mangrove yang kaya',
      icon: '🌊',
      coordinates: 'Timur Desa',
    },
    {
      id: 'mangrove',
      name: 'Ekosistem Mangrove',
      type: 'natural',
      description: 'Area mangrove yang menjadi habitat penting dan sumber daya alam',
      icon: '🌳',
      coordinates: 'Pesisir Timur',
    },
    {
      id: 'lapangan',
      name: 'Lapangan',
      type: 'infrastructure',
      description: 'Ruang terbuka untuk olahraga dan kegiatan komunitas',
      icon: '⚽',
      coordinates: 'Jaga 1',
    },
  ];

  const legendItems = [
    { type: 'landmark', label: 'Landmark/Bangunan Ibadah', color: 'bg-red-500', icon: '📍' },
    { type: 'facility', label: 'Fasilitas Publik', color: 'bg-blue-500', icon: '🏢' },
    { type: 'infrastructure', label: 'Infrastruktur', color: 'bg-yellow-500', icon: '🛣️' },
    { type: 'natural', label: 'Sumber Daya Alam', color: 'bg-green-500', icon: '🌿' },
  ];

  const statCards: StatCard[] = [
    { title: 'Luas Wilayah', value: '1,47 km²', icon: '📍', color: 'from-teal-500 to-cyan-600' },
    { title: 'Jumlah Penduduk', value: '671 Jiwa', icon: '👥', color: 'from-blue-500 to-indigo-600' },
    { title: 'Ketinggian', value: '±15 mdpl', icon: '⛰️', color: 'from-green-500 to-emerald-600' },
    { title: 'Tipe Desa', value: 'Pesisir', icon: '🌊', color: 'from-orange-500 to-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-orange-50/30">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-sm shadow-lg">🗺️ Peta Interaktif</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Peta Desa Minanga Dua</h1>
          <p className="text-white/90 text-lg drop-shadow-md">Jelajahi lokasi penting dan fitur geografis desa</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cream-200 hover:border-orange-300 transition-all hover:shadow-2xl">
                {/* Map Container */}
                <div className="relative bg-gray-100 overflow-hidden group">
                  {/* Gambar Peta Asli */}
                  {!imageError ? (
                    <div className="relative w-full">
                      <Image
                        src="/peta.png"
                        alt="Peta Desa Minanga Dua"
                        width={1200}
                        height={900}
                        className="w-full h-auto object-contain"
                        priority
                        onError={() => setImageError(true)}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-96 md:h-[600px] bg-gradient-to-br from-cream-200 to-brown-100 flex items-center justify-center">
                      <div className="text-center p-8">
                        <p className="text-2xl mb-4">🗺️</p>
                        <p className="text-brown-700 font-semibold">Simpan gambar peta sebagai 'peta.png' di folder 'public'</p>
                        <p className="text-sm text-brown-600 mt-2">Path: public/peta.png</p>
                      </div>
                    </div>
                  )}

                  {/* Info Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cream-100/95 via-white/95 to-orange-50/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border-2 border-orange-200 hover:scale-105 transition-transform">
                    <p className="text-sm font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-2">
                      <span>📍</span> Luas: 1,47 km² • Desa Pesisir
                    </p>
                  </div>

                  {/* Legend Toggle */}
                  {/* <button
                    onClick={() => setShowLegend(!showLegend)}
                    className="absolute top-4 right-4 bg-gradient-to-r from-brown-700 to-brown-800 text-white px-4 py-2 rounded-xl hover:from-brown-600 hover:to-brown-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm font-semibold"
                  >
                    {showLegend ? '🗺️ Tutup Legenda' : '🗺️ Buka Legenda'}
                  </button> */}
                </div>

                {/* Legend */}
                {/* {showLegend && (
                  <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-5 max-w-xs animate-slide-down border-2 border-brown-200">
                    <h3 className="font-bold text-brown-800 mb-4 flex items-center gap-2 text-lg">
                      <span>🗺️</span> Legenda Peta
                    </h3>
                    <div className="space-y-3">
                      {legendItems.map((item) => (
                        <div key={item.type} className="flex items-center gap-3 bg-cream-50 p-2 rounded-lg hover:bg-cream-100 transition-colors">
                          <span className={`w-5 h-5 rounded-full ${item.color} shadow-md`}></span>
                          <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>

              {/* Map Info */}
              <div className="mt-4 bg-gradient-to-r from-cream-50 via-orange-50 to-cream-50 rounded-xl p-4 border-2 border-orange-200 shadow-md hover:shadow-lg transition-shadow">
                <p className="text-sm text-gray-700 flex items-start gap-2 font-medium">
                  <span className="text-lg">💡</span>
                  <span><strong className="text-orange-700">Tips:</strong> Klik pada marker di peta atau daftar lokasi untuk melihat informasi detail. Gunakan tombol legenda untuk menampilkan/menyembunyikan kategori.</span>
                </p>
              </div>
            </div>

            {/* Features List Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 h-fit border-2 border-cream-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  <span className="text-3xl">📍</span> Lokasi & Fasilitas
                </h2>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {mapFeatures.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 transform hover:scale-102 ${
                        selectedFeature === feature.id
                          ? 'bg-gradient-to-r from-teal-100 via-cyan-100 to-teal-100 border-teal-600 shadow-lg scale-105'
                          : 'bg-gradient-to-r from-cream-50 to-white border-cream-300 hover:border-teal-400 hover:bg-cream-100 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-2xl">{feature.icon}</span>
                        <div className="flex-1">
                          <p className={`font-bold ${
                            selectedFeature === feature.id
                              ? 'bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent'
                              : 'text-gray-800'
                          }`}>{feature.name}</p>
                          <p className="text-xs text-gray-600 mt-1 font-medium">{feature.coordinates}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          {selectedFeature && (
            <div className="mt-8 bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-orange-600 animate-slide-down hover:shadow-3xl transition-shadow">
              {mapFeatures.map((feature) => {
                if (feature.id === selectedFeature) {
                  return (
                    <div key={feature.id}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-6xl bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-2xl shadow-md">{feature.icon}</div>
                        <div>
                          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{feature.name}</h2>
                          <p className="text-brown-600 font-semibold">{feature.type.charAt(0).toUpperCase() + feature.type.slice(1)}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-cream-50 p-6 rounded-xl">
                          <h3 className="text-lg font-bold text-brown-800 mb-3 flex items-center gap-2">
                            <span>📝</span> Deskripsi
                          </h3>
                          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                        </div>
                        <div className="bg-gradient-to-br from-brown-50 to-cream-100 rounded-xl p-6 border-2 border-brown-200">
                          <h3 className="text-lg font-bold text-brown-800 mb-3 flex items-center gap-2">
                            <span>📍</span> Lokasi
                          </h3>
                          <p className="text-gray-700 mb-4 font-semibold">{feature.coordinates}</p>
                          <button
                            onClick={() => setSelectedFeature(null)}
                            className="text-brown-700 font-semibold hover:text-brown-900 transition-colors bg-white px-4 py-2 rounded-lg hover:shadow-md"
                          >
                            ← Tutup Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}

          {/* Stat Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 overflow-hidden group relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-5xl mb-3 relative z-10 transform group-hover:scale-110 transition-transform drop-shadow-lg">{stat.icon}</div>
                <h3 className="font-bold text-lg mb-2 opacity-90 relative z-10">{stat.title}</h3>
                <p className="text-3xl font-bold relative z-10 drop-shadow-md">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Info Cards dengan Ilustrasi */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative bg-gradient-to-br from-teal-100 via-cyan-100 to-teal-100 rounded-2xl p-6 text-teal-900 shadow-xl hover:shadow-2xl transition-all overflow-hidden group border-2 border-teal-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-300/30 rounded-full filter blur-2xl group-hover:scale-150 transition-transform"></div>
              <p className="text-5xl mb-3 relative z-10 drop-shadow-md">📊</p>
              <h3 className="font-bold text-lg mb-2 relative z-10">Statistik Wilayah</h3>
              <p className="text-sm relative z-10 font-medium">Luas 1,47 km² dengan populasi 671 jiwa, terletak di ketinggian ±15 meter dari permukaan laut</p>
            </div>
            <div className="relative bg-gradient-to-br from-orange-100 via-amber-100 to-orange-100 rounded-2xl p-6 text-orange-900 shadow-xl hover:shadow-2xl transition-all overflow-hidden group border-2 border-orange-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-300/30 rounded-full filter blur-2xl group-hover:scale-150 transition-transform"></div>
              <p className="text-5xl mb-3 relative z-10 drop-shadow-md">🌊</p>
              <h3 className="font-bold text-lg mb-2 relative z-10">Desa Pesisir</h3>
              <p className="text-sm relative z-10 font-medium">Memiliki akses ke pantai dengan ekosistem mangrove yang signifikan sebagai aset alam berharga</p>
            </div>
            <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-100 rounded-2xl p-6 text-blue-900 shadow-xl hover:shadow-2xl transition-all overflow-hidden group border-2 border-blue-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-300/30 rounded-full filter blur-2xl group-hover:scale-150 transition-transform"></div>
              <p className="text-5xl mb-3 relative z-10 drop-shadow-md">🛣️</p>
              <h3 className="font-bold text-lg mb-2 relative z-10">Infrastruktur</h3>
              <p className="text-sm relative z-10 font-medium">Sarana transportasi dan jalan yang memadai menghubungkan berbagai bagian desa dengan baik</p>
            </div>
          </div>

          {/* Landmarks Section */}
          <div className="mt-16 bg-gradient-to-br from-cream-100 via-orange-50 to-cream-100 rounded-2xl p-8 shadow-xl border-2 border-orange-200">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <span className="text-4xl">🏛️</span> Landmark Penting Desa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mapFeatures.filter(f => f.type === 'landmark').map((landmark) => (
                <div
                  key={landmark.id}
                  className="bg-white rounded-xl p-4 border-2 border-cream-300 hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => setSelectedFeature(landmark.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{landmark.icon}</span>
                    <h3 className="font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">{landmark.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{landmark.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div className="mt-8 bg-gradient-to-br from-teal-100 via-cyan-50 to-teal-100 rounded-2xl p-8 shadow-xl border-2 border-teal-200">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <span className="text-4xl">🏫</span> Fasilitas Umum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mapFeatures.filter(f => f.type === 'facility' || f.type === 'infrastructure').map((facility) => (
                <div
                  key={facility.id}
                  className="bg-white rounded-xl p-4 border-2 border-teal-200 hover:border-teal-500 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => setSelectedFeature(facility.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{facility.icon}</span>
                    <h3 className="font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">{facility.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Natural Resources Section */}
          <div className="mt-8 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 rounded-2xl p-8 shadow-xl border-2 border-green-200">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <span className="text-4xl">🌿</span> Sumber Daya Alam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mapFeatures.filter(f => f.type === 'natural').map((natural) => (
                <div
                  key={natural.id}
                  className="bg-white rounded-xl p-4 border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => setSelectedFeature(natural.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{natural.icon}</span>
                    <h3 className="font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">{natural.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{natural.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
