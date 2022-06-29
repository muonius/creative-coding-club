// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
let angle = 0;
let offset = 0.03;
let amptitude1 = 3;
let amptitude2 = 6;
let amptitude3 = 7;

function setup() {
  createCanvas(600, 600, WEBGL);
  land = createGraphics(600, 600);
  land.fill(255);
  // angleMode(DEGREES);
}

function draw() {
  background(0);
  land.translate(width / 2, height / 2);
  land.noFill();
  land.stroke(255);
  land.strokeWeight(0.1);
  land.beginShape();
  for (let i = 0; i < 361; i++) {
    let r1Min = map(sin(frameCount), -1, 1, 60, 100);
    let r1Max = map(sin(frameCount), -1, 1, 100, 0);

    let r2Min = map(sin(frameCount), -1, 1, 100, 60);
    let r2Max = map(sin(frameCount), -1, 1, 0, 100);

    let r3Min = map(sin(frameCount), -1, 1, 60, 160);
    let r3Max = map(sin(frameCount), -1, 1, 200, 10);

    let r1 = map(sin(i * amptitude1), -1, 1, r1Min, r1Max);
    let r2 = map(sin(i * amptitude2), -1, 1, r2Min, r2Max);
    let r3 = map(sin(i * amptitude3 + 120), -1, 1, r3Min, r3Max);

    let r = r1 + r2 + r3;
    // let r = r1 + r2;
    let x = r * cos(i);
    let y = r * sin(i);
    land.vertex(x, y);
  }
  land.endShape(CLOSE);

  ambientLight(200);
  // directionalLight(255, 255, 255, 1, 0, 1);

  rectMode(CENTER);

  for (let x = -300; x < 300; x += 100) {
    push();
    translate(x, 0, x + 200);
    rotateX(angle * 0.7);
    // translate(0, 50, 0);
    rotateY(angle * 0.3 + offset);
    rotateZ(angle * 0.2);
    noStroke();
    texture(land);
    sphere(100);
    // box(100);
    pop();
    angle += 0.001;
    offset += 0.001;
  }
}
