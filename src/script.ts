import { Player } from './classes/Player.js';
import { IsPlayer } from './interface/IsPlayer.js';

const mashrafi = new Player('Mashrafi', 40, 'Bangaldesh');
let sakib: IsPlayer;

sakib = new Player("Sakib", 35, "Bangladesh")

const Players: IsPlayer[] = [];

Players.push(sakib);
Players.push(mashrafi);