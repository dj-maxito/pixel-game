import backgroundImg from "../assets/backgrounds/sky.png";

export default class GameLoop {
  constructor(ctx, callbacks) {
    console.log("GAMELOOP CONSTRUIDO");

    this.ctx = ctx;
    this.callbacks = callbacks;
    this.running = true;
    this.lastTime = 0;

    this.background = new Image();
    this.background.src = backgroundImg;

    this.background.onload = () => {
      console.log("FONDO CARGADO");
    };
  }

  start() {
    console.log("GAMELOOP START");
    requestAnimationFrame(this.loop.bind(this));
  }

  stop() {
    this.running = false;
  }

  loop() {
    if (!this.running) return;
    this.draw();
    requestAnimationFrame(this.loop.bind(this));
  }

  draw() {
    const canvas = this.ctx.canvas;
    const w = canvas.width;
    const h = canvas.height;

    this.ctx.clearRect(0, 0, w, h);

    this.ctx.drawImage(this.background, 0, 0, w, h);
  }
}
