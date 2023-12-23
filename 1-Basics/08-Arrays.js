const marvel_heros = ['ironman', 'spiderman', 'captain america', 'thor'];

const dc_heros = ['batman', 'spuerman', 'flash']

// if we use push the other array will take the other array as an element

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// so lets use concat

const all_heroes = marvel_heros.concat(dc_heros)
console.log(all_heroes);

const all_new_heroes = [...marvel_heros,...dc_heros];

console.log(Array.isArray("Ankit"));

console.log(Array.from('Ankit'))

console.log(Array.from({user:'Ankit'}))// interesting

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));