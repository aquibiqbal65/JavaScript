let Random = parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

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
     if(isNaN(guess)){
        alert('please enter a valid number')
     }
     else if(guess<1){
        alert('please enter a number greater than 1')
     }
     else if(guess>100){
        alert('please enter a number less than 100')
     }
     else{
        preGuess.push(guess)
        if(NumGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over , Random Number was ${Random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess(guess){
    if(guess === Random){
        displayMessage('You Guessed it Right! :)')
        endGame()
    }
    else if(guess < Random){
        displayMessage('Number is too low!')
    }
    else if(guess > Random){
        displayMessage('Number is too high!')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    NumGuess++;
    remaining.innerHTML = `${11-NumGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.setAttribute('disabled', true)
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    p.addEventListener('click', newGame);
    StartOver.appendChild(p);
    playGame = false;
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
        p.addEventListener('click', function(e){
        let Random = parseInt(Math.random()*100+1);
        preGuess = []
        NumGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-NumGuess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        playGame = true;
    })
}