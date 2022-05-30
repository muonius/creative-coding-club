// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// let freq_slider;
let amplitude = 1;
let discrete = false;

function setup() {
  createCanvas(800, 800);
  // freq_slider = createSlider(120, 200, 150, 1);
  frameRate(60);
  angleMode(DEGREES);
  // colorMode(HSB);
}

function draw() {
  background(50);
  ellipseMode(CENTER);
  // let frequency = freq_slider.value();
  let now = clock();
  // amplitude = map(now.hour, 1, 24, 0.1, 1);
  let frequency = map(now.min, 0, 60, 150, 200);
  let seconds = map(now.sec, 0, 60, 100, 200);
  let colors = map(now.sec, 0, 60, 300, 360);
  fill(255);
  noStroke();

  translate(width / 2, height / 3);

  for (i = 0; i < 360; i += 0.07) {
    let r1 = map(sin(i), -1, 1, 0, 200);
    let r2 = map(sin(i), -1, 1, 0, 120);

    let r = r1 + r2;
    let x = r * cos(i);
    let y = r * sin(i);

    let offsetX = cos(i * frequency + seconds) * amplitude * 100;
    let offsetY = sin(i * frequency + seconds) * amplitude * 100;

    ellipse(x + offsetX, y + offsetY, 2, 2);
    frequency += 0.000001;
    // console.log(frequency);
    // console.log(now.sec);
  }
}
