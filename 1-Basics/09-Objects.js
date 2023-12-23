// singelton
//Object.create()

//object literal
const mysym = Symbol('123')

const JsUser = {
    name: 'Ankit',
    "full name": "Ankit Kumar Mishra",
    [mysym]: 123,
    age: 20,
    email: 'ankit@xyz.com',
    isLoggedin : false,
    lastLogindays:['monday', 'saturday']

}

console.log(JsUser);

//console.log(JsUser["full name"]);

// Object.freeze(JsUser);

JsUser.greeting = ()=>{
    console.log("hello Jee");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function (){
    console.log(`hello ${this.name}`);
}

console.log(JsUser.greetingTwo());