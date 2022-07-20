let rains = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 1000; i++) {
    rains[i] = new Drop(random(width), random(-200, -10));
  }
}

function draw() {
  background(230, 230, 250);
  for (let i = 0; i < 1000; i++) {
    rains[i].fall();
    rains[i].show();
  }
}
