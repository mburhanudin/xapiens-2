//asyn -> mengubah functon jadi asynchronus
//await -> menunda eksekusi hingga proses asyn selesai. 

// async function hello() {
//     result = await doAsync()
//     console.log(result)
// }

//study case asyn/await 

const isNumber = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
            err = 'salahsatu bukan sebuah angka';
            reject(err);
        } else {
            resolve(true)
        }
    }, 500)
});

const divide = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (b === 0) {
            err = 'dibagi 0'
            return reject(err);
        }

        const result = Number(a) / Number(b);
        resolve(result);
    }, 1500)
});

const multiply = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Number(a) * Number(b);
        resolve(result);
    }, 1000);
});

const add = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Number(a) + Number(b);
        resolve(result);
    }, 500);
});

const run = async function(a, b) {
    await isNumber(a, b);
    const divideresult = await divide(a, b); //9  : 3 = 3 
    const multiplyResult = await multiply(divideresult, 5); //3 x 5 = 15
    const addResult = await add(multiplyResult, 1); //15 + 1 = 6

    return addResult;
};

run(9, 3)
    .then((result) => console.log(`Hasil akhirnya adalah ${result}`))
    .catch((err) => console.log(err));