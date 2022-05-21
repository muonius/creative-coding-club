let noiseMax = 0.5;
let phase = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  let t = 0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(1)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    t += 0.01;
  }
  endShape(CLOSE);

  phase += 0.01;
  //   noLoop();
}
