//javascript =  is a single-threaded, non-blockingm asynchronous dan concurrent language
// - single thread = thread itu urutan eksekusi kode yang dapat dilakukan secara bebas satu sama lain
// intinya javascript dapat melakukan 1 hal dalam 1 waktu tertentu karena single threaded
// thread 1 -> task 1 -> task 2
// blocking => jika punya code yang lama di eksekusi, kalau task 1 belum selesai maka ga bisa masuk ke task 2
// non blocking => kebalikanya blocking
// synchronous => task 1 -> task 2 -> task 3> 
// asynchronous => bisa pindah" task walau task 1 belum selesai, sampai akhirnya task1 selesai, task 2 selesai ini kalau cingle threaded
// kalau multi threaded => banyak thread bisa mengerjakan bareng". 
// async + single threaded = concurrency
// async + multi threade == parrallelism

console.log('Hello');
setTimeout(() => { console.log('Javascript') }, 1000) // tunda selama 100 miliseconds
console.log('Coder');

/* ----------
Output :
Hello!
Coder
Javascipt
------------*/