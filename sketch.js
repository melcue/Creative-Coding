// Melanie Cuenca HW 1
const red = "#FE2712";
const redOrange = "#FC600A";
const orange = "#FB9902";
const yellowOrange = "#FCCC1A";
const yellow = "#FEFE33";
const yellowGreen = "#B2D732";
const green = "#66B032";
const blueGreen = "#347C98";
const blue = "#0247FE";
const bluePurple = "#4424D6";
const purple = "#8601AF";
const redPurple = "#C21460";

const size = 400;

function setup() {
  createCanvas(size, size);
}

const initialDeg = 345;
const finalDeg = 15;
const changeDeg = 30;
let a = 30;
let b = 90;
const pointGap = 60;
const pointGap2 = 120;
const ax = 200;
const wh = 380;

function draw() {
  background("white");

  //draws and colors the 12 slices
  fill(redOrange);
  stroke("white");
  strokeWeight(1.2);
  angleMode(DEGREES);
  arc(ax, ax, wh, wh, initialDeg, finalDeg, PIE);

  fill(red);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 1 * changeDeg,
    finalDeg + 1 * changeDeg,
    PIE
  );

  fill(redPurple);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 2 * changeDeg,
    finalDeg + 2 * changeDeg,
    PIE
  );

  fill(purple);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 3 * changeDeg,
    finalDeg + 3 * changeDeg,
    PIE
  );

  fill(bluePurple);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 4 * changeDeg,
    finalDeg + 4 * changeDeg,
    PIE
  );

  fill(blue);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 5 * changeDeg,
    finalDeg + 5 * changeDeg,
    PIE
  );

  fill(blueGreen);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 6 * changeDeg,
    finalDeg + 6 * changeDeg,
    PIE
  );

  fill(green);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 7 * changeDeg,
    finalDeg + 7 * changeDeg,
    PIE
  );

  fill(yellowGreen);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 8 * changeDeg,
    finalDeg + 8 * changeDeg,
    PIE
  );

  fill(yellow);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 9 * changeDeg,
    finalDeg + 9 * changeDeg,
    PIE
  );

  fill(yellowOrange);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 10 * changeDeg,
    finalDeg + 10 * changeDeg,
    PIE
  );

  fill(orange);
  arc(
    ax,
    ax,
    wh,
    wh,
    initialDeg + 11 * changeDeg,
    finalDeg + 11 * changeDeg,
    PIE
  );

  // draws the donut hole
  fill("white");
  stroke("white");
  circle(ax, ax, 240);

  //equilateral purple triangle
  let purpleTriX1 = 120 * cos(a + pointGap) + ax;
  let purpleTriY1 = 120 * sin(a + pointGap) + ax;
  let purpleTriX2 = 120 * cos(a) + ax;
  let purpleTriY2 = 120 * sin(a) + ax;
  let purpleTriX3 = 120 * cos(a + pointGap * 2) + ax;
  let purpleTriY3 = 120 * sin(a + pointGap * 2) + ax;

  fill(purple);
  strokeWeight(0);
  triangle(
    purpleTriX1,
    purpleTriY1,
    purpleTriX2,
    purpleTriY2,
    purpleTriX3,
    purpleTriY3
  );

  // equilateral green triangle
  let greenTriX1 = 120 * cos(a + pointGap * 3) + ax;
  let greenTriY1 = 120 * sin(a + pointGap * 3) + ax;
  let greenTriX2 = 120 * cos(a + pointGap * 2) + ax;
  let greenTriY2 = 120 * sin(a + pointGap * 2) + ax;
  let greenTriX3 = 120 * cos(a + pointGap * 4) + ax;
  let greenTriY3 = 120 * sin(a + pointGap * 4) + ax;
  fill(green);
  triangle(
    greenTriX1,
    greenTriY1,
    greenTriX2,
    greenTriY2,
    greenTriX3,
    greenTriY3
  );

  //equilateral orange triangle
  let orangeTriX1 = 120 * cos(a + pointGap * 5) + ax;
  let orangeTriY1 = 120 * sin(a + pointGap * 5) + ax;
  let orangeTriX2 = 120 * cos(a + pointGap * 4) + ax;
  let orangeTriY2 = 120 * sin(a + pointGap * 4) + ax;
  let orangeTriX3 = 120 * cos(a) + ax;
  let orangeTriY3 = 120 * sin(a) + ax;
  fill(orange);
  triangle(
    orangeTriX1,
    orangeTriY1,
    orangeTriX2,
    orangeTriY2,
    orangeTriX3,
    orangeTriY3
  );

  //orange quad
  let yellowQuadX1 = 120 * cos(a + pointGap * 4) + ax;
  let yellowQuadY1 = 120 * sin(a + pointGap * 4) + ax;
  let yellowQuadX2 = 60 * cos(b + pointGap2 * 2) + ax;
  let yellowQuadY2 = 60 * sin(b + pointGap2 * 2) + ax;
  let yellowQuadX3 = ax;
  let yellowQuadY3 = ax;
  let yellowQuadX4 = 60 * cos(b + pointGap2) + ax;
  let yellowQuadY4 = 60 * sin(b + pointGap2) + ax;

  fill(yellow);
  stroke("white");
  quad(
    yellowQuadX1,
    yellowQuadY1,
    yellowQuadX2,
    yellowQuadY2,
    yellowQuadX3,
    yellowQuadY3,
    yellowQuadX4,
    yellowQuadY4
  );

  //blue quad
  let blueQuadX1 = 60 * cos(b + pointGap2) + ax;
  let blueQuadY1 = 60 * sin(b + pointGap2) + ax;
  let blueQuadX2 = 120 * cos(a + pointGap * 2) + ax;
  let blueQuadY2 = 120 * sin(a + pointGap * 2) + ax;
  let blueQuadX3 = 60 * cos(b) + ax;
  let blueQuadY3 = 60 * sin(b) + ax;
  let blueQuadX4 = ax;
  let blueQuadY4 = ax;
  fill(blue);
  quad(
    blueQuadX1,
    blueQuadY1,
    blueQuadX2,
    blueQuadY2,
    blueQuadX3,
    blueQuadY3,
    blueQuadX4,
    blueQuadY4
  );

  //red quad
  let redQuadX1 = ax;
  let redQuadY1 = ax;
  let redQuadX2 = 60 * cos(b) + ax;
  let redQuadY2 = 60 * sin(b) + ax;
  let redQuadX3 = 120 * cos(a) + ax;
  let redQuadY3 = 120 * sin(a) + ax;
  let redQuadX4 = 60 * cos(b + pointGap2 * 2) + ax;
  let redQuadY4 = 60 * sin(b + pointGap2 * 2) + ax;
  fill(red);
  quad(
    redQuadX1,
    redQuadY1,
    redQuadX2,
    redQuadY2,
    redQuadX3,
    redQuadY3,
    redQuadX4,
    redQuadY4
  );
}
