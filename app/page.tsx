import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      title: 'Peta Desa',
      description: 'Lihat peta interaktif Desa Minanga Dua dengan berbagai landmark penting',
      icon: '🗺️',
      href: '/peta',
    },
    {
      title: 'Sejarah Desa',
      description: 'Pelajari tentang asal-usul dan sejarah perkembangan Desa Minanga Dua',
      icon: '📖',
      href: '/sejarah',
    },
    {
      title: 'Profil Desa',
      description: 'Informasi lengkap tentang demografi, geografis, dan potensi desa',
      icon: '📊',
      href: '/profil',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&h=1080&fit=crop"
            alt="Pantai Sulawesi Utara"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-300 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 animate-fade-in-down">
              <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 backdrop-blur-sm shadow-lg animate-pulse-slow">🏝️ Desa Pesisir Sulawesi Utara</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg animate-fade-in-up">
              Selamat Datang di<br/>
              <span className="bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">Desa Minanga Dua</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
              Desa pesisir yang kaya akan sejarah, potensi alam, dan kearifan lokal di Sulawesi Utara
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href="/peta"
                className="group inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center gap-2 justify-center">
                  🗺️ Jelajahi Peta
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                href="/profil"
                className="group inline-block bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border-2 border-white/50 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center gap-2 justify-center">
                  📊 Pelajari Profil Desa
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/30 via-transparent to-orange-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider animate-fade-in-up">Informasi Lengkap</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mt-2 mb-4 animate-fade-in-up animation-delay-100">
              Jelajahi Informasi Desa
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500 mx-auto rounded-full animate-fade-in-up animation-delay-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const gradients = [
                { bg: 'from-teal-500 to-cyan-600', border: 'border-teal-200 hover:border-teal-400', accent: 'from-teal-500 via-cyan-500 to-teal-500' },
                { bg: 'from-orange-500 to-amber-600', border: 'border-orange-200 hover:border-orange-400', accent: 'from-orange-500 via-amber-500 to-orange-500' },
                { bg: 'from-blue-500 to-indigo-600', border: 'border-blue-200 hover:border-blue-400', accent: 'from-blue-500 via-indigo-500 to-blue-500' },
              ];
              const style = gradients[index];
              return (
                <Link
                  key={index}
                  href={feature.href}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full transform hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 ${style.border} overflow-hidden card-hover`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${style.bg} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>
                    <div className="relative z-10">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform animate-float">{feature.icon}</div>
                      <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${style.bg} bg-clip-text text-transparent`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${style.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`}></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-orange-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-cyan-300/20 rounded-full filter blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block mb-4">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Profil Desa</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Tentang Desa Minanga Dua
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Desa Minanga Dua merupakan salah satu desa pesisir yang terletak di Kecamatan Pusomaen, 
                Kabupaten Minahasa Tenggara, Provinsi Sulawesi Utara, Indonesia.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Dengan luas wilayah sekitar 1,47 km² dan jumlah penduduk 671 jiwa, desa ini memiliki 
                potensi yang beragam mulai dari pertanian, peternakan, hingga sumber daya alam pesisir 
                yang signifikan, terutama ekosistem mangrove.
              </p>
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-700 transition-all shadow-md hover:shadow-lg"
              >
                Selengkapnya <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="animate-fade-in-right">
              {/* Image Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                  alt="Pemandangan Desa"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl p-4 hover:from-teal-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-md">
                  <div className="text-4xl">👥</div>
                  <div>
                    <p className="font-bold text-xl">671 Jiwa</p>
                    <p className="text-sm opacity-90">Total Penduduk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl p-4 hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-md">
                  <div className="text-4xl">📍</div>
                  <div>
                    <p className="font-bold text-xl">1,47 km²</p>
                    <p className="text-sm opacity-90">Luas Wilayah</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-4 hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-md">
                  <div className="text-4xl">🌊</div>
                  <div>
                    <p className="font-bold text-xl">Desa Pesisir</p>
                    <p className="text-sm opacity-90">Lokasi Geografis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-4 hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-md">
                  <div className="text-4xl">🌳</div>
                  <div>
                    <p className="font-bold text-xl">Ekosistem Mangrove</p>
                    <p className="text-sm opacity-90">Potensi Alam</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=600&fit=crop"
            alt="Pantai"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-400 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Ingin Mengetahui Lebih Lanjut?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-100">
            Jelajahi berbagai informasi menarik tentang Desa Minanga Dua, dari sejarah hingga potensi 
            ekonomi yang dapat dikembangkan bersama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Link
              href="/sejarah"
              className="group inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-2 justify-center">
                📖 Baca Sejarah Desa
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link
              href="/peta"
              className="group inline-block bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border-2 border-white/50 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-2 justify-center">
                🗺️ Lihat Peta Desa
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
