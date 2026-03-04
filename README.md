## Overview Sistem

Sistem ini merupakan aplikasi berbasis web sederhana (statis) yang dibangun untuk memenuhi tugas mata kuliah **Sistem Informasi**. Aplikasi ini mensimulasikan tiga fungsi utama dalam satu antarmuka yang konsisten:

- Halaman Sambutan (**Home**)
- Sistem Kasir Otomatis (**Menu**)
- Kalkulator Matematika Dasar (**Calculator**)

---

# Fitur Utama

Sistem ini terdiri dari **tiga halaman utama** dengan fitur masing-masing:

---

## Halaman Home (`index.html`)

- Menampilkan layout utama berupa **header (grid 6 gambar gedung)** dan **navigasi sidebar**.
- Tombol **"Shout"**:
  - Saat diklik akan memicu **alert browser**.
  - Menampilkan pesan sapaan:

```
Hai, Selamat datang di Sistem Sederhana
```

---

## Halaman Menu Kasir (`menu.html`)

### Auto Greeting

Saat halaman dimuat, sistem akan memberikan **alert instruksi** kepada pengguna untuk menginput pesanan.

### Kalkulasi Real-Time

Terdapat **3 menu makanan**:

- Bakso Istimewa
- Soto Spesial
- Mie Ayam Super

Total harga akan **otomatis dihitung** ketika pengguna mengetik jumlah pesanan tanpa perlu menekan tombol submit.

Teknologi yang digunakan:

- **JavaScript event listener (`input`)**

### Sistem Diskon Otomatis

Jika total pembelian **lebih dari Rp 50.000**, maka sistem otomatis memberikan:

- **Diskon 10%**
- Menampilkan **total bayar akhir**

---

## Halaman Kalkulator (`calculator.html`)

Kalkulator sederhana yang mendukung **6 operator matematika**:

- Perkalian `*`
- Pembagian `/`
- Penjumlahan `+`
- Pengurangan `-`
- Modulus / Sisa Bagi `%`
- Pangkat `^`

### Validasi Input

**1. Input kosong**

Jika field belum diisi maka akan muncul alert:

```
Inputan tidak boleh kosong!
```

**2. Nilai tidak valid**

Jika user menginput angka **0 atau negatif**, maka akan muncul:

```
inputan pertama dan kedua harus lebih dari 0
```

### Tombol

- **Hitung** → menjalankan perhitungan
- **Reset** → membersihkan semua input

---

# Tech Stack

Proyek ini menggunakan teknologi **Vanilla Web Development (tanpa framework)** untuk memperkuat pemahaman fundamental.

### HTML5

Digunakan untuk:

- Struktur halaman
- Semantic layout
- Arsitektur **multi-page**

### CSS3 (Vanilla)

Digunakan untuk:

- Layouting
- Styling halaman

Teknik yang digunakan:

- **Flexbox**
- **CSS Grid**

### JavaScript (ES6)

Digunakan untuk:

- Manipulasi **DOM (Document Object Model)**
- Logika perhitungan
- Event handling

---

# Struktur Folder & File

```
/ (Root Directory)
│
├── index.html           # Halaman utama (Home / Tombol Shout)
├── menu.html            # Halaman Menu (Sistem Kasir)
├── calculator.html      # Halaman Kalkulator
│
├── css/
│   └── style.css        # File CSS utama untuk seluruh halaman
│
├── js/
│   └── script.js        # File JavaScript utama
│
└── asset/
    ├── logo-itenas.png   # Gambar pola background logo ITENAS
    └── gedung.jpeg      # Gambar header gedung ITENAS
```

---

# Penjelasan Teknis Detail

## 1. Arsitektur Layout (CSS Flexbox & Grid)

### Container Utama (`.main-box`)

Container utama memiliki:

- Lebar statis **1000px**
- Diposisikan di **tengah layar**

Menggunakan:

```css
display: flex;
justify-content: center;
align-items: center;
```

pada elemen **body** untuk memusatkan konten secara horizontal dan vertikal.

---

### Background Pattern

Background menggunakan:

- `background-repeat: repeat`
- `background-size`

Tujuannya untuk membuat efek **wallpaper berpola** menggunakan gambar logo ITENAS.

---

## 2. Logika JavaScript

Semua kode JavaScript ditulis dalam satu file:

```
script.js
```

Eksekusi dibungkus dengan:

```javascript
document.addEventListener("DOMContentLoaded", function () {});
```

Tujuannya agar JavaScript **hanya berjalan setelah seluruh HTML selesai dimuat**.

---

### Pemisahan Logika per Halaman

Karena **1 file JS digunakan oleh 3 halaman HTML**, maka digunakan pengecekan elemen DOM:

```javascript
if (document.getElementById("btn-shout")) {
}
```

Tujuannya untuk **mencegah error null reference** jika elemen tidak ada pada halaman tertentu.

---

### Sistem Kasir Real-Time (`menu.html`)

Menggunakan event:

```javascript
addEventListener("input");
```

Alasan menggunakan `input` dibanding `change`:

- Lebih responsif
- Mendeteksi **setiap keystroke**

Nilai input diambil menggunakan:

```javascript
parseInt();
```

Jika nilai kosong maka digunakan fallback:

```javascript
|| 0
```

Tujuannya agar perhitungan **tidak menghasilkan NaN**.

---

### Validasi Kalkulator (`calculator.html`)

Validasi dilakukan dengan:

```javascript
if (value === "")
```

untuk mendeteksi **input kosong**.

Operator diambil dari elemen:

```
<select>
```
