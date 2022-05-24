// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// draws a rectangle, where you tell it to!

let frequency = 50 / 10;
let amplitude = 0.5;
let time = 50 / 1000;

let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

let speed = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(50);
  ellipseMode(CENTER);

  speed += time;

  noiseDetail(1, 0.5);

  fill(255);
  noStroke();

  translate(width / 2, height / 2);

  // study this loop. do you understand how the line of ellipses is created?
  for (i = 0; i < 360; i += 1) {
    let r1 = map(sin(i * 3), -1, 1, 50, 100);
    let r2 = map(sin(i * 6 + 180), -1, 1, 50, 100);

    let r = r1 + r2;
    // let r = map(sin(i * amptitude2), -1, 1, 50, 100); default
    let x = r * cos(i);
    let y = r * sin(i);

    // let x = lerp(startX, endX, i);
    // let y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    let offsetX = cos(i * frequency + frameCount) * amplitude * 100;
    let offsetY = sin(i * frequency + frameCount) * amplitude * 100;

    ellipse(x + offsetX, y + offsetY, 1, 1);
  }
}
