export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🏝️</span> Desa Minanga Dua
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desa pesisir yang terletak di Kecamatan Pusomaen, Kabupaten Minahasa Tenggara, Provinsi Sulawesi Utara.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🔗</span> Menu Cepat
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-orange-300 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>→</span> Beranda
              </a></li>
              <li><a href="/peta" className="text-gray-300 hover:text-orange-300 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>→</span> Peta
              </a></li>
              <li><a href="/sejarah" className="text-gray-300 hover:text-orange-300 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>→</span> Sejarah
              </a></li>
              <li><a href="/profil" className="text-gray-300 hover:text-orange-300 transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                <span>→</span> Profil Desa
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">📞</span> Kontak
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300 flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>Minanga Dua, Kecamatan Pusomaen, Kabupaten Minahasa Tenggara</span>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <span>✉️</span>
                <span>Kode Pos: 95997</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
            <span>©</span> 2024 Desa Minanga Dua. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
