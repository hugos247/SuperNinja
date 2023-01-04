class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName () {
        console.log(`The name is ${this.name}`);
    }

    showStats () {
        console.log(`The name is ${this.name}`);
        console.log(`It has ${this.health} health`);
        console.log(`It has ${this.speed} speed`);
        console.log(`It has ${this.strength} strength`);
    }

    drinkSake () {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor (name) {
        super("Maestro Splinter");
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacer en dos meses");
    }
}

const sensei1 = new Sensei

sensei1.speakWisdom();
sensei1.showStats();