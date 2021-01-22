//synchronous = menjalankan sesuatu sesuai urutan kode yang kita tulis
console.log('orang kedua');
console.log('orang ketiga');
console.log('orang pertama');
//output dijalankan sesuai urutan

//2. asynchronous = hasil eksekusi kode tidak selalu sesuai urutanya, bisa berdasar waktu proses.

console.log('contoh asynchronous');
setTimeout(() => { console.log('ini jeda cuy') }, 2000) //tunda 2 detik
console.log('yang ini duluan')