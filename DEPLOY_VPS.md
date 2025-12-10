# Panduan Deploy Desa Minanga Dua ke VPS Ubuntu

## Informasi Server
- **Domain:** minangadua.com
- **IP VPS:** 31.97.221.115
- **OS:** Ubuntu

---

## BAGIAN 1: Persiapan Domain

### 1.1 Konfigurasi DNS
Login ke panel domain registrar Anda (Niagahoster, Namecheap, Cloudflare, dll) dan tambahkan DNS Records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 31.97.221.115 | 3600 |
| A | www | 31.97.221.115 | 3600 |
| CNAME | www | minangadua.com | 3600 |

> ⏳ DNS propagation membutuhkan waktu 5 menit - 48 jam

---

## BAGIAN 2: Setup VPS Ubuntu

### 2.1 Login ke VPS
```bash
ssh root@31.97.221.115
```

### 2.2 Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 2.3 Install Node.js (v20 LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Verifikasi instalasi:
```bash
node -v
npm -v
```

### 2.4 Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### 2.5 Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2.6 Install Git
```bash
sudo apt install git -y
```

---

## BAGIAN 3: Deploy Aplikasi

### 3.1 Buat User untuk Aplikasi (Opsional tapi Direkomendasikan)
```bash
sudo adduser minanga
sudo usermod -aG sudo minanga
su - minanga
```

### 3.2 Clone Repository
```bash
cd /var/www
sudo mkdir minanga
sudo chown -R $USER:$USER /var/www/minanga
cd /var/www/minanga
git clone https://github.com/claudio-nehemia/desa-minanga.git .
```

### 3.3 Install Dependencies
```bash
npm install
```

### 3.4 Build Aplikasi
```bash
npm run build
```

### 3.5 Jalankan dengan PM2
```bash
pm2 start npm --name "minanga" -- start
pm2 save
pm2 startup
```

Cek status:
```bash
pm2 status
pm2 logs minanga
```

---

## BAGIAN 4: Konfigurasi Nginx

### 4.1 Buat Konfigurasi Nginx
```bash
sudo nano /etc/nginx/sites-available/minangadua.com
```

Paste konfigurasi berikut:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name minangadua.com www.minangadua.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4.2 Aktifkan Konfigurasi
```bash
sudo ln -s /etc/nginx/sites-available/minangadua.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## BAGIAN 5: SSL Certificate (HTTPS)

### 5.1 Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 5.2 Generate SSL Certificate
```bash
sudo certbot --nginx -d minangadua.com -d www.minangadua.com
```

Ikuti instruksi:
- Masukkan email
- Setujui terms of service
- Pilih redirect HTTP ke HTTPS (opsi 2)

### 5.3 Auto-Renewal
```bash
sudo certbot renew --dry-run
```

---

## BAGIAN 6: Firewall

### 6.1 Konfigurasi UFW
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## BAGIAN 7: SEO Optimization (Agar Muncul di Google)

### 7.1 Tambahkan Metadata SEO

Edit file `app/layout.tsx` dan tambahkan metadata:

```tsx
import type { Metadata } from "next";

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
```

### 7.2 Buat file `robots.txt`

Buat file `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://minangadua.com/sitemap.xml
```

### 7.3 Buat Sitemap

Buat file `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://minangadua.com</loc>
    <lastmod>2025-12-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://minangadua.com/sejarah</loc>
    <lastmod>2025-12-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://minangadua.com/profil</loc>
    <lastmod>2025-12-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://minangadua.com/peta</loc>
    <lastmod>2025-12-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 7.4 Daftar ke Google Search Console

1. Buka https://search.google.com/search-console
2. Klik "Add Property"
3. Pilih "URL prefix" dan masukkan: `https://minangadua.com`
4. Verifikasi dengan salah satu metode:
   - **HTML tag** (rekomen): Copy kode verifikasi ke metadata layout.tsx
   - **HTML file**: Upload file ke public folder
5. Setelah terverifikasi:
   - Submit sitemap: `https://minangadua.com/sitemap.xml`
   - Request indexing untuk halaman utama

### 7.5 Daftar ke Google My Business (Opsional)

1. Buka https://business.google.com
2. Daftarkan "Desa Minanga Dua" sebagai lokasi
3. Tambahkan informasi lengkap:
   - Alamat lengkap
   - Nomor telepon (jika ada)
   - Website: https://minangadua.com
   - Foto-foto desa

---

## BAGIAN 8: Update Aplikasi

### 8.1 Script Update Otomatis

Buat file `/var/www/minanga/deploy.sh`:
```bash
#!/bin/bash
cd /var/www/minanga
git pull origin main
npm install
npm run build
pm2 restart minanga
echo "Deploy selesai!"
```

Beri permission:
```bash
chmod +x deploy.sh
```

Jalankan saat ada update:
```bash
./deploy.sh
```

---

## BAGIAN 9: Monitoring & Maintenance

### 9.1 Cek Status Aplikasi
```bash
pm2 status
pm2 monit
```

### 9.2 Cek Log
```bash
pm2 logs minanga
pm2 logs minanga --lines 100
```

### 9.3 Restart Aplikasi
```bash
pm2 restart minanga
```

### 9.4 Cek Nginx
```bash
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
```

---

## BAGIAN 10: Troubleshooting

### Aplikasi tidak berjalan
```bash
pm2 logs minanga --lines 50
pm2 restart minanga
```

### Nginx error
```bash
sudo nginx -t
sudo systemctl restart nginx
```

### Port 3000 sudah digunakan
```bash
sudo lsof -i :3000
kill -9 <PID>
pm2 restart minanga
```

### SSL Certificate expired
```bash
sudo certbot renew
sudo systemctl restart nginx
```

---

## Checklist Sebelum Go Live

- [ ] DNS sudah mengarah ke IP VPS
- [ ] Node.js terinstall
- [ ] Aplikasi berjalan di PM2
- [ ] Nginx terkonfigurasi dengan benar
- [ ] SSL Certificate aktif (HTTPS)
- [ ] Firewall terkonfigurasi
- [ ] robots.txt tersedia
- [ ] sitemap.xml tersedia
- [ ] Terdaftar di Google Search Console
- [ ] Sitemap sudah di-submit ke Google

---

## Tips SEO Tambahan

1. **Konten Berkualitas**: Pastikan konten desa lengkap dan informatif
2. **Kecepatan Website**: Next.js sudah optimal, pastikan gambar terkompresi
3. **Mobile Friendly**: Sudah responsive dengan Tailwind CSS
4. **Internal Linking**: Pastikan semua halaman terhubung dengan baik
5. **Update Berkala**: Update konten secara berkala untuk freshness
6. **Backlink**: Minta website pemerintah daerah untuk link ke website desa

---

**Dibuat untuk KKT-145 UNSRAT Tahun 2025**
