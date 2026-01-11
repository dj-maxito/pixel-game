export class Player {
  constructor(input) {
    this.input = input;

    // Posición y física
    this.x = 50;
    this.y = 300;
    this.vx = 0;
    this.vy = 0;
    this.onGround = false;

    // Nivel de poder
    this.powerLevel = 1;

    // Sprite
    this.image = new Image();
    this.image.src = "/src/assets/sprites/player_sheet.png";

    this.frameWidth = 32;
    this.frameHeight = 32;

    this.frameX = 0;
    this.maxFrames = 3;

    this.frameTimer = 0;
    this.frameInterval = 120;

    this.direction = 1; // 1 = derecha, -1 = izquierda
  }

  addPower(amount) {
    this.powerLevel += amount;
  }

  update(delta) {
    this.vx = 0;
    const movingLeft = this.input.isDown("a");
    const movingRight = this.input.isDown("d");

    if (movingLeft) {
      this.vx = -2;
      this.direction = -1;
    }

    if (movingRight) {
      this.vx = 2;
      this.direction = 1;
    }

    if (this.input.isDown(" ") && this.onGround) {
      this.vy = -6;
      this.onGround = false;
    }

    // Física
    this.vy += 0.3;
    this.x += this.vx;
    this.y += this.vy;

    if (this.y >= 300) {
      this.y = 300;
      this.vy = 0;
      this.onGround = true;
    }

    this.updateAnimation(delta, movingLeft || movingRight);
  }

  updateAnimation(delta, isWalking) {
    if (!isWalking) {
      this.frameX = 0;
      return;
    }

    // Caminando → animación
    this.frameTimer += delta;
    if (this.frameTimer > this.frameInterval) {
      this.frameX = (this.frameX + 1) % this.maxFrames;
      this.frameTimer = 0;
    }
  }

  draw(ctx) {
    ctx.save();

    if (this.direction === -1) {
      ctx.scale(-1, 1);
      ctx.drawImage(
        this.image,
        this.frameX * this.frameWidth,
        0,
        this.frameWidth,
        this.frameHeight,
        -this.x - this.frameWidth,
        this.y,
        this.frameWidth,
        this.frameHeight
      );
    } else {
      ctx.drawImage(
        this.image,
        this.frameX * this.frameWidth,
        0,
        this.frameWidth,
        this.frameHeight,
        this.x,
        this.y,
        this.frameWidth,
        this.frameHeight
      );
    }

    ctx.restore();
  }
}
