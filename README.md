# Sesi Click Counter (Latihan Kelas)

## Overview

Proyek ini adalah aplikasi web sederhana berbasis HTML dan JavaScript yang berfungsi sebagai penghitung klik (_click counter_). Aplikasi ini memanfaatkan Web Storage API (`localStorage`) agar jumlah klik tetap tersimpan di dalam _browser_. Dengan demikian, angka hitungan tidak akan kembali ke nol meskipun pengguna memuat ulang (_refresh_) halaman atau menutup tab _browser_.

## Penjelasan JavaScript

Logika utama aplikasi ini berjalan melalui skrip singkat berikut:

```javascript
let saved = localStorage.getItem("angkaSimpanan") || 0;
clickBtn.onclick = () => {
  localStorage.setItem("angkaSimpanan", ++saved);
  counterDisplay.innerHTML = `You have clicked the button <b>${saved}</b> time(s).`;
};
```

## Cara Kerja

Inisialisasi: Baris pertama mengambil nilai terakhir dari localStorage dengan key "angkaSimpanan". Jika belum ada data sebelumnya, nilainya otomatis diatur ke 0.

Event Listener: clickBtn.onclick mendeteksi setiap kali pengguna mengklik tombol.

Update & Simpan: Setiap kali diklik, nilai saved ditambah 1 (++saved), lalu nilai terbarunya langsung disimpan kembali ke localStorage.

Update Tampilan: Baris terakhir memperbarui teks pada layar HTML untuk menampilkan jumlah klik yang baru.

---

# Sesi Preferensi Warna (Tugas Week 3)

## Overview

Aplikasi ini dapat membuat pengguna untuk memodifikasi antarmuka visual (User Interface) halaman web secara dinamis.

Pengguna dapat memilih warna latar belakang dan warna teks melalui _color picker_ bawaan browser, dan menerapkan perubahan tersebut secara real-time dengan menekan tombol simpan. Proyek ini mendemonstrasikan pemahaman dasar mengenai manipulasi Document Object Model (DOM) dan penanganan _event_ (Event Handling) menggunakan Vanilla JavaScript murni.

---

## 1. Tujuan Utama

Membuat halaman web interaktif yang memungkinkan pengguna memodifikasi tema visual halaman (warna latar dan teks) secara dinamis melalui antarmuka, di mana perubahannya diterapkan setelah aksi konfirmasi (tombol simpan).

## 2. Komponen Antarmuka (UI)

- **Judul Utama:** Menggunakan tag `<h1>` untuk judul "Preferensi Warna".
- **Wadah Form:** Menggunakan tag `<fieldset>` dan `<legend>` untuk membuat kotak bergaris dengan judul "Warna" di garis atasnya, sesuai dengan spesifikasi desain.
- **Input Pilihan Warna:** Menggunakan fitur _native_ HTML5 `<input type="color">` yang secara otomatis memunculkan _modal/color picker_ bawaan dari browser.
- **Tombol Aksi:** Tombol "Simpan" untuk mengeksekusi perubahan.

## 3. Alur Kerja Aplikasi

1. Aplikasi menampilkan nilai warna _default_ pada kotak _color picker_.
2. Pengguna mengklik kotak warna dan memilih warna baru melalui _modal_.
3. **Penting:** Warna halaman tidak langsung berubah saat dipilih.
4. Pengguna menekan tombol "Simpan".
5. Sistem mengambil nilai warna (kode hex) dari kedua input, lalu memanipulasi DOM untuk menerapkan gaya tersebut ke elemen `<body>`.

---

## Penjelasan Kode

Kode dipisahkan secara rapi ke dalam tiga file berbeda (HTML, CSS, dan JS) sesuai standar _best practice_ (Separation of Concerns).

### 1. Struktur Antarmuka (`index.html`)

Kerangka aplikasi dibangun menggunakan HTML semantik. Pengelompokan input menggunakan tag `<fieldset>` dan `<legend>` agar rapi secara visual. Elemen krusial di sini adalah penugasan ID (`id="bgColor"`, `id="txtColor"`, dan `id="btnSimpan"`) agar elemen-elemen ini bisa diakses oleh JavaScript.

### 2. Gaya Visual (`style.css`)

File ini menangani tata letak dan estetika (margin, padding, border). Terdapat implementasi efek transisi pada elemen `body`:
`transition: background-color 0.3s ease, color 0.3s ease;`
Properti ini memastikan ketika JavaScript mengubah warna, perubahannya berjalan mulus (_smooth transition_) selama 0.3 detik, bukan berubah secara kasar/mendadak.

### 3. Logika Interaksi (`script.js`)

File ini bekerja sebagai jembatan interaksi dengan alur berikut:

- **Seleksi Elemen:** Menangkap elemen input warna dan tombol menggunakan `document.getElementById`.
- **Event Listener:** Menambahkan pendengar kejadian (`addEventListener`) pada tombol simpan untuk mendeteksi aksi klik (`'click'`).
- **Manipulasi DOM:** Saat diklik, skrip mengambil nilai (_value_) dari input warna (misal: `#FF0000`), lalu menginjeksinya langsung ke dalam properti `style.backgroundColor` dan `style.color` pada `document.body`.
