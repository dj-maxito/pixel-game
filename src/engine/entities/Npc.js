import NPCS from "../../data/npcs.js";

export default class Npc {
  constructor({ id, x, y, image, columns, rows, scale = 2.5, dialogue = [] }) {
    this.id = id;
    this.data = NPCS[id];

    this.name = this.data.name;
    this.power = this.data.power || 0;
    this.dialogue = this.data.dialogue;
    this.locked = this.data.locked;
    this.unlocked = this.data.unlocked;
    this.requiredPower = this.data.requiredPower ?? null;

    this.dialogueIndex = 0;

    this.x = x;
    this.y = y; // y = suelo (pies)

    this.image = image;
    this.columns = columns;
    this.rows = rows;
    this.scale = scale;

    this.frameX = 0; // NPC quieto
    this.frameY = 0; // 0 = ojos abiertos

    // parpadeo
    this.blinkTimer = 0;
    this.blinkDuration = 6;
    this.nextBlink = this.randomBlinkTime();
    this.isBlinking = false;

    this.frameWidth = this.image.width / this.columns;
    this.frameHeight = this.image.height / this.rows;

    this.width = this.frameWidth * this.scale;
    this.height = this.frameHeight * this.scale;
  }

  randomBlinkTime() {
    // entre 2 y 5 segundos (a 60fps)
    return Math.floor(50 + Math.random() * 180);
  }

  update() {
    this.blinkTimer++;

    // empezar parpadeo
    if (!this.isBlinking && this.blinkTimer >= this.nextBlink) {
      this.isBlinking = true;
      this.blinkTimer = 0;
      this.frameX = 1; // ojos cerrados
    }

    // terminar parpadeo
    if (this.isBlinking && this.blinkTimer >= this.blinkDuration) {
      this.isBlinking = false;
      this.frameX = 0; // ojos abiertos
      this.blinkTimer = 0;
      this.nextBlink = this.randomBlinkTime();
    }
  }

  draw(ctx, camera) {
    const frameWidth = this.image.width / this.columns;
    const frameHeight = this.image.height / this.rows;

    const squash = this.isBlinking ? 1.5 : 0;

    const width = frameWidth * this.scale;
    const height = frameHeight * this.scale;

    const FOOT_OFFSET = 45 * this.scale;

    let blinkOffsetX = 0;
    if (this.frameX === 1) {
      blinkOffsetX = 16 * this.scale;
    }

    const drawX = Math.floor(this.x - camera.x - width / 2 + blinkOffsetX);

    const drawY = Math.floor(this.y - height + FOOT_OFFSET + squash);

    ctx.drawImage(
      this.image,
      this.frameX * frameWidth,
      this.frameY * frameHeight,
      frameWidth,
      frameHeight,
      drawX,
      drawY,
      width,
      height
    );
  }
}
