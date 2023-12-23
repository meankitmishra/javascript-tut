// Arrays

const myArr = [0,1,2,"Ankit",4,5,true,7]

// myArr.push(29)
// myArr.pop()


myArr.unshift(69) // adds elements to the 0th index and shifts all the index 
myArr.shift(); // removes element from the 0th element
console.log(myArr);
console.log(myArr.includes(7))
console.log(myArr.indexOf("Ankit"))

const newArr = myArr.join()
console.log(newArr, typeof(newArr))

// slice and splice
const arr = [0,1,2,3,4,5]

console.log("A " , arr);

const newarr1 = arr.slice(1,3)//3 is not included in slice

console.log(newarr1);

console.log("B " , arr);

const newarr2 = arr.splice(1,3)//in splice the new array is taken from the old array by mannuplating the old array means old array is divided into two array

console.log(newarr2);

console.log("C " , arr);

