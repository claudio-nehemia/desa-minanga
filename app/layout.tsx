import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desa Minanga Dua - Kecamatan Pusomaen, Minahasa Tenggara",
  description: "Website resmi Desa Minanga Dua, desa pesisir di Kecamatan Pusomaen, Kabupaten Minahasa Tenggara, Sulawesi Utara. Informasi sejarah, profil desa, dan peta wilayah.",
  keywords: ["Minanga", "Desa Minanga", "Minanga Dua", "Pusomaen", "Minahasa Tenggara", "Sulawesi Utara", "desa pesisir", "minangadua"],
  authors: [{ name: "KKT-145 UNSRAT 2025" }],
  openGraph: {
    title: "Desa Minanga Dua - Kecamatan Pusomaen",
    description: "Website resmi Desa Minanga Dua, desa pesisir di Kecamatan Pusomaen, Kabupaten Minahasa Tenggara, Sulawesi Utara.",
    url: "https://minangadua.com",
    siteName: "Desa Minanga Dua",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Minanga Dua",
    description: "Website resmi Desa Minanga Dua, Minahasa Tenggara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "KODE_VERIFIKASI_GOOGLE", // Ganti setelah daftar di Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream-50`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
