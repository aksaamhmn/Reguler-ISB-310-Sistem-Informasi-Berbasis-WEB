# Sesi Click Counter

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
