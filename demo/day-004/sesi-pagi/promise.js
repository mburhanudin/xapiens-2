//syntax promise
let janjian = new Promise((resolve, reject) => {
    resolve('berhasil')
    reject(new Error('error'))
})

//cra menggunakan promise
janjian.then((result) => { console.log(result) }) //promise then 
    .catch((error) => { console.log(error) }) //promise catch
    .finally(() => { console.log('Jalan terus') }) //promise finally


//promise all
const promise1 = Promise.resolve(5);
const promise2 = 45;
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, "zoo");
    //reject(new Error('error'))
})

//cara memanggilnya
Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values)
})