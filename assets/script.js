// Crystal Words Arrays 
var wordlist = ["onyx", "diamond", "obsidain", "quartz", "jade", "peridot"]
//Empty Arrays to create blanks and letter 
var lettersChosen = [];
var blankWords= []; 

// Queryselectors
var win = document.querySelector(".wins");
var lost = document.querySelector(".losses");
var startBtn = document.querySelector(".start");
var WordGuess = document.querySelector(".word-guess");
var timerElm = document.querySelector(".timer-count");
var resetBtn = document.querySelector(".reset-btn");
var numBlanks = 0;
var winCounts = 0;
var lostCounts = 0;
var timer;
var timerCounter;
var wordChoice = "";
var isWinner = false;
// function that is called when page is loading 
function beginGame(){
    getWins();
    getLost();
}
 // click addeventlistner on start button 
 startBtn.addEventListener("click", startGame);


  //renderword blanks 
function startGame(){
    isWinner = false;
    timerCounter = 12;
    startBtn.disabled = true;
    // begin timer and render the blanks 
    renderBlanks();
    startTime();

}
// function for winning the game 
function Winner() {
    WordGuess.textcontent = "You Win!! Yay";
    winCounts++
    startBtn.disabled = false;
    setWins()
}
// function for Losing the game
function Loser() {
    WordGuess.textcontent = "You Lose!";
    lostCounts++
    startBtn.disabled = false;
    setLost()
}

// Time interval set to start and triggers 
function startTime() {
    // set timer
    timer = setInterval(function(){
        timerCounter--;
        timerElm.textContent = timerCounter;
        if (timerCounter >= 0 ) {
            if (isWinner && timerCounter > 0 ){
                clearInterval(timer);
                Winner();
            }
        }
        if (timerCounter === 0 ) {
            //fixed
            clearInterval(timer);
            Loser();
        }
    }, 1000);
}
//fix / debug

// renders blanks 
function renderBlanks() {
    wordChoice = wordlist[Math.floor(Math.random() * wordlist.length)];
    lettersChosen = wordChoice.split("");
    numBlanks = lettersChosen.length;
    blankWords = []
    // Using a loop to help render the blanks
    for ( var i = 0; i < numBlanks; i++){
        blankWords.push("_");
    }
    WordGuess.textContent = blankWords.join(" ")
}
//.localstorage.getitem for wins and displaying win counts 
// .localstorage.setitem for lost
function getWins(){
    var winScored = localStorage.getItem("winCounts");
    if (winScored === null){
        winCounts = 0;
    }else {
        winCounts = winScored;
    }
    win.textContent = winCounts;
}
 function setWins() {
     win.textContent = winCounts;
     localStorage.setItem("winCounts", winCounts);
 }
 function setLost() {
    lost.textContent = lostCounts;
    localStorage.setItem("lostCounts", lostCounts);
}
function getLost () {
    var lostScored = localStorage.getItem("lostCounts");
    if (lostScored === null) {
        lostCounts = 0;
    } else {
       lostCounts = lostScored;
    }
    lost.textContent = lostCounts;
}
// function to check letter and check if win
function checkWords(letters) {
    var letterinWords = false;
    for (var i = 0 ; i < numBlanks; i++) {
        if (wordChoice[i] === letters) {
            letterinWords = true;
        }
    }
    if (letterinWords){
        for ( var j = 0; j < numBlanks; j++) {
            if(wordChoice[j] === letters) {
            blankWords[j] = letters;
            }
        }
        WordGuess.textContent = blankWords.join (" ");
    }
}
//check letters to see if the letter the user press will populate 
function checkwins(){
    if (wordChoice === blankWords.join("")) {
        isWinner = true;
    }
}
// .addeventlistner to list for key events 
document.addEventListener("keydown", function(event){
    if ( timerCounter === 0 ){
        return;
    }
    var key = event.key.toLowerCase();
    var alphaNumChar = "abcdefghijklmnopqrstuvwxyz0123456789". split("");
    if (alphaNumChar.includes(key)) {
        var guessedLetters = event.key;
        checkWords(guessedLetters)
        checkwins();
    }
});
// click addeventlistner on start button 
 startBtn.addEventListener("click", startGame);
 
 // checking to see if reset btn works
  resetBtn.addEventListener("click", reset);

// reset button and win and lose count 
 function reset() {
    winCounts = 0;
    lostCounts = 0;
    setWins()
    setLost()
}
beginGame();





