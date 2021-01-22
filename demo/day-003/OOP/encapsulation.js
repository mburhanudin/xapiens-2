function Ongkir(berat) {
    this.pajak = 500;
    this.biaya = function() {
        return berat * 1
    }

    this.totalBiaya = function() {
        return this.biaya() * this.pajak
    }
}

const laptop = new Ongkir(4);
laptop.pajak = 20
console.log(laptop.totalBiaya());


//teknik encapsulation
function Ongkir(berat) {
    let pajak = 500;
    let biaya = function() {
        return berat * 1
    }

    this.totalBiaya = function() {
        return biaya() * pajak
    }
}

const laptop = new Ongkir(4);
laptop.pajak = 20
console.log(laptop.totalBiaya());