// ==========================================
// LOGIKA UNTUK HALAMAN UTAMA
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const tombolShout = document.getElementById("btn-shout");

  if (tombolShout) {
    tombolShout.addEventListener("click", function () {
      alert("Hai, Selamat datang di Sistem Sederhana");
    });
  }
});

// ==========================================
// LOGIKA UNTUK HALAMAN MENU
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const tombolShout = document.getElementById("btn-shout");
  if (tombolShout) {
    tombolShout.addEventListener("click", function () {
      alert("Hai, Selamat datang di Sistem Sederhana");
    });
  }

  const qtyBakso = document.getElementById("qty-bakso");
  const qtySoto = document.getElementById("qty-soto");
  const qtyMie = document.getElementById("qty-mie");

  const fieldTotal = document.getElementById("jumlah-total");
  const fieldDiskon = document.getElementById("diskon");
  const fieldBayar = document.getElementById("jumlah-bayar");

  const btnReset = document.getElementById("btn-reset");

  if (qtyBakso) {
    alert("Input Jumlah Pesanan agar dihitung Otomatis oleh Sistem");

    const hargaBakso = 12000;
    const hargaSoto = 10000;
    const hargaMie = 15000;

    function hitungTotal() {
      let b = parseInt(qtyBakso.value) || 0;
      let s = parseInt(qtySoto.value) || 0;
      let m = parseInt(qtyMie.value) || 0;

      if (b < 0) {
        b = 0;
        qtyBakso.value = 0;
      }
      if (s < 0) {
        s = 0;
        qtySoto.value = 0;
      }
      if (m < 0) {
        m = 0;
        qtyMie.value = 0;
      }

      let total = b * hargaBakso + s * hargaSoto + m * hargaMie;

      let diskon = 0;
      if (total > 50000) {
        diskon = total * 0.1;
      }

      let bayar = total - diskon;

      fieldTotal.value = total;
      fieldDiskon.value = diskon;
      fieldBayar.value = bayar;
    }

    qtyBakso.addEventListener("input", hitungTotal);
    qtySoto.addEventListener("input", hitungTotal);
    qtyMie.addEventListener("input", hitungTotal);

    btnReset.addEventListener("click", function () {
      qtyBakso.value = 0;
      qtySoto.value = 0;
      qtyMie.value = 0;
      hitungTotal();
    });
  }
});

// ==========================================
// LOGIKA UNTUK HALAMAN CALCULATOR
// ==========================================
const calcIn1 = document.getElementById("calc-in1");
const calcIn2 = document.getElementById("calc-in2");
const calcOp = document.getElementById("calc-op");
const calcOut = document.getElementById("calc-out");
const btnHitung = document.getElementById("btn-hitung");
const btnResetCalc = document.getElementById("btn-reset-calc");

if (calcIn1) {
  btnHitung.addEventListener("click", function () {
    const val1 = calcIn1.value;
    const val2 = calcIn2.value;

    if (val1 === "" || val2 === "") {
      alert("Inputan tidak boleh kosong!");
      return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (num1 <= 0 || num2 <= 0) {
      alert("inputan pertama dan kedua harus lebih dari 0");
      return;
    }

    let result = 0;
    const op = calcOp.value;

    if (op === "*") {
      result = num1 * num2;
    } else if (op === "/") {
      result = num1 / num2;
    } else if (op === "+") {
      result = num1 + num2;
    } else if (op === "-") {
      result = num1 - num2;
    } else if (op === "%") {
      result = num1 % num2;
    } else if (op === "^") {
      result = num1 ** num2;
    }

    calcOut.value = result;
  });

  btnResetCalc.addEventListener("click", function () {
    calcIn1.value = "";
    calcIn2.value = "";
    calcOp.value = "*";
    calcOut.value = "";
  });
}
