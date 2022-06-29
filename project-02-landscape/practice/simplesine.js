let amptitude = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  stroke(255);
  noFill();
  translate(0, 150);
  beginShape();
  for (let i = 0; i < 359; i++) {
    let x = map(i, 0, 359, 0, width);
    let y = sin(i * amptitude) * 50;
    vertex(x, y);
  }
  endShape();

  translate(0, 150);
  beginShape();
  for (let i = 0; i < 359; i++) {
    let x = map(i, 0, 359, 0, width);
    let y = sin(i) * 50;
    vertex(x, y);
  }
  endShape();

  translate(0, 150);
  beginShape();
  for (let i = 0; i < 359; i++) {
    let x = map(i, 0, 359, 0, width);
    let y = sin(i * amptitude) * 50 + sin(i) * 50;
    vertex(x, y);
  }
  endShape();
}
