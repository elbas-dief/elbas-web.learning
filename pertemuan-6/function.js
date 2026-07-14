function greeting() {
    console.log("Halo semuanya");
    console.log("Saya sedang belajar");
}

greeting()

function kenalan (nama, umur) {
    console.log("Kenalin nama saya");
}

kenalan (nama, 27)

const produk = [
  { nama: "Laptop", harga: "Rp 9.990.000" },
  { nama: "Mouse",  harga: "Rp 150.000" },
];

// function render() {
//   const container = document.getElementById("daftarProduk");
//   container.innerText = "JavaScript"; // kosongkan dulu

// //   produk.forEach((p) => {
// //     const card = document.createElement("div");
// //     card.className = "card p-3 mb-2";
// //     card.innerHTML = `
// //       <h5>${p.nama}</h5>
// //       <p>${p.harga}</p>
// //     `;
// //     container.appendChild(card);
// //   });
// }

const judul = document.getElementById("daftarProduk");

judul.textContent = "Teks Baru";     // ubah teks (aman)
judul.innerHTML = "<b>Teks Baru</b>";// ubah isi HTML (boleh ada tag)
judul.style.color = "red"; 