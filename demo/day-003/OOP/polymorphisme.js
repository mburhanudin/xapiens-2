class People {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello my name is ${this.name}`
    }
}

class Person extends People {
    constructor(name) {
        super(name)
    }

    // greet() {
    //     return `halo saya ${this.name}`
    // }
}

const burhan = new Person("Burhan");
console.log(burhan.greet());