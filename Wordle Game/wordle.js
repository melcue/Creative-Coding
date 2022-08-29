// MISC GLOBAL VARIABLES ///////////////////////////////////

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allowRepeatLetters = false;
const numOfTiles = 5;
let nextLet = 0;
let gameNumber;
let wordList;
let correct = 0;

// THE GAME STATE OBJECT ///////////////////////////////////

let gameState;

// SETUP ///////////////////////////////////////////////////
// You shouldn't need to modify this.

function setup() {
  // The words array is defined in words.js
  simpleWords = words.filter(isSimpleWord);
  console.log(
    `Hello, worldle!`,
    `${words.length} words loaded`,
    `(${simpleWords.length} are simple)`
  );
  wordList = allowRepeatLetters ? words : simpleWords;

  noCanvas();
  initGameState();

  // Focus the canvas, rather than the codebox, upon Run.
  // NOTE: Remove this if you prefer.
    this.focus();
}

function isSimpleWord(word) {
  for (let i = 0; i < word.length; i++) {
    if (word.slice(i + 1).indexOf(word[i]) !== -1) {
      return false;
    }
  }
  return true;
}

function initGameState() {
  if (gameNumber === undefined) {
    gameNumber = round(random(wordList.length - 1));
  }
  const goalWord = wordList[gameNumber];
  console.log(`gameNumber = ${gameNumber}, goalWord = ${goalWord}`);
  if (!allowRepeatLetters && !isSimpleWord(goalWord)) {
    console.log("ERROR: How did a non-simple word get chosen ?!?");
  }

  gameState = {
    goalWord: goalWord,
    gameOver: false,
    currentGuess: [],
    numberOfGuesses: 0,
  };

  displayMessage("Good luck!");
}

// EVENTS ////////////////////////////////////////////////////////////
// You shouldn't need to modify this.

function keyPressed() {
  keyOrButtonPressed(key);
}

// "MAIN" FUNCTION ///////////////////////////////////////////////////

function keyOrButtonPressed(theKey) {
   currentGuess= gameState.currentGuess;
  numberOfGuesses = gameState.numberOfGuesses;
  if (!gameState.gameOver) {
    theKey = theKey.toUpperCase();
    console.log("keyOrButtonPressed:", theKey);
    let row = document.getElementsByClassName("row")[numberOfGuesses];
    let box = row.getElementsByClassName("tile")[nextLet];
    if (alphabet.indexOf(theKey) !== -1) {
      if (nextLet <= 4) {
        box.innerText = theKey;
        currentGuess.push(theKey);
        nextLet++;
      }
    } else if (theKey === "BACKSPACE" || theKey === "DELETE") {
      if (nextLet > numberOfGuesses * numOfTiles) {
         currentGuess.pop();
        nextLet--;
        let box = row.getElementsByClassName("tile")[nextLet];
        box.textContent = "";
      }
    } else if (theKey === "ENTER") {
      if (currentGuess.length < numOfTiles) {
        displayMessage("Not enough letters");
      } else if (isCurrentGuessInWordList() === false) {
        displayMessage("Not in the word list");
      } else if (isCurrentGuessInWordList() === true){
        commitCurrentGuess();
      }
    }
  }
}

// HELPER FUNCTIONS ////////////////////////////////////////////////////
// this function clears the panel and adds a string to display it
function displayMessage(str) {
  const panel = document.getElementById("message-panel");
  panel.textContent = "";
  panel.innerText = str;
}
// Nostalgia helped me with this function
function isCurrentGuessInWordList() { 
      for (let i = 0; i < wordList.length; i++) {
    if (gameState.currentGuess.slice(i + 1).indexOf(gameState.currentGuess[i]) !== -1) {
     return false;
    }
  }
  return true;
 
}
// Manipulates gameState depending on the green tiles which are measured using the correct counter
function commitCurrentGuess() {
  colorCurrentGuess();
   if (correct === 5) {
    displayMessage("Correct!");
     gameState.gameOver = true;
  } else if (correct < 5){
    gameState.numberOfGuesses++;
    gameState.currentGuess = [];
    nextLet = 0;
    if (gameState.numberOfGuesses > 5) {
      displayMessage(
        "Sadly, you ran out of guesses. The correct word was: " +
          goalWord
      );
    }
  }
}
//colors each letter of guess approprietly 
function colorCurrentGuess() {
  // TODO: Fill this in.
  goalWord = gameState.goalWord.toUpperCase();
  for (let i = 0; i < currentGuess.length; i++) {
    let row = document.getElementsByClassName("row")[numberOfGuesses];
    let box = row.getElementsByClassName("tile")[i];
    let letterPosition = goalWord.indexOf(currentGuess[i]);
    if (letterPosition === -1) {
      box.style["background-color"] = "gray";
    } else if (currentGuess[i] === goalWord[i]) {
      box.style["background-color"] = "green";
      correct++;
    } else {
       box.style["background-color"] = "yellow";
    }
}
}
