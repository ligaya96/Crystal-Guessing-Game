// Crystal Words Arrays 
var wordlist = ["Onyx", "Diamond", "Obsidain", "Quartz", "Jade", "Peridot"]
//Empty Arrays to create blanks and letter 
var lettersChosen = [];
var blankWords= []; 

// Queryselectors
var win = document.querySelector(".wins");
var lost = document.querySelector(".losses");
var startBtn = document.querySelector(".Start");
var WordGuess = document.querySelector("word-guess");
var timer = document.querySelector(".timer-count");

var winCounts = 0;
var lostCounts = 0;
var timer;
var timerCounter;
var wordChoice = "";
var isWinner = false;

    //renderword blanks 
function startGame(){

}
function reset() {

}


// Time interval
// .addeventlistner to list for key events 
//check letters to see if the letter the user press will populate 
// 
// click listner on start button and reset button
//.localstorage.getitem
// .localstorage.setitem
// reset button and win and lose count 
