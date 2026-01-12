export default class AudioManager {
  constructor() {
    this.music = null;
    this.sounds = {};
    this.muted = false;
  }

  loadMusic(src, volume = 0.2) {
    this.music = new Audio(src);
    this.music.loop = true;
    this.music.volume = volume;
    console.log("Música cargada:", src);
  }

  playMusic() {
    if (!this.music) {
      console.log("NO hay musica");
      return;
    }

    if (this.muted) {
      console.log("Está muteado");
      return;
    }

    console.log("Intentando reproducir música");

    this.music
      .play()
      .then(() => console.log("Música sonando"))
      .catch((err) => console.error(" Error al reproducir", err));
  }

  stopMusic() {
    if (!this.music) return;
    this.music.pause();
    this.music.currentTime = 0;
  }

  loadSound(name, src, volume = 0.5) {
    const audio = new Audio(src);
    audio.volume = volume;
    this.sounds[name] = audio;
  }

  playSound(name) {
    if (this.muted) return;
    const sound = this.sounds[name];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  setMute(value) {
    this.muted = value;
    if (this.music) {
      this.music.volume = value ? 0 : 0.4;
    }
  }
}
