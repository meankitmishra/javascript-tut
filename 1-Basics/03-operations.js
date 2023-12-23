console.log("1"+ 2);//string

console.log(1+"2");//string

console.log("1"+"2");//string

console.log("1"+2+2); // if string is first, the default datatype becomes string 

console.log(1 + 2 + "2"); // if number is first, the default datatype becomes number then string

console.log(+true)//number

console.log(+"")//number

console.log(+"1" + 2)//number

console.log(3 - "2")//number

let a = 3
console.log(a);
let x = a++
console.log(a,x);
let y = ++a
console.log(a,x,y);
