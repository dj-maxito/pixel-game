export default class Input {
  constructor() {
    this.keys = {};
    this.pressed = {};

    window.addEventListener("keydown", (e) => {
      console.log("TECLA:", e.key);
      if (!this.keys[e.key]) {
        this.pressed[e.key] = true;
      }
      this.keys[e.key] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.key] = false;
    });
  }

  isDown(key) {
    return this.keys[key];
  }

  isPressed(key) {
    if (this.keys[key]) {
      this.keys[key] = false;
      return true;
    }
    return false;
  }
}
