const axios = require('axios');
const fill = [];

function getPost() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => console.log(response))
}

function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => console.log(response))
}

const isi = axios.all([getPost(), getUsers()])
fill.push(isi);
console.log(fill);