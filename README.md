# 📘 Dokumentasi Web Provinsi Lampung

Website ini dibangun menggunakan **React.js** dan **Tailwind CSS** untuk menampilkan informasi seputar Provinsi Lampung. Proyek ini memiliki struktur modular dan responsif, dengan gaya berbasis utility-first dari Tailwind.

---

## 🗂️ Struktur Folder

```
/web-lampung
├── public/
│   ├── index.html           # HTML template
├── src/
│   ├── assets/              # Gambar dan aset statis lainnya
│   ├── components/          # Komponen UI (Navbar, Footer, Card, dll)
│   ├── contexts/            # Context API untuk state global (bahasa dan ukuran font)
│   ├── data/                # File data statis atau JSON (seperti Translation.js)
│   ├── pages/               # Halaman utama website (Home, Berita, Layanan, dll)
│   ├── App.js               # Root komponen aplikasi
│   ├── App.css              # Style global tambahan
│   ├── index.js             # Entry point React
│   ├── index.css            # Import Tailwind dan reset CSS
│   ├── logo.svg             # Logo default React
│   ├── reportWebVitals.js   # Untuk analisis performa
│   ├── setupTests.js        # Konfigurasi testing
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md (ini)


---

## 🛠️ Langkah Instalasi dan Setup

### 1. Prasyarat
Pastikan sudah terpasang:
- Node.js (versi 14 atau lebih baru)
- npm (otomatis ada saat install Node.js)
- Visual Studio Code (disarankan)

### 2. Clone & Instalasi
```bash
git clone https://github.com/username/web-lampung.git
cd web-lampung
npm install
```

### 3. Konfigurasi Tailwind CSS
Tailwind telah dikonfigurasi otomatis di file:

- `tailwind.config.js`
- `postcss.config.js`
- Import Tailwind di `index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### 4. Menjalankan Proyek
```bash
npm run dev  # atau
npm start
```

---

## ✨ Contoh Penggunaan Tailwind

```jsx
<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
  Klik Saya
</button>
```

---

## 📦 Build untuk Produksi

```bash
npm run build
```

Output akan tersimpan di direktori `build/` dan siap untuk dihosting (Netlify, Vercel, dll).

---

## 🔌 Plugin Tambahan (Opsional)

Contoh install plugin typography:
```bash
npm install -D @tailwindcss/typography
```

Aktifkan di `tailwind.config.js`:
```js
plugins: [require('@tailwindcss/typography')],
```

---

## 🚀 Deployment

Deploy ke platform seperti:
- Netlify
- Vercel
- GitHub Pages

Pastikan output build (`build/` atau `dist/`) telah dihasilkan dan siap untuk di-upload.

---

## 📝 Penutup

Proyek Web Provinsi Lampung memanfaatkan kekuatan React dan Tailwind CSS untuk memberikan UI yang cepat dan modern. Silakan kontribusi atau fork untuk mengembangkan lebih lanjut.
---

## ▶️ Perintah CLI dari Create React App

Dalam direktori proyek, Anda dapat menjalankan:

### `npm start`
Menjalankan aplikasi dalam mode development.Buka [http://localhost:3000](http://localhost:3000) untuk melihatnya di browser Anda.

Halaman akan reload saat Anda melakukan perubahan.Anda juga bisa melihat error lint di konsol.

### `npm test`
Menjalankan test runner dalam mode interaktif.Lihat dokumentasi [running tests](https://facebook.github.io/create-react-app/docs/running-tests) untuk info lebih lanjut.

### `npm run build`
Membangun aplikasi untuk produksi ke dalam folder `build`.Build akan dioptimalkan untuk performa terbaik dan siap untuk dideploy.

### `npm run eject`
**Catatan: ini adalah operasi satu arah. Sekali `eject`, tidak bisa kembali!**Jika Anda ingin kontrol penuh terhadap konfigurasi Webpack/Babel/ESLint, gunakan perintah ini.

---

## 📚 Referensi Tambahan

- Dokumentasi [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- Dokumentasi [React](https://reactjs.org/)
- Panduan:
  - [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
  - [Bundle Size Analysis](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
  - [PWA Guide](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
  - [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
  - [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
  - [Troubleshooting Build](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)