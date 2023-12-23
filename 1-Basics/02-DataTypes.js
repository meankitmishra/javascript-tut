// Primitive datatypes

//number
//bigint
//string
//boolean
//null
//undefined
//symbol

//array
//object

// null is of object type
// undefiend is undefined only

let score = false

console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber); // if score has some character instead of number the converted number will be NaN (not a number)
//if score has a value of null then the converted type of data is number and its 0
//if score has an undefined value then the converted number is a NaN (not a number)
// if score has a boolean value i.e true or false then the converted value ios 1 or 0 respectively
// "12" => 12
// "12a" => NaN
// null => 0
//undefined => NaN
// true => 1
// "ankit" => NaN

let isLoggedIn = null

let BooleanisLoggedIn = Boolean(isLoggedIn)

console.log(BooleanisLoggedIn);

// 1 => true. 0 => false
// "" => false "ankit" => true
// undefined => false null => false 

let number = 12

let stringNumber = String(number)

console.log(stringNumber);

