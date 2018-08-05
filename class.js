class Car {
    constructor(year, model, horsePower) {
        this.year = year;
        this.model = model;
        this.horsePower = horsePower;
    }

    getCarType() {
        return `${this.year} ${this.model}`;
    }

    showHorsePower() {
        return `Has this many horse power ${this.horsePower}`;
    }
}

const myCar = new Car("2011", "Chevy", "550");

console.log(myCar.getCarType());
console.log(myCar.showHorsePower());