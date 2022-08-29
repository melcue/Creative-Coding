// Set to `true` to share your tree image publicly.
// If so, specify what name to display with your image.
const shareImage = true;
const shareName = "Melanie";

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function mouseMoved() {
  console.log("mouseX = " + mouseX, "mouseY = " + mouseY);
}

function draw() {
  drawTree(1, -1);
}

// imagine inspiration from https://images.creativemarket.com/0.1.0/ps/8464075/1821/1215/m1/fpnw/wm0/prev-.jpg?1591200066&s=7b037eb2d10bf4f877ab3bcb9cb1fd0c

function drawTree(distance1, distance2) {
  background("bisque");
  // draws sun
  noStroke();
  fill("lightsalmon");
  circle(200, 175, 250);
  stroke("bisque");
  strokeWeight(8);
  const lineGap = 30;
  //draws the lines of the sun
  for (let i = 0; i < 6; i++) {
    const x1 = 70;
    const x2 = 330;
    const y = 127 + lineGap * i;
    line(x1, y, x2, y);
  }

  // draws leaves
  noStroke();
  fill("#2D2D60");
  const numLeaves = 3;
  const firstDeg = 315;
  const degGap = 45;
  translate(width / 2, height / 2);
  quad(0, 0, 5 * distance1, 0, 15 * distance1, 170, 0, 170);
  quad(0, 0, 5 * distance2, 0, 15 * distance2, 170, 0, 170);
  arc(5 * distance1, 170, 190, 40, 270, 360, PIE);
  arc(5 * distance2, 170, 190, 40, 180, 270, PIE);
  noStroke();
  for (let i = 0; i < numLeaves; i++) {
    push();
    rotate(firstDeg + i * degGap);
    arc(52 * distance1, 0, 105, 61, 180, 360, CHORD);
    arc(52 * distance2, 0, 105, 61, 180, 360, CHORD);
    pop();
  }
}
