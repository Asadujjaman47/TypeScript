"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country}  is playing!`);
    }
}
;
const mashrafi = new Player('Mashrafi', 40, 'Bangaldesh');
const shakib = new Player('Shakib', 38, 'Bangaldesh');
// Players array
const Players = [];
Players.push(mashrafi, shakib);
