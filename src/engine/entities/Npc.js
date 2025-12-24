export class Npc {
  constructor({ x, y, id }) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.used = false;
  }

  canInteract(player) {
    return !this.used && Math.abs(player.x - this.x) < 30 && player.interact;
  }

  draw(ctx) {
    ctx.fillStyle = this.id === "guardian" ? "purple" : "green";
    ctx.fillRect(this.x, this.y, 32, 32);
  }
}
