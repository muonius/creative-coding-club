function setup() {
  createCanvas(500, 500);
  noLoop();
  // noStroke();
}

function draw() {
  background(230, 230, 250);

  const cols = width / 50;
  const rows = height / 50;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      drawThing(col * 50 + 25, row * 50 + 25);
    }
  }
}

function drawThing(x, y) {
  let radius;
  r1 = random(0, 50);
  r2 = random(50, 100);
  fill(random(255));
  rect(x, y, r1, r2);
}
