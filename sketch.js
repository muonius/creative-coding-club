let noiseMax = 5;
let aoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0, 10);

  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.001) {
    let xoff =
      map(cos(a), -1, 1, 0, noiseMax) + map(cos(aoff), -1, 1, 0, noiseMax);
    let yoff =
      map(sin(a), -1, 1, 0, noiseMax) + map(sin(aoff), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  aoff += 0.01;
}
