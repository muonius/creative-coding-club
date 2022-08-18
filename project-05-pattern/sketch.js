const palettes = [
  ["#BAA77D", "#7A623C", "#8E8C97", "#816D6B", "#1C1B20", "#E0DDD4"],
  ["#FFFFFF", "#747A86", "#303133", "#FDE946"],
  ["#D3BB9D", "#6C6754", "#DD4622", "#5A1A0E", "#181310"],
];

function setup() {
  createCanvas(500, 500);
  noLoop();
  // noStroke();
}

function draw() {
  background(230, 230, 250);

  const cols = width / 50;
  const rows = height / 25;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      drawBase(col * 50, row * 100);
      if (random([true, false]) === true) {
        drawStripe(col * 50, row * 10);
      }
    }
  }
}

function drawBase(x, y) {
  let r1 = random(0, 50);
  let r2 = random(50, 100);
  let color = random(palettes);
  noStroke();
  fill(random(color));
  rect(x, y, 50, 100);
}

function drawStripe(x, y) {
  noStroke();
  for (let i = 1; i <= 5; i++) {
    let color = random(palettes);
    fill(color);
    rect(x, y * i, 50, 10);
  }
}
