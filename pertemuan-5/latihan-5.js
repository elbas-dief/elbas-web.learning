// Latihan 1
const namaBarang = "Beras 5kg"
const hargaSatuan = 62000
const jumlah = 3

let total = hargaSatuan * jumlah
console.log(`${namaBarang} x ${jumlah} = Rp ${total} \n`);
// console.log(namaBarang, "x", jumlah, "= Rp", total);

// Latihan 2
const totalBelanja = 300000
const statusMember = "Silver"
let diskon;

if (statusMember == "Gold") {
    diskon = 0.2;
} else if (statusMember == "Silver") {
    diskon = 0.1;
} else {
    diskon = 0;
}

let potongan = totalBelanja * diskon

let totalBayar = totalBelanja - potongan

console.log(`Total = ${totalBelanja}`);
console.log(`Potongan = ${potongan}`);
console.log(`Total Bayar = ${totalBayar} \n`);


