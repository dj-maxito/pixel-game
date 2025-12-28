import backgroundImg from "../assets/backgrounds/sky.png";
import groundTileImg from "../assets/sprites/tiles/ground.png";
import playerImg from "../assets/sprites/player/player_sheet.png";
import Input from "./Input";
import forestImg from "../assets/backgrounds/trees.png";
import cloudsImg from "../assets/backgrounds/clouds.png";
import mountainsImg from "../assets/backgrounds/mountains.png";

export default class GameLoop {
  constructor(ctx, callbacks) {
    console.log("GAMELOOP CONSTRUIDO");

    this.input = new Input();

    this.ctx = ctx;
    this.callbacks = callbacks;
    this.running = true;

    // Fondo
    this.background = new Image();
    this.background.src = backgroundImg;
    this.background.onload = () => console.log("FONDO CARGADO");

    // Nubes de fondo
    this.clouds = new Image();
    this.clouds.src = cloudsImg;
    this.clouds.onload = () => console.log("NUBES CARGADAS");

    this.cloudsX = 0;
    this.cloudsSpeed = 0.2;

    // MONTAÑAS D FONDO
    this.mountains = new Image();
    this.mountains.src = mountainsImg;
    this.mountains.onload = () => console.log("MONTAÑAS CARGADAS");

    // Arboles del fondo
    this.forest = new Image();
    this.forest.src = forestImg;
    this.forest.onload = () => console.log("BOSQUE CARGADO");

    // Piso
    this.groundTile = new Image();
    this.groundTile.src = groundTileImg;
    this.groundTile.onload = () => console.log("PISO CARGADO");

    this.ctx.imageSmoothingEnabled = false;

    this.world = {
      width: 3000,
      height: this.ctx.canvas.height,
    };

    // Jugador
    this.player = {
      x: 100,
      y: 0,

      frameX: 0,
      frameY: 0,

      columns: 3,
      rows: 2,
      scale: 3,

      vx: 0,
      vy: 0,

      speed: 4,
      gravity: 0.8,
      onGround: false,

      animTimer: 0,
      animSpeed: 8,
    };

    this.camera = {
      x: 0,
      y: 0,
    };

    this.playerSprite = new Image();
    this.playerSprite.src = playerImg;
    this.playerSprite.onload = () => console.log("JUGADOR CARGADO");
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

    const tileSize = 60;
    const tileScale = 5;
    const tile = tileSize * tileScale;
    const groundHeight = 1;
    const groundY = h - groundHeight * tile;

    this.ctx.clearRect(0, 0, w, h);

    // Fondo (sky.png)
    this.ctx.drawImage(this.background, 0, 0, w, h);

    // nUBES (clouds.png)
    this.cloudsX -= this.cloudsSpeed;

    if (this.cloudsX <= -this.clouds.width) {
      this.cloudsX = 0;
    }

    for (let x = this.cloudsX; x < w; x += this.clouds.width) {
      this.ctx.drawImage(this.clouds, x, 40); // y = 40 (altura)
    }

    // MONTAÑAS (mountains.png)
    const mountainsSpeed = 0.3;
    const mountainsWidth = this.mountains.width;
    const mountainsY = groundY - this.mountains.height + 305;

    let mountainsStartX = Math.floor(
      (-this.camera.x * mountainsSpeed) % mountainsWidth
    );

    for (let x = mountainsStartX - mountainsWidth; x < w; x += mountainsWidth) {
      this.ctx.drawImage(this.mountains, x, mountainsY);
    }

    // ádrboles (trees.png)
    const forestSpeed = 0.6;
    const forestWidth = this.forest.width;
    const forestY = groundY - this.forest.height + 49;

    let forestStartX = Math.floor((-this.camera.x * forestSpeed) % forestWidth);

    for (let x = forestStartX - forestWidth; x < w; x += forestWidth) {
      this.ctx.drawImage(this.forest, x, forestY);
    }

    // Piso repetitivo (ground.png)
    for (let x = 0; x < w; x += tile) {
      this.ctx.drawImage(this.groundTile, x, groundY, tile, tile);
    }

    // Jugador
    const p = this.player;
    const sprite = this.playerSprite;

    const frameWidth = sprite.width / p.columns;
    const frameHeight = sprite.height / p.rows;

    const playerWidth = frameWidth * p.scale;
    const playerHeight = frameHeight * p.scale;

    const feetOffset = 39 * p.scale; // Ajuste visual

    // Input de flechas (a/d y <-/->) + movimiento
    if (this.input.isDown("a") || this.input.isDown("VK_left")) {
      p.vx = -p.speed;
      p.frameY = 1;
    } else if (this.input.isDown("d") || this.input.isDown("VK_right")) {
      p.vx = p.speed;
      p.frameY = 0;
    } else {
      p.vx = 0;
    }

    p.x += p.vx;

    // límites horizontales del mundo
    if (p.x < 0) {
      p.x = 0;
    }

    if (p.x + playerWidth > this.world.width) {
      p.x = this.world.width - playerWidth;
    }

    // Animación caminata
    if (p.vx !== 0) {
      p.animTimer++;
      if (p.animTimer >= p.animSpeed) {
        p.animTimer = 0;
        p.frameX = (p.frameX + 1) % p.columns;
      }
    } else {
      p.frameX = 1; // idle
    }

    // Física
    p.vy += p.gravity;
    p.y += p.vy;

    // Colisión piso
    if (p.y + playerHeight >= groundY) {
      p.y = groundY - playerHeight;
      p.vy = 0;
      p.onGround = true;
    } else {
      p.onGround = false;
    }

    this.camera.x = this.player.x - canvas.width / 2;

    this.camera.x = Math.max(
      0,
      Math.min(this.camera.x, this.world.width - canvas.width)
    );

    // Dibujo jugador
    this.ctx.drawImage(
      sprite,
      p.frameX * frameWidth,
      p.frameY * frameHeight,
      frameWidth,
      frameHeight,
      Math.floor(p.x - this.camera.x),
      Math.floor(p.y + feetOffset - this.camera.y),
      playerWidth,
      playerHeight
    );
  }
}
