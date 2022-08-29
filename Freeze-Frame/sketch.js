// The timestamp of your freeze frame
// TODO: Replace these zero values
let minutes = 5;
let seconds = 43;

// Screenshot of your freeze frame
let img;

// Canvas size; canvasHeight will be set during setup()
let canvasWidth = 550;
let canvasHeight;

// Adjust transparency level (between 0.0 and 1.0)
// while you work; then set to 1.0 for submission
let transparency = 1;

function preload() {
  // "Upload file" from the left sidebar, then load it here
  // TODO: Uncomment the next line, using appropriate filename
  img = loadImage("squares.png");
}

function setup() {
  if (img === undefined) {
    createCanvas(canvasWidth, 100);
    textSize(32);
    text("Upload file. Edit preload().", 10, 30);
  } else {
    // Rescale the image to 400px wide; canvasHeight will
    // be scaled proportionally. Set canvas size to that
    // of rescaled image. (don't modify next three lines)
    img.resize(canvasWidth, 0);
    canvasHeight = img.height;
    createCanvas(canvasWidth, canvasHeight);

    // TODO: If you need more setup(), do so here
  }
}

function draw() {
  drawOriginalImage();
  drawTransparentLayer();
  drawMyFreezeFrame();
}

function drawOriginalImage() {
  if (img !== undefined) {
    image(img, 0, 0);
  }
}

function drawTransparentLayer() {
  if (img !== undefined) {
    fill(255, 255, 255, transparency * 255);
    noStroke();
    rect(0, 0, canvasWidth, canvasHeight);
  }
}

function mouseMoved() {
  console.log("mouseX = " + mouseX, "mouseY = " + mouseY);
}

function drawMyFreezeFrame() {
  // TODO: Draw here!
  const green = color("rgba(145,197,62,255)");
  const darkgreen = color("rgba(126,172,54,255)");
  const difgreen = color("rgba(83,166,62,255)");
  const orange = color("rgba(233,120,20,255)");
  const lightorange = color("rgba(239,196,54,255)");
  const yellow = color("rgba(249,251,19,255)");
  const pink = color("rgba(244,199,168,255)");
  const magenta = color("rgba(170,88,155,255)");
  const darkblue = color("rgba(25,93,116,255)");
  const lightblue = color("rgba(110,207,233,255)");
  const blue = color("rgba(38,149,197,255)");
  const darkorange = color("rgba(184,95,15,255)");
  const forestgreen = color("rgba(25,75,33,255)");

  drawColorCol(0, 0, green, orange, lightorange, green, yellow);
  drawColorCol(0, 109, blue, darkblue, lightblue, darkblue, pink);
  drawColorCol(0, 218, darkgreen, blue, darkgreen, yellow, darkorange);

  // colored windows
  fill(magenta);
  quad(109, 102, 21, 75, 23, 231, 109, 211);
  fill(yellow);
  quad(442, 102, 525, 75, 525, 231, 442, 211);

  //green creature
  // arms
  stroke(forestgreen);
  strokeWeight(4);
  line(426, 137, 457, 102);
  line(351, 132, 317, 114);

  //hands
  noFill();
  strokeWeight(3);
  stroke("grey");
  bezier(305, 112, 313, 125, 325, 106, 312, 105);
  bezier(461, 85, 448, 94, 459, 108, 470, 95);

  // head
  noStroke();
  fill(difgreen);
  arc(385, 45, 85, 90, PI, PI + PI, CHORD);
  arc(385, 45, 85, 32, 0, PI, CHORD);
  quad(351, 130, 427, 134, 426, 211, 342, 211);

  // eyes
  fill("white");
  ellipse(370, 31, 35, 37);
  ellipse(406, 34, 34, 37);
  fill("black");
  ellipse(384, 29, 9, 8);
  ellipse(393, 37, 8, 9);
  // belly
  noFill();
  stroke(yellow);
  strokeWeight(1);
  quad(369, 174, 404, 176, 405, 206, 370, 203);
  line(387, 176, 386, 204);

  //blue creature
  //arms
  stroke(forestgreen);
  strokeWeight(4);
  line(195, 126, 229, 90);
  line(125, 135, 91, 118);

  //hands
  strokeWeight(3);
  stroke("grey");
  bezier(232, 75, 219, 84, 230, 98, 241, 85);
  bezier(84, 107, 98, 110, 88, 127, 76, 116);

  // eyebrows
  stroke("black");
  strokeWeight(5);
  bezier(130, 26, 127, 26, 121, 29, 118, 35);
  bezier(177, 25, 179, 24, 161, 22, 166, 23);
  //belly
  fill(blue);
  noStroke();
  quad(123, 133, 196, 126, 206, 211, 133, 211);
  noFill();
  stroke(yellow);
  strokeWeight(1);
  quad(142, 173, 185, 169, 188, 195, 144, 195);
  line(164, 171, 168, 195);

  // head
  translate(-10, 43);
  rotate(-PI / 6.0 / 2);
  noStroke();
  fill(blue);
  arc(152, 80, 83, 105, PI, TWO_PI, CHORD);
  arc(152, 79, 83, 25, 0, PI, CHORD);

  //eyes
  fill("white");
  ellipse(172, 65, 33, 37);
  ellipse(138, 58, 33, 37);
  fill("black");
  ellipse(160, 62, 8, 9);
  ellipse(149, 63, 9, 8);
}

function drawColorCol(delX, delY, color1, color2, color3, color4, color5) {
  fill(color5);
  const squareWidth = 111;
  const squareX = -2 + delX;
  const squareY = -7 + delY;
  for (let col = 0; col < 5; col++) {
    const x = squareX + col * squareWidth;
    square(x, squareY, squareWidth);
    if (col === 3) {
      fill(color1);
    } else if (col === 2) {
      fill(color2);
    } else if (col === 1) {
      fill(color3);
    } else if (col === 0) {
      fill(color4);
    }
  }
}
