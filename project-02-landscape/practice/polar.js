let amptitude1 = 3;
let amptitude2 = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let r1 = map(sin(i * amptitude1), -1, 1, 50, 100);
    let r2 = map(sin(i * amptitude2 + 180), -1, 1, 50, 100); //offset angle
    // let r2 = map(sin(i * amptitude2), -1, 1, 50, 100); default
    // let r = map(sin(i * amptitude2 + 90), -1, 1, 50, 100); offset
    let r = r1 + r2;
    // let r = map(sin(i * amptitude2), -1, 1, 50, 100); default
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
}
