const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length) // gives the number of digits
console.log(balance.toFixed(1))//gives a string with fraction point

const otherNumber = 11.8966

console.log(otherNumber.toPrecision(3))// gives string

const hundreds = 10000000;

console.log(hundreds.toLocaleString('en-In'))

// console.log(Number.MIN_SAFE_INTEGER); 

// +++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-909)) // mod of the number
console.log(Math.round(4.56)); 
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.max(4,7,6,8,12))

console.log(Math.floor((Math.random()*10)+1)) // 1 to 10

// random number between 10 to 20
// min 10.  max 20. 

console.log(Math.floor((Math.random()*(20-10+1))+10))