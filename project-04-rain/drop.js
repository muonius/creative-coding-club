// const { symbolsStroke, line } = require("d3");

class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 20);
    this.length = random(5, 20);
  }

  fall() {
    this.y += this.yspeed;
    // by the time we see rain it's reached its terminal velocity
    // const grav = map(this.z, 0, 20, 0, 0.2);
    // this.yspeed += grav;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 2, 10);
    }
  }
  show() {
    const thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x - 1, this.y + this.length);
  }
}
