let amptitude = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  stroke(255);

  translate(0, 150);
  for (let i = 0; i < 359; i++) {
    let x = map(i, 0, 359, 0, width);
    let y = sin(i * amptitude) * 200;
    point(x, y);
  }
}
