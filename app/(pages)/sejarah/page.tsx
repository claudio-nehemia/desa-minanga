'use client';

import Image from 'next/image';

export default function SejarahPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-20 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountains background"
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Sejarah & Budaya
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg animate-fade-in-up">Sejarah Desa Minanga Dua</h1>
          <p className="text-white/90 text-lg animate-fade-in-up animation-delay-200">Menelusuri asal-usul dan perkembangan desa kami</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gradient-to-b from-cyan-50/30 via-white to-orange-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Origin Section */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-200/20 to-transparent rounded-bl-full"></div>
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg animate-float">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Asal-Usul Nama "Minanga"</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Desa Minanga Dua berasal dari kata <span className="font-semibold bg-teal-100 px-2 py-1 rounded text-teal-800">"IMANGA"</span> yang berasal dari bahasa Pasan, yang berarti <span className="italic font-semibold text-teal-700">terbuka</span>. Sejak saat itu, istilah ini terus berkembang menjadi "Minanga" yang kita kenal sekarang.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Orang-orang yang disebut Minanga adalah mereka yang awalnya tinggal di tempat yang bernama Pemangkean. Mereka kemudian datang dan menempati tanah di bagian selatan desa dan diberi nama Sumampu. Pada saat itu, mereka dipimpin oleh seorang hukum tua bernama <span className="font-semibold bg-cyan-100 px-2 py-1 rounded text-cyan-800">SAWEL</span>.
              </p>
            </div>

            {/* Merger Section */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up animation-delay-100">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-full"></div>
              <div className="flex items-start gap-4 mb-6 relative z-10">
                {/* <div className="text-5xl">🤝</div> */}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Penyatuan Dua Komunitas</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Selain kelompok dari Sumampu, ada pula orang-orang yang datang dari tempat bernama <span className="italic font-semibold text-orange-700">"Lisung"</span> yang saat ini dikenal dengan nama Negeri Lama. Kelompok ini dipimpin oleh seorang hukum tua bernama <span className="font-semibold bg-orange-100 px-2 py-1 rounded text-orange-800">ALBERT PONTORORING</span>.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dengan keakraban dan semangat bersama antara orang-orang Sumampu dan orang-orang dari Lisung, mereka dapat melaksanakan kesepakatan penting untuk mencetuskan sebuah nama desa yang baru: <span className="font-bold text-brown-700 bg-brown-100 px-2 py-1 rounded">"MINANGA"</span>.
              </p>
            </div>

            {/* Naming Section */}
            <div className="relative bg-gradient-to-br from-brown-100 via-cream-200 to-brown-50 rounded-2xl p-8 border-l-4 border-brown-800 shadow-xl overflow-hidden animate-fade-in-up animation-delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full filter blur-2xl"></div>
              <div className="flex items-start gap-4 mb-6 relative z-10">
                {/* <div className="text-5xl">🌊</div> */}
                <h2 className="text-3xl font-bold text-brown-800">Pencetakan Nama "Minanga"</h2>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6 border-2 border-brown-200 relative z-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nama "Minanga" berasal dari ucapan seorang kepala jaga Sumampu bernama <span className="font-semibold">"MOTUPA"</span>. Beliau memberitahukan bahwa muara sungai telah terbuka (<span className="italic">IMANGA</span>) — ungkapan dalam bahasa Pasan yang berarti "muara sungai yang terbuka".
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Peristiwa ini bertepatan dengan terjadinya banjir yang sangat besar pada waktu itu. Nama "Minanga" kemudian disempurnakan dan diadopsi oleh kedua komunitas sebagai identitas bersama mereka.
              </p>
            </div>

            {/* Leadership Section */}
            <div className="relative bg-gradient-to-br from-white via-cream-50 to-white rounded-2xl shadow-xl p-8 border-l-4 border-brown-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up animation-delay-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brown-200/10 to-transparent rounded-bl-full"></div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white shadow-lg animate-float">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <h2 className="text-3xl font-bold text-brown-800">Penetapan Hukum Tua Pertama</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dengan bergabungnya orang-orang Sumampu dan Lisung, mereka mengadakan musyawarah dan mufakat untuk mengangkat seorang hukum tua. Melalui kesepakatan bersama, dipilih seorang yang bernama <span className="font-semibold">THEODORUS LENGKONG</span> dari kelompok Sumampu.
              </p>
              <div className="bg-gradient-to-r from-cream-100 to-brown-100 rounded-xl p-4 border-l-4 border-brown-700 shadow-md">
                <p className="text-brown-800 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
                  Catatan Penting
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  Pada saat dipilih menjadi hukum tua, Theodorus Lengkong sedang menempuh pendidikan di Sekolah Raja di Tondano, menunjukkan komitmen masyarakat untuk memiliki pemimpin yang berpendidikan.
                </p>
              </div>
            </div>

            {/* Modern Era Section */}
            <div className="relative bg-gradient-to-br from-white via-cream-50 to-white rounded-2xl shadow-xl p-8 border-l-4 border-cream-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up animation-delay-400">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cream-300/10 to-transparent rounded-bl-full"></div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg animate-bounce-in">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>
                </div>
                <h2 className="text-3xl font-bold text-brown-800">Era Modern: Pemekaran Desa (2010)</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Desa Minanga Dua secara resmi menjadi satu desa tersendiri pada tanggal <span className="font-bold text-brown-700">28 April 2010</span>.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Penetapan ini merupakan hasil dari pemekaran desa Minanga Satu, yang ditandai dengan pelantikan pejabat hukum tua Desa Minanga Dua yang baru.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-brown-100 via-cream-200 to-brown-100 rounded-xl p-6 text-center shadow-lg border-2 border-brown-300 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-8 h-8 text-brown-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>
                    <p className="text-4xl font-bold text-brown-700">28 April 2010</p>
                  </div>
                  <p className="text-brown-800 font-semibold">Hari Lahir Desa Minanga Dua</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative bg-gradient-to-br from-brown-50 via-cream-100 to-brown-50 rounded-2xl p-8 shadow-xl border-2 border-brown-200 overflow-hidden animate-fade-in-up animation-delay-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brown-200/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
              <h2 className="text-3xl font-bold text-brown-800 mb-8 text-center relative z-10 flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-brown-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
                Garis Waktu Sejarah Desa
              </h2>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-brown-700 to-brown-600 rounded-full shadow-lg"></div>
                    <div className="w-1 h-20 bg-gradient-to-b from-brown-300 to-brown-200"></div>
                  </div>
                  <div className="pb-8 bg-white/60 backdrop-blur-sm p-4 rounded-lg flex-1 border border-brown-200 hover:shadow-md transition-shadow">
                    <p className="font-bold text-brown-800 text-lg flex items-center gap-2">
                      <svg className="w-5 h-5 text-brown-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                      Abad Sebelumnya
                    </p>
                    <p className="text-gray-700">Datangnya kelompok dari Pemangkean yang bermukim di Sumampu (dipimpin SAWEL)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-brown-700 to-brown-600 rounded-full shadow-lg"></div>
                    <div className="w-1 h-20 bg-gradient-to-b from-brown-300 to-brown-200"></div>
                  </div>
                  <div className="pb-8 bg-white/60 backdrop-blur-sm p-4 rounded-lg flex-1 border border-brown-200 hover:shadow-md transition-shadow">
                    <p className="font-bold text-brown-800 text-lg flex items-center gap-2">
                      <svg className="w-5 h-5 text-brown-600" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></svg>
                      Periode Penyatuan
                    </p>
                    <p className="text-gray-700">Bergabungnya kelompok dari Lisung dengan kelompok Sumampu di bawah kepemimpinan THEODORUS LENGKONG</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-brown-700 to-brown-600 rounded-full shadow-lg"></div>
                    <div className="w-1 h-20 bg-gradient-to-b from-brown-300 to-brown-200"></div>
                  </div>
                  <div className="pb-8 bg-white/60 backdrop-blur-sm p-4 rounded-lg flex-1 border border-brown-200 hover:shadow-md transition-shadow">
                    <p className="font-bold text-brown-800 text-lg flex items-center gap-2">
                      <svg className="w-5 h-5 text-brown-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                      Pencetakan Nama
                    </p>
                    <p className="text-gray-700">Nama "Minanga" ditetapkan berdasarkan pernyataan MOTUPA tentang muara sungai yang terbuka</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-brown-700 to-brown-600 rounded-full shadow-lg"></div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg flex-1 border border-brown-200 hover:shadow-md transition-shadow">
                    <p className="font-bold text-brown-800 text-lg flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>
                      28 April 2010
                    </p>
                    <p className="text-gray-700">Desa Minanga Dua secara resmi menjadi desa tersendiri melalui pemekaran</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy Section */}
            <div className="relative bg-gradient-to-br from-brown-700 via-brown-800 to-brown-900 text-cream-50 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-48 h-48 bg-cream-300 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brown-500 rounded-full filter blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/></svg>
                  </div>
                  Warisan Sejarah
                </h2>
                <p className="text-cream-200 text-lg leading-relaxed">
                  Sejarah Desa Minanga Dua mencerminkan nilai-nilai luhur masyarakat yang mengedepankan persatuan, kesepakatan bersama, dan kebijaksanaan dalam memimpin. 
                  Dari pertemuan dua komunitas yang berbeda menjadi satu kesatuan yang kuat, hingga penetapan desa yang resmi pada tahun 2010, setiap peristiwa menunjukkan 
                  komitmen masyarakat Minanga Dua untuk tumbuh dan berkembang bersama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
