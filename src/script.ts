import { Player } from './classes/Player.js';

const mashrafi = new Player('Mashrafi', 40, 'Bangaldesh');
const sakib = new Player('Sakib', 38, 'Bangaldesh');

console.log(sakib.age);
console.log(sakib.country);

// define interface 
interface RectangleOptions {
    width: number;
    length: number;
}
function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
}

let threeDoptions = {
    width: 30,
    length: 20,
    height: 10,
};

drawRectangle(threeDoptions);
