class Player {

    constructor(
        private name: string,
        public age: number,
        readonly country: string,
    ) {}

    play() {
        console.log(`${this.name} from ${this.country}  is playing!`);
    }
};

const mashrafi = new Player('Mashrafi', 40, 'Bangaldesh');
const sakib = new Player('Sakib', 38, 'Bangaldesh');

sakib.name = "Mashrafi";
sakib.age = 40;
sakib.country = 'England';
console.log(sakib.name);
console.log(sakib.age);
console.log(sakib.country);
