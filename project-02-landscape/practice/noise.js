let noiseMax = 0.5;
let phase = 0;
let zoff = 0;
let roff = 0;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  stroke(255);

  noFill();
  let t = 0;
  beginShape();
  if (roff >= 100) {
    roff -= noise(zoff * 100, noiseMax);
  }
  for (let a = 30; a < 180; a += 1) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r =
      map(
        noise(xoff, yoff, zoff),
        0,
        1,
        noise(xoff, 1) * 1,
        noise(yoff, 1) * 100
      ) + roff;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();

  phase += 0.01;
  zoff += 0.01;
  roff += noise(zoff * 100, noiseMax);
  //   noLoop();
}
