// IIFE 
(function one(){
    console.log(`DB Connected`);
})();

const user ={
    username: "Ankit",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }

}

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = ()=>{
//     console.log(this);
// }

// chai()



