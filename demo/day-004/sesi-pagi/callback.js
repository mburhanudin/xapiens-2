//callback pada synchronous
// function kalkulasi(m, n) {
//     result = m + n
//     return result
// }

// console.log(kalkulasi(4, 5))

//example lanjutan 
// function calculate(p1, p2, callback) {

//     //defaul operasi
//     result = p1 + p2

//     if (typeof callback == 'function') {
//         result = callback(p1, p2)
//     }

//     return result
// }

//eksekusinya
// a = calculate(2000, 4000, function(o, p) { return "$" + (o + p) })
// b = calculate(5000, 4000, function(o, p) { return "Rp" + (o * p) })
// console.log(a)
// console.log(b)

//callback asynchronous
// function m1() {
//     console.log('m1 selesai')
// }

// function m2(callback) {
//     setTimeout(
//         function() {
//             console.log('m2 selesai')
//             callback()
//         }, 1000
//     )
// }

// function m3() {
//     console.log('m3 selesai')
// }
// m1()
// m2(m3)

//callback hell / callback didalam callback / callback yang bercabang
const proses1 = (callback, err) => {
    setTimeout(() => {
        callback('proses 1 selesai');
    }, 1000)
}

const proses2 = (callback, err) => {
    setTimeout(() => {
        callback('prosses 2 selesai');
    }, 1000);
}

const proses3 = (callback, ) => {
    setTimeout(() => {
        callback('proses 3 selesai');
    }, 1000)
}

proses1((pesan1) => {
    console.log(pesan1);
    proses2((pesan2) => {
        console.log(pesan2);
        proses3((pesan3) => {
            console.log(pesan3);
        })
    })
})