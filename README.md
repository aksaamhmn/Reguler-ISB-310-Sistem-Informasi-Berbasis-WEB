# Sistem Informasi Berbasis Web Week 4

## Deskripsi Sistem

Aplikasi ini merupakan sistem web sederhana berbasis **HTML, CSS, dan JavaScript** yang dibuat untuk memenuhi tugas mata kuliah **Sistem Informasi Berbasis Web**.

Sistem terdiri dari beberapa halaman yang mensimulasikan fitur interaktif dalam satu antarmuka yang konsisten:

- Halaman Sambutan (**Home**)
- Sistem Kasir Sederhana (**Menu**)
- Kalkulator Matematika Dasar (**Calculator**)
- Program Numerologi **Garis Hidup** (**Life Path Number**)

---

# Fitur Utama

## Home (`index.html`)

Halaman utama yang menampilkan layout header dan navigasi sidebar.

Fitur:

- Tombol **Shout** yang menampilkan pesan alert:

```
Hai, Selamat datang di Sistem Sederhana
```

---

## Menu Kasir (`menu.html`)

Simulasi sistem kasir sederhana dengan perhitungan otomatis.

Fitur:

- **Auto greeting** saat halaman dibuka
- Perhitungan **total harga real-time**
- 3 menu makanan:
  - Bakso Istimewa
  - Soto Spesial
  - Mie Ayam Super
- **Diskon 10%** jika total belanja lebih dari Rp50.000
- Pencegahan input **angka negatif**
- Tombol **reset** untuk mengosongkan form

---

## Kalkulator (`calculator.html`)

Kalkulator sederhana untuk operasi matematika dasar.

Operator yang tersedia:

- Tambah `+`
- Kurang `-`
- Kali `*`
- Bagi `/`
- Modulus `%`
- Pangkat `^`

Validasi:

- Input tidak boleh kosong
- Nilai harus lebih dari **0**

---

## Garis Hidup (`garis_hidup.html`)

Fitur interaktif yang menghitung **Life Path Number** berdasarkan tanggal lahir pengguna menggunakan konsep numerologi.

### Input

- Tanggal (number)
- Bulan (dropdown)
- Tahun (number)

### Proses

Tanggal lahir digabung menjadi satu angka, lalu dijumlahkan setiap digitnya secara berulang hingga menghasilkan **satu angka (1-9)**.

Contoh:

```
1 Januari 2008
→ "112008"
→ 1+1+2+0+0+8 = 12
→ 1+2 = 3
```

### Output

Jika perhitungan berhasil, sistem akan menampilkan:

- Tabel hasil perhitungan bertahap
- Angka garis hidup (1-9)
- Deskripsi karakter berdasarkan hasil angka

Logika karakter menggunakan **switch-case** sehingga setiap angka memiliki deskripsi kepribadian yang berbeda.

---

# Tech Stack

- **HTML5** → struktur halaman
- **CSS3** → styling dan layout (Flexbox & Grid)
- **JavaScript (ES6)** → manipulasi DOM dan logika program

---

# Struktur Folder

```
/
├── index.html
├── menu.html
├── calculator.html
├── garis_hidup.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── asset/
    ├── logo-itenas.png
    └── gedung.jpeg
```
