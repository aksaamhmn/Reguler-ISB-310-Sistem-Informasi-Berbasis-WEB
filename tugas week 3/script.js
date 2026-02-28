// mengambil elemen-elemen dari HTML berdasarkan ID-nya
const inputBgColor = document.getElementById("bgColor");
const inputTxtColor = document.getElementById("txtColor");
const tombolSimpan = document.getElementById("btnSimpan");

// menambahkan event listener ketika tombol simpan di-klik
tombolSimpan.addEventListener("click", function () {
  const warnaLatarBaru = inputBgColor.value;
  const warnaTeksBaru = inputTxtColor.value;

  document.body.style.backgroundColor = warnaLatarBaru;
  document.body.style.color = warnaTeksBaru;
});
