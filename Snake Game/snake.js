// Melanie Cuenca

// DECLARE GAME PARAMETERS /////////////////////////////////
const cellSize = 20;
const rows = 20; // rows >= 10
const cols = 20; // cols >= 10

// DECLARE OTHER CONSTANTS /////////////////////////////////
//
const LEFT = new p5.Vector(-1, 0);
const RIGHT = new p5.Vector(1, 0);
const UP = new p5.Vector(0, -1);
const DOWN = new p5.Vector(0, 1);

// DECLARE GAME STATE VARIABLES ////////////////////////////
let snake;
let dir;
let apple;
let eaten;
const INIT = 1;
const PLAYING = 2;
const PAUSED = 3;
const GAME_OVER = 4;

let phase;
// MAIN SETUP //////////////////////////////////////////////

function setup() {
  const canvasWidth = cols * cellSize;
  const canvasHeight = rows * cellSize;
  createCanvas(canvasWidth, canvasHeight);
  frameRate(10);
  initGameState();
}

// HELPER SETUP FUNCTIONS //////////////////////////////////

function initGameState() {
  // snake begins in the middle three rows
  snake = [new p5.Vector(10, 10), new p5.Vector(9, 10), new p5.Vector(8, 10)];
  dir = RIGHT;
  phase = 1;
  eaten = 0;
  apple = randomApplePosition(); // everytime the player resets the game the apple appears in a random position
}
function randomApplePosition() {
  // generates a vector with num of rows and num of colums
  let randX = Math.floor(Math.random() * rows + 1);
  let randY = Math.floor(Math.random() * cols + 1);
  return new p5.Vector(randX, randY);
}

// MAIN DRAW LOOP //////////////////////////////////////////

function draw() {
  drawGrid();
  drawApple();
  moveSnake();
  drawSnake();
  phaseDraw(); // draws the text from each phase
}

// HELPER DRAW FUNCTIONS ///////////////////////////////////
// These should draw but not update game state
function phaseDraw() {
  if (phase === 1) {
    fill("#CA5E83");
    textSize(35);
    textStyle(BOLD);
    text("SNAKE GAME", 81, 100);
    textSize(30);
    textStyle(NORMAL);
    text("Click to Play!", 115, 160);
  }
  if (phase === 2) {
    fill("#CA5E83");
    textStyle(BOLD);
    textSize(30);
    text(eaten, 20, 30);
    checkApple();
  }
  checkCollisions();
  if (phase === 3) {
    fill("#CA5E83");
    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("GAME PAUSED", 200, 110);
    textSize(30);
    textStyle(NORMAL);
    text("Click to Continue!", 200, 150);
  }
  if (phase === 4) {
    fill("#CA5E83");
    textSize(35);
    textStyle(BOLD);
    text("GAME OVER", 100, 200);
    textSize(25);
    text(eaten, 290, 230);
    text("FINAL SCORE: ", 110, 230);
    textStyle(NORMAL);
    text("To try again press ENTER", 70, 260);
  }
}

function drawGrid() {
  for (let col = 0; col < cols; col++) {
    const x = cellSize * col;
    for (let row = 0; row < rows; row++) {
      const y = cellSize * row;
      if ((row + col) % 2 === 0) {
        noStroke();
        fill("pink");
        square(x, y, cellSize);
      } else {
        noStroke();
        fill("white");
        square(x, y, cellSize);
      }
    }
  }
}

function drawSnake() {
  fill("palevioletred");
  for (let i = 0; i < snake.length; i++) {
    const x = snake[i].x * cellSize;
    const y = snake[i].y * cellSize;
    square(x, y, cellSize);
  }
}

function drawApple() {
  if (phase === 2) {
    phase = 2;
    fill("gold");
    square(apple.x * cellSize, apple.y * cellSize, cellSize);
  }
}

// EVENTS //////////////////////////////////////////////////
// These should update game state but not draw

function keyPressed() {
  if (keyCode === 37 && dir !== RIGHT) {
    //LEFT
    dir = LEFT;
  } else if (keyCode === 38 && dir !== DOWN) {
    //UP
    dir = UP;
  } else if (keyCode === 39 && dir !== LEFT) {
    //RIGHT
    dir = RIGHT;
  } else if (keyCode === 40 && dir !== UP) {
    //DOWN
    dir = DOWN;
  } else if (keyCode === 32) {
    phase = 3; // pause game
  } else if (phase === 4 && keyCode === 13) {
    initGameState(); // reset game only if game over is displayed
  }
}
function mousePressed() {
  phase = 2;
}

// HELPER CHECKS AND UPDATES ///////////////////////////////
// These should update game state but not draw

function moveSnake() {
  // Natalie helped me to create this
  if (phase === 2) {
    // first removes the tail from the array and copies the original head and adds the direction to create the new head
    snake.pop();
    snake.unshift(snake[0].copy().add(dir));
  }
}
// checks if the head is less than the grid or more than the grid and goes through the array and checks if the head and a part of the body of the snake is equal if it is true displays game over
function checkCollisions() {
  if (
    snake[0].x < 0 ||
    snake[0].x * cellSize >= width ||
    snake[0].y < 0 ||
    snake[0].y * cellSize >= height
  ) {
    phase = 4;
  }
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].equals(snake[0])) {
      phase = 4;
    }
  }
}
// checks if the snake touches the apple if true it spawns another apple and adds one to the eaten counter and adds another head to increase the legth of the snake;
function checkApple() {
  if (snake[0].equals(apple)) {
    phase = 2;
    apple = randomApplePosition();
    eaten++;
    snake.unshift(snake[0].copy().add(dir));
    return true;
  } else {
    return false;
  }
}
