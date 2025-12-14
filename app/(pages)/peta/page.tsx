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
      icon: 'church',
      coordinates: 'Jaga 3',
    },
    {
      id: 'gmim',
      name: 'GMIM Betlehem',
      type: 'landmark',
      description: 'Gereja yang melayani komunitas lokal dengan berbagai kegiatan sosial',
      icon: 'church',
      coordinates: 'Jaga 3',
    },
    {
      id: 'sdgmim',
      name: 'SD GMIM 362 Minanga',
      type: 'facility',
      description: 'Sekolah Dasar yang menjadi pusat pendidikan anak-anak desa',
      icon: 'school',
      coordinates: 'Jaga 1',
    },
    {
      id: 'kantor-hukum',
      name: 'Kantor Hukum Tua Desa',
      type: 'infrastructure',
      description: 'Kantor administrasi desa yang menjalankan pemerintahan lokal',
      icon: 'office',
      coordinates: 'Pusat Desa',
    },
    {
      id: 'masjid-mutaqin',
      name: 'Masjid Al-Mutaqin',
      type: 'landmark',
      description: 'Tempat ibadah yang melayani komunitas muslim desa',
      icon: 'mosque',
      coordinates: 'Jaga 4',
    },
    {
      id: 'gpdi-eben',
      name: 'GPDI Eben Heazer',
      type: 'landmark',
      description: 'Gereja Pentakosta untuk pelayanan spiritual masyarakat',
      icon: 'church',
      coordinates: 'Jaga 4',
    },
    {
      id: 'jalan-pekuburan',
      name: 'Jalan Pekuburan',
      type: 'infrastructure',
      description: 'Jalan utama yang menghubungkan berbagai bagian desa',
      icon: 'road',
      coordinates: 'Barat Desa',
    },
    {
      id: 'pantai',
      name: 'Pantai Minanga',
      type: 'natural',
      description: 'Pantai pesisir dengan potensi ekosistem mangrove yang kaya',
      icon: 'beach',
      coordinates: 'Selatan Desa',
    },
    {
      id: 'mangrove',
      name: 'Ekosistem Mangrove',
      type: 'natural',
      description: 'Area mangrove yang menjadi habitat penting dan sumber daya alam',
      icon: 'tree',
      coordinates: 'Pesisir Selatan',
    },
    {
      id: 'lapangan',
      name: 'Lapangan',
      type: 'infrastructure',
      description: 'Ruang terbuka untuk olahraga dan kegiatan komunitas',
      icon: 'sports',
      coordinates: 'Jaga 4',
    },
  ];

  const legendItems = [
    { type: 'landmark', label: 'Landmark/Bangunan Ibadah', color: 'bg-red-500' },
    { type: 'facility', label: 'Fasilitas Publik', color: 'bg-blue-500' },
    { type: 'infrastructure', label: 'Infrastruktur', color: 'bg-yellow-500' },
    { type: 'natural', label: 'Sumber Daya Alam', color: 'bg-green-500' },
  ];

  const statCards: StatCard[] = [
    { title: 'Jumlah Penduduk', value: '671 Jiwa', icon: 'people', color: 'from-blue-500 to-indigo-600' },
    { title: 'Ketinggian', value: '±15 mdpl', icon: 'mountain', color: 'from-green-500 to-emerald-600' },
    { title: 'Tipe Desa', value: 'Pesisir', icon: 'wave', color: 'from-orange-500 to-amber-600' },
  ];

  const MapIcon = ({ type, className = "w-6 h-6" }: { type: string; className?: string }) => {
    const icons: Record<string, React.ReactNode> = {
      church: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L4 13v2h2v6h5v-4h2v4h5v-6h2v-2l-2-.78zM12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>,
      school: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>,
      office: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/></svg>,
      mosque: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c1.8 0 3.28 1.3 3.48 3h.02c1.38 0 2.5 1.12 2.5 2.5V9h-3V7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9h-4V7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9H6V7.5C6 6.12 7.12 5 8.5 5h.02c.2-1.7 1.68-3 3.48-3zM2 19v2h20v-2H2zm2-2h16v-6H4v6z"/></svg>,
      road: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M11 4h2v2h-2V4zm0 4h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM3 4h6v16H3V4zm12 0h6v16h-6V4z"/></svg>,
      beach: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.92V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.08c0-.41.25-.78.63-.93L12 12l8.37 3.99c.38.15.63.52.63.93z"/><path d="M12 2L3.63 5.99A1 1 0 003 6.92V9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V6.92a1 1 0 00-.63-.93L12 2z"/></svg>,
      tree: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>,
      sports: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
      people: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
      mountain: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/></svg>,
      wave: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.92V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.08c0-.41.25-.78.63-.93L12 12l8.37 3.99c.38.15.63.52.63.93z"/><path d="M12 2L3.63 5.99A1 1 0 003 6.92V9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V6.92a1 1 0 00-.63-.93L12 2z"/></svg>,
      map: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
      pin: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
      tip: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>,
    };
    return icons[type] || <svg className={className} fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-orange-50/30">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-20 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
          alt="Map background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl animate-float"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-4 animate-fade-in-down">
            <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-sm shadow-lg flex items-center gap-2">
              <MapIcon type="map" className="w-4 h-4" />
              Peta Interaktif
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg animate-fade-in-up">Peta Desa Minanga Dua</h1>
          <p className="text-white/90 text-lg drop-shadow-md animate-fade-in-up animation-delay-200">Jelajahi lokasi penting dan fitur geografis desa</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Section */}
            <div className="lg:col-span-2 animate-fade-in-left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-cream-200 hover:border-orange-300 transition-all hover:shadow-2xl">
                {/* Map Container */}
                <div className="relative bg-gray-100 overflow-hidden group">
                  {/* Gambar Peta Asli */}
                  {!imageError ? (
                    <div className="relative w-full">
                      <Image
                        src="/petabaru.png"
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
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brown-400 to-brown-600 flex items-center justify-center text-white">
                          <MapIcon type="map" className="w-8 h-8" />
                        </div>
                        <p className="text-brown-700 font-semibold">Simpan gambar peta sebagai 'peta.png' di folder 'public'</p>
                        <p className="text-sm text-brown-600 mt-2">Path: public/peta.png</p>
                      </div>
                    </div>
                  )}

                  {/* Info Badge */}
                  {/* <div className="absolute top-4 left-4 bg-gradient-to-r from-cream-100/95 via-white/95 to-orange-50/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border-2 border-orange-200 hover:scale-105 transition-transform">
                    <p className="text-sm font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-2">
                      <span>📍</span> Luas: 1,47 km² • Desa Pesisir
                    </p>
                  </div> */}

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
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <MapIcon type="tip" className="w-3.5 h-3.5" />
                  </span>
                  <span><strong className="text-orange-700">Tips:</strong> Klik pada marker di peta atau daftar lokasi untuk melihat informasi detail. Gunakan tombol legenda untuk menampilkan/menyembunyikan kategori.</span>
                </p>
              </div>
            </div>

            {/* Features List Section */}
            <div className="lg:col-span-1 animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 h-fit border-2 border-cream-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-md animate-float">
                    <MapIcon type="pin" className="w-5 h-5" />
                  </span>
                  Lokasi & Fasilitas
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
                      <div className="flex items-start gap-3">
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center text-teal-600 shadow-sm">
                          <MapIcon type={feature.icon} className="w-5 h-5" />
                        </span>
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
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl shadow-md flex items-center justify-center text-orange-600">
                          <MapIcon type={feature.icon} className="w-10 h-10" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{feature.name}</h2>
                          <p className="text-brown-600 font-semibold">{feature.type.charAt(0).toUpperCase() + feature.type.slice(1)}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-cream-50 p-6 rounded-xl">
                          <h3 className="text-lg font-bold text-brown-800 mb-3 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-brown-400 to-brown-600 flex items-center justify-center text-white">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </span>
                            Deskripsi
                          </h3>
                          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                        </div>
                        <div className="bg-gradient-to-br from-brown-50 to-cream-100 rounded-xl p-6 border-2 border-brown-200">
                          <h3 className="text-lg font-bold text-brown-800 mb-3 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white">
                              <MapIcon type="pin" className="w-4 h-4" />
                            </span>
                            Lokasi
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
                className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 overflow-hidden group relative animate-fade-in-up animation-delay-${(idx + 1) * 100}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 mb-3 relative z-10 transform group-hover:scale-110 transition-transform drop-shadow-lg animate-float rounded-xl bg-white/20 flex items-center justify-center">
                  <MapIcon type={stat.icon} className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2 opacity-90 relative z-10">{stat.title}</h3>
                <p className="text-3xl font-bold relative z-10 drop-shadow-md">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Info Cards dengan Ilustrasi */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative bg-gradient-to-br from-teal-100 via-cyan-100 to-teal-100 rounded-2xl p-6 text-teal-900 shadow-xl hover:shadow-2xl transition-all overflow-hidden group border-2 border-teal-200 animate-fade-in-up">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-300/30 rounded-full filter blur-2xl group-hover:scale-150 transition-transform"></div>
              <div className="w-14 h-14 mb-3 relative z-10 drop-shadow-md animate-bounce-in rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 relative z-10">Statistik Wilayah</h3>
              <p className="text-sm relative z-10 font-medium">Luas 1,47 km² dengan populasi 671 jiwa, terletak di ketinggian ±15 meter dari permukaan laut</p>
            </div>
            <div className="relative bg-gradient-to-br from-orange-100 via-amber-100 to-orange-100 rounded-2xl p-6 text-orange-900 shadow-xl hover:shadow-2xl transition-all overflow-hidden group border-2 border-orange-200 animate-fade-in-up animation-delay-100">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-300/30 rounded-full filter blur-2xl group-hover:scale-150 transition-transform"></div>
              <div className="w-14 h-14 mb-3 relative z-10 drop-shadow-md animate-wave rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white">
                <MapIcon type="wave" className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2 relative z-10">Desa Pesisir</h3>
              <p className="text-sm relative z-10 font-medium">Memiliki akses ke pantai dengan ekosistem mangrove yang signifikan sebagai aset alam berharga</p>
            </div>
            <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-100 rounded-2xl p-6 text-blue-900 shadow-xl hover:shadow-2xl transition-all overflow-hidden group border-2 border-blue-200 animate-fade-in-up animation-delay-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-300/30 rounded-full filter blur-2xl group-hover:scale-150 transition-transform"></div>
              <div className="w-14 h-14 mb-3 relative z-10 drop-shadow-md animate-float rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <MapIcon type="road" className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2 relative z-10">Infrastruktur</h3>
              <p className="text-sm relative z-10 font-medium">Sarana transportasi dan jalan yang memadai menghubungkan berbagai bagian desa dengan baik</p>
            </div>
          </div>

          {/* Landmarks Section */}
          <div className="mt-16 bg-gradient-to-br from-cream-100 via-orange-50 to-cream-100 rounded-2xl p-8 shadow-xl border-2 border-orange-200 animate-fade-in-up">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md animate-float">
                <MapIcon type="church" className="w-6 h-6" />
              </span>
              Landmark Penting Desa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mapFeatures.filter(f => f.type === 'landmark').map((landmark) => (
                <div
                  key={landmark.id}
                  className="bg-white rounded-xl p-4 border-2 border-cream-300 hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => setSelectedFeature(landmark.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-orange-600 shadow-sm">
                      <MapIcon type={landmark.icon} className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">{landmark.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{landmark.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Section */}
          <div className="mt-8 bg-gradient-to-br from-teal-100 via-cyan-50 to-teal-100 rounded-2xl p-8 shadow-xl border-2 border-teal-200 animate-fade-in-up animation-delay-100">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-md animate-bounce-in">
                <MapIcon type="school" className="w-6 h-6" />
              </span>
              Fasilitas Umum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mapFeatures.filter(f => f.type === 'facility' || f.type === 'infrastructure').map((facility) => (
                <div
                  key={facility.id}
                  className="bg-white rounded-xl p-4 border-2 border-teal-200 hover:border-teal-500 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => setSelectedFeature(facility.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center text-teal-600 shadow-sm">
                      <MapIcon type={facility.icon} className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">{facility.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Natural Resources Section */}
          <div className="mt-8 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 rounded-2xl p-8 shadow-xl border-2 border-green-200 animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-md animate-wave">
                <MapIcon type="tree" className="w-6 h-6" />
              </span>
              Sumber Daya Alam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mapFeatures.filter(f => f.type === 'natural').map((natural) => (
                <div
                  key={natural.id}
                  className="bg-white rounded-xl p-4 border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => setSelectedFeature(natural.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-600 shadow-sm">
                      <MapIcon type={natural.icon} className="w-5 h-5" />
                    </span>
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
