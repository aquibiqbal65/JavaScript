const Random = parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess = []
let NumGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
     
}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMessage(message){

}

function newGame(){

}

function endGame(){

}