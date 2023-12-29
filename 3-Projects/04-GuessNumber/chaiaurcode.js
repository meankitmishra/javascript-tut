let randomNumber =Math.floor(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessingSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuesses = []
let numGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(guess === '' || guess < 1 || guess > 100 || isNaN(guess)){
        alert('Please enter a valid number')
    }else{
        prevGuesses.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessage(`Gameover!!! Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right!!!`)
        endGame()
    }else if( guess < randomNumber){
        displayMessage(`Your guess is lower than the target`)
    }else if( guess > randomNumber){
        displayMessage(`Your guess is higher than the target`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessingSlot.innerHTML+=(`${guess}   `)
    numGuesses++
    remaining.innerHTML=(`${11-numGuesses}`)
}

function displayMessage(message){
    lowOrHi.innerHTML=(`<h2>${message}</h2>`)
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id ="newGame" >Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        userInput.value = ''
        randomNumber = Math.floor(Math.random()*100+1)
        numGuesses = 1
        prevGuesses=[]
        guessingSlot.innerHTML=''
        remaining.innerHTML=(`${11-numGuesses}`)
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}