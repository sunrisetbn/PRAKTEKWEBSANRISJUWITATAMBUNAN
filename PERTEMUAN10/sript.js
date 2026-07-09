// 1. Menangani fungsi Klik Register dan Login memakai querySelectorAll
const tombolTombol = document.querySelectorAll(".btn-alert");

tombolTombol.forEach((tombol) => {
  tombol.addEventListener("click", function () {
    alert("Website Dalam Perbaikan");
  });
});

// 2. Mengubah teks orange setiap 4 detik memakai setInterval
const teksOrange = document.querySelector("#tagline-orange");
const daftarGenre = ["Horror", "Action", "Romance", "Comedy"];
let indeks = 1; // Dimulai dari 1 karena teks awal di HTML sudah "Action"

setInterval(function () {
  teksOrange.textContent = daftarGenre[indeks];

  // Berpindah ke indeks selanjutnya, jika sudah habis kembali ke 0
  indeks = (indeks + 1) % daftarGenre.length;
}, 4000); // 4000 milidetik = 4 detik