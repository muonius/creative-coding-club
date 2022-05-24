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
}

function draw() {
  background(50);
  ellipseMode(CENTER);

  speed += time;

  noiseDetail(1, 0.5);

  fill(255);
  noStroke();

  // study this loop. do you understand how the line of ellipses is created?
  for (i = 0; i < 1; i += 0.002) {
    let x = lerp(startX, endX, i);
    let y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    let offsetX = cos(i * frequency + frameCount / 15) * amplitude * 100;
    let offsetY = sin(i * frequency + frameCount / 10) * amplitude * 100;

    ellipse(x + offsetX, y + offsetY, 1, 1);
  }
}
