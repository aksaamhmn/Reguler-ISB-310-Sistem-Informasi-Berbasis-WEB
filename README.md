# Tabel Dinamis 5x5 dengan Efek Hover CSS

## Overview Project

Proyek ini adalah implementasi dasar dari pembuatan _grid_ atau tabel berukuran 5 baris dan 5 kolom menggunakan bahasa pemrograman PHP dan HTML. Proyek ini mendemonstrasikan penggunaan **Nested Loop** (pengulangan bersarang) di PHP untuk _rendering_ elemen HTML secara dinamis, serta manipulasi _state_ `:hover` pada CSS eksternal untuk memberikan interaktivitas spesifik pada setiap blok (sel) tabel.

## Struktur Direktori

```text
📁 Tabel 5x5 Hover Warna/
├── 📄 index.php      # File utama yang berisi struktur HTML dan logika looping PHP
└── 🎨 style.css      # File CSS eksternal untuk styling dasar dan aturan hover spesifik
```

## Penjelasan Teknis

### 1. Logika Render HTML Dinamis (PHP)

Alih-alih menulis tag `<tr>` dan `<td>` secara berulang (hardcode), struktur tabel dibangun menggunakan eksekusi skrip PHP sebelum HTML dikirimkan ke _client_.

- **Outer Loop (Pengulangan Baris):** Sintaks `for ($i = 1; $i <= 5; $i++)` bertugas membuat 5 baris tabel (`<tr>`). Pada tahap ini, variabel iterasi `$i` disuntikkan ke dalam atribut `class` HTML (`<tr class='baris-$i'>`). Hasilnya, baris pertama akan memiliki _class_ `baris-1`, baris kedua `baris-2`, dan seterusnya. Pendekatan ini adalah kunci untuk memisahkan aturan _styling_ antar baris.
- **Inner Loop (Pengulangan Kolom):** Di dalam setiap baris, sintaks `for ($j = 1; $j <= 5; $j++)` berjalan untuk membuat 5 buah sel/kolom (`<td>`). Isi teks dari setiap sel dicetak menggunakan kombinasi variabel `$i,$j`, sehingga membentuk teks koordinat matriks (misal: `1,1` untuk baris 1 kolom 1).

### 2. Logika Interaktivitas Per-Blok (CSS Eksternal)

File `style.css` menangani tata letak elemen (`border-collapse`, `padding`) dan efek transisi warna saat kursor pengguna berinteraksi dengan elemen (_mouse hover_).

- **Targeting Sel, Bukan Baris:** Untuk memastikan efek _hover_ hanya berlaku pada kotak yang sedang disorot kursor (bukan satu baris penuh), _pseudo-class_ `:hover` diterapkan langsung pada selektor `td`, bukan `tr`.
- **Aturan Pewarnaan Spesifik:** Aturan CSS dipisahkan menggunakan kombinasi _class_ dinamis dari PHP dan elemen `td`. Contohnya, selektor `.baris-1 td:hover` secara teknis menginstruksikan browser: *"Ubah warna latar menjadi merah HANYA pada elemen sel (`td`) yang sedang di-hover, DAN sel tersebut harus berada di dalam *parent element* yang memiliki class `baris-1`"*. Aturan ini diulang untuk kelima warna (Merah, Oranye, Kuning, Hijau, Biru) sesuai barisnya.
