export default class GameLoop {
  constructor(ctx, callbacks) {
    console.log("GAMELOOP CONSTRUIDO");
    this.ctx = ctx;
    this.callbacks = callbacks;
    this.running = true;
    this.lastTime = 0;
  }

  start() {
    console.log("GAMELOOP START");
    requestAnimationFrame(this.loop.bind(this));
  }

  stop() {
    this.running = false;
  }

  loop(time) {
    if (!this.running) return;

    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 900, 400);

    requestAnimationFrame(this.loop.bind(this));
  }
}
