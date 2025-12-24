export class Player {
  constructor(input) {
    this.input = input;

    this.x = 50;
    this.y = 300;
    this.vx = 0;
    this.vy = 0;
    this.onGround = false;
  }

  update() {
    this.vx = 0;

    if (this.input.isDown("a")) this.vx = -2;
    if (this.input.isDown("d")) this.vx = 2;

    if (this.input.isDown(" ") && this.onGround) {
      this.vy = -6;
      this.onGround = false;
    }

    this.vy += 0.3;

    this.x += this.vx;
    this.y += this.vy;

    if (this.y >= 300) {
      this.y = 300;
      this.vy = 0;
      this.onGround = true;
    }
  }

  get interact() {
    return this.input.isDown("e");
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 32, 32);
  }
}
