// const temperature = 41 

// if(temperature === 40){
//     console.log("the temperature is 40");
// }else{
//     console.log("the temperature is not 40");
// }

// const balance = 1000

// if(balance < 500){
//     console.log('balance is less than 500');
// }else if (balance < 750){
//     console.log('balance is less than 750');
// }else if(balance < 900){
//     console.log('balance is less than 999');
// }else{
//     console.log('balance is greater than 999');
// }

const userLoggedIn = true 
const balance = true 

if(userLoggedIn && balance){
    console.log("Allow to buy the course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}