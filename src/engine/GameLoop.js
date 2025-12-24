import { Player } from "./entities/Player";
import { Input } from "./Input";
import { level1 } from "../level/Level1";

export class GameLoop {
  constructor(ctx, callbacks) {
    this.ctx = ctx;
    this.callbacks = callbacks;
    this.input = new Input();
    this.player = new Player(this.input);
    this.level = level1;
    this.running = true;
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  stop() {
    this.running = false;
  }

  loop() {
    if (!this.running) return;

    if (!this.callbacks.isPaused()) {
      this.player.update();
    }

    this.draw();
    requestAnimationFrame(this.loop.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, 900, 400);

    this.level.npcs.forEach((npc) => {
      npc.draw(this.ctx);
      if (npc.canInteract(this.player)) {
        if (npc.id === "guardian") {
          this.callbacks.onGuardianInteract();
        } else {
          this.callbacks.onNpcInteract(npc.id);
        }
      }
    });

    this.player.draw(this.ctx);
  }
}
