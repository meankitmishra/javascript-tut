// function addTwoNumber (number1, number2){// here number1 and number2 are parameters
//     console.log(Number(number1)+Number(number2))
// }

function addTwoNumber (number1, number2){
    return Number(number1)+Number(number2)
}

const sum = addTwoNumber(3,'4') // here 3 and  4 are arguments 
// console.log("result: ", sum)

function logginUserMessage(username){
    if(username){
        return `${username} Just Logged In.`
    }
    console.log('please enter a username');
    return 
}

// logginUserMessage('Ankit')
// console.log(logginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

const user = {
    username : "Ankit",
    price: 199
}

function objHandler(anyObject){
    console.log(`the user is ${anyObject.username} and the price is ${anyObject.price}`)
}

objHandler(user)