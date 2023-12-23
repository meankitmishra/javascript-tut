let obj1 = new Object();

obj1={1 : 'a' , 2 : 'b'}

const obj2 = {3 : 'c', 4 : 'd'}

const obj3 = Object.assign({}, obj1, obj2); // here {} is the target object all the properties of obj1 and obj2 will be copied to it
console.log(obj3);
//or we can use the spread operator

const obj4 = {...obj1,...obj2};
console.log(obj4);

const user = [
    {
        id: 1,
        email: 'Ankit@xyz.com'
    },
    {
        id: 2,
        email: 'bruh@xyz.com'
    }
]

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty(3))