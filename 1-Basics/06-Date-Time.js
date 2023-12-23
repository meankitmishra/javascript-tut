// Dates is of object datatype

const myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


const mycreatedDate = new Date(2023, 0, 23); // 0 => represents january
console.log(mycreatedDate.toDateString());

console.log(Math.floor(Date.now()/1000))

console.log(myDate.toLocaleString('default',{
    weekday:'long',
    minute:'numeric'
}));