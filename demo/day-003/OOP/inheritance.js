class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class person extends people { //sub class dari people

    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
}

const burhan = new person("burhan", 24, "karyawan");

console.log(burhan.name);
console.log(burhan.age);
console.log(burhan.job);