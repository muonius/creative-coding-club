// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// draws a rectangle, where you tell it to!

let frequency = 200;
let amplitude = 1;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(50);
  ellipseMode(CENTER);
  noiseDetail(1, 0.5);

  fill(255);
  noStroke();

  translate(width / 2, height / 2);

  // study this loop. do you understand how the line of ellipses is created?
  for (i = 0; i < 360 * 1; i += 1) {
    let r1 = map(sin(i), -1, 1, 0, 40);
    let r2 = map(sin(i), -1, 1, 0, 200);

    // let r = r1 + r2;
    let r = r1 + r2;
    let x = r * cos(i);
    let y = r * sin(i);

    // let x = lerp(startX, endX, i);
    // let y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    let offsetX = cos(i * frequency + frameCount) * amplitude * 100;
    let offsetY = sin(i * frequency + frameCount) * amplitude * 100;

    ellipse(x + offsetX, y + offsetY, random(5), random(5));
    frequency += 0.000001;
  }
}
