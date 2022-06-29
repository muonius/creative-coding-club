let amptitude1 = 3;
let amptitude2 = 6;
let amptitude3 = 7;

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
    let r1Min = map(sin(frameCount), -1, 1, 50, 100);
    let r1Max = map(sin(frameCount), -1, 1, 100, 0);

    let r2Min = map(sin(frameCount), -1, 1, 100, 50);
    let r2Max = map(sin(frameCount), -1, 1, 0, 100);

    let r3Min = map(sin(frameCount), -1, 1, 60, 160);
    let r3Max = map(sin(frameCount), -1, 1, 200, 10);

    let r1 = map(sin(i * amptitude1), -1, 1, r1Min, r1Max);
    let r2 = map(sin(i * amptitude2), -1, 1, r2Min, r2Max);
    let r3 = map(sin(i * amptitude3 + 90), -1, 1, r3Min, r3Max);

    let r = r1 + r2 + r3;
    // let r = r1 + r2;

    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();
}
