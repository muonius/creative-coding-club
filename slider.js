// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let freq_slider;
let amplitude = 1;

function setup() {
  createCanvas(800, 800);
  freq_slider = createSlider(1, 200, 150, 1);

  angleMode(DEGREES);
}

function draw() {
  background(50);
  ellipseMode(CENTER);
  let frequency = freq_slider.value();
  fill(255);
  noStroke();

  translate(width / 2, height / 3);

  for (i = 0; i < 360 * 1; i += 0.08) {
    let r1 = map(sin(i), -1, 1, 0, 100);
    let r2 = map(sin(i), -1, 1, 0, 200);

    let r = r1 + r2;
    let x = r * cos(i);
    let y = r * sin(i);

    let offsetX = cos(i * frequency + frameCount) * amplitude * 100;
    let offsetY = sin(i * frequency + frameCount) * amplitude * 100;

    ellipse(x + offsetX, y + offsetY, 3, 3);
    frequency += 0.000001;
  }
}
