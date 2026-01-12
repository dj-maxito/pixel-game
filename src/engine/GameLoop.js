import backgroundImg from "../assets/backgrounds/sky.png";
import groundTileImg from "../assets/sprites/tiles/ground.png";
import playerImg from "../assets/sprites/player/player_sheet.png";
import Input from "./Input";
import forestImg from "../assets/backgrounds/trees.png";
import cloudsImg from "../assets/backgrounds/clouds.png";
import mountainsImg from "../assets/backgrounds/mountains.png";
import Npc from "../engine/entities/Npc";
import cborleImg from "../assets/sprites/npc/cborle_sprite.png";
import mikeyImg from "../assets/sprites/npc/mikey_sprite.png";
import yoosungImg from "../assets/sprites/npc/yoosung_sprite.png";
import snoopyImg from "../assets/sprites/npc/snoopy_sprite.png";
import boyfriendsImg from "../assets/sprites/npc/boyfriends_sprite.png";
import paynlandImg from "../assets/sprites/npc/paynland_sprite.png";
import tortolosImg from "../assets/sprites/npc/tortolos_sprite.png";
import interactIconImg from "../assets/ui/button_e.png";
import NPCS from "../data/npcs.js";
console.log("NPCS importado:", NPCS);
import globeRed from "../assets/props/globe1.png";
import globeGreen from "../assets/props/globe2.png";
import globePink from "../assets/props/globe3.png";
import globeBlue from "../assets/props/globe4.png";
import globeLightBlue from "../assets/props/globe5.png";
import globeYellow from "../assets/props/globe6.png";
import guardianImg from "../assets/sprites/npc/squip_sprite.png";
import doorImg from "../assets/props/door.png";
import AudioManager from "./AudioManager.js";

export default class GameLoop {
  constructor(ctx, callbacks) {
    console.log("GAMELOOP CONSTRUIDO");

    this.ctx = ctx;
    this.callbacks = callbacks;

    this.audio = new AudioManager();
    this.audio.loadMusic("/sounds/bg-music.mp3");

    console.log("AudioManager inicializado:", this.audio);

    // Sonidos
    this.audio.loadSound("select", "/sounds/click.mp3", 0.5);
    this.audio.loadSound("victory", "/sounds/victory.mp3", 0.8);

    this.input = new Input();

    this.ctx = ctx;
    this.callbacks = callbacks;
    this.running = true;

    this.groundY = this.ctx.canvas.height - 1 * 60 * 5;

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

    // MONTAÑAS DEE FONDO
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
      width: 2800,
      height: this.ctx.canvas.height,
    };

    this.doorImg = new Image();
    this.doorImg.src = doorImg;

    this.door = {
      x: 2610, // un poco detrás del guardián
      y: this.groundY - 200,
      width: 280,
      height: 320,
    };

    // Jugador
    this.player = {
      x: 100,
      y: 0,

      frameX: 0,
      frameY: 0,

      columns: 3,
      rows: 2,
      scale: 2.4,

      vx: 0,
      vy: 0,

      speed: 7,
      gravity: 0.8,
      onGround: false,

      animTimer: 0,
      animSpeed: 8,
    };

    this.playerLevel = 0;

    this.balloonImages = [
      new Image(),
      new Image(),
      new Image(),
      new Image(),
      new Image(),
      new Image(),
    ];

    this.balloonImages[0].src = globeRed;
    this.balloonImages[1].src = globeGreen;
    this.balloonImages[2].src = globePink;
    this.balloonImages[3].src = globeBlue;
    this.balloonImages[4].src = globeLightBlue;
    this.balloonImages[5].src = globeYellow;

    // npcs
    this.cborleImg = new Image();
    this.cborleImg.src = cborleImg;

    this.mikeyImg = new Image();
    this.mikeyImg.src = mikeyImg;

    this.yoosungImg = new Image();
    this.yoosungImg.src = yoosungImg;

    this.snoopyImg = new Image();
    this.snoopyImg.src = snoopyImg;

    this.boyfriendsImg = new Image();
    this.boyfriendsImg.src = boyfriendsImg;

    this.paynlandImg = new Image();
    this.paynlandImg.src = paynlandImg;

    this.tortolosImg = new Image();
    this.tortolosImg.src = tortolosImg;

    this.guardianImg = new Image();
    this.guardianImg.src = guardianImg;

    this.transitioning = false;
    this.fadeAlpha = 1;

    this.transitioning = false;
    this.fadeAlpha = 0;
    this.victory = false;

    this.victoryNotified = false;

    this.npcs = [
      new Npc({
        id: "npc1",
        x: 300,
        y: this.groundY,
        image: this.cborleImg,
        columns: 2,
        rows: 2,
        scale: 2.5,
        frameY: 0,
        dialogue: NPCS.npc1.dialogue,
        name: NPCS.npc1.name,
        power: NPCS.npc1.power,
      }),

      new Npc({
        id: "npc2",
        x: 600,
        y: this.groundY,
        image: this.mikeyImg,
        columns: 2,
        rows: 2,
        scale: 2.5,
        frameY: 0,
        dialogue: NPCS.npc2.dialogue,
        name: NPCS.npc2.name,
        power: NPCS.npc2.power,
      }),
      new Npc({
        id: "npc3",
        x: 900,
        y: this.groundY,
        image: this.yoosungImg,
        columns: 2,
        rows: 2,
        scale: 2.5,
        frameY: 0,
        dialogue: NPCS.npc3.dialogue,
        name: NPCS.npc3.name,
        power: NPCS.npc3.power,
      }),
      new Npc({
        id: "npc4",
        x: 1200,
        y: this.groundY,
        image: this.snoopyImg,
        columns: 2,
        rows: 2,
        scale: 2.5,
        frameY: 0,
        dialogue: NPCS.npc4.dialogue,
        name: NPCS.npc4.name,
        power: NPCS.npc4.power,
      }),
      new Npc({
        id: "npc5",
        x: 1500,
        y: this.groundY,
        image: this.boyfriendsImg,
        columns: 2,
        rows: 2,
        scale: 2.5,
        frameY: 0,
        dialogue: NPCS.npc5.dialogue,
        name: NPCS.npc5.name,
        power: NPCS.npc5.power,
      }),
      new Npc({
        id: "npc6",
        x: 1800,
        y: this.groundY,
        image: this.paynlandImg,
        columns: 2,
        rows: 2,
        scale: 2.5,
        frameY: 0,
        dialogue: NPCS.npc6.dialogue,
        name: NPCS.npc6.name,
        power: NPCS.npc6.power,
      }),
      new Npc({
        id: "npc7",
        x: 2100,
        y: this.groundY,
        image: this.tortolosImg,
        columns: 2,
        rows: 2,
        scale: 2.5,
        frameY: 0,
        dialogue: NPCS.npc7.dialogue,
        name: NPCS.npc7.name,
        power: NPCS.npc7.power,
      }),
      new Npc({
        id: "guardian",
        x: 2600,
        y: this.groundY,
        image: this.guardianImg,
        columns: 2,
        rows: 2,
        scale: 2.8,
        requiredPower: NPCS.guardian.requiredPower,
        dialogue: NPCS.guardian.dialogue,
        name: NPCS.guardian.name,
      }),
    ];

    this.npcs.forEach((npc) => console.log(npc.name));

    this.interactIcon = new Image();
    this.interactIcon.src = interactIconImg;
    this.interactIcon.onload = () => console.log("ICONO E CARGADO");

    this.dialogueActive = false;
    this.activeNpc = null;
    this.currentNode = null;
    this.dialogueIndex = 0;
    this.selectedChoice = 0;

    this.flags = {};

    this.levelPopups = [];

    this.victoryTimer = 0;
    this.textBounce = 0;

    this.confetti = [];

    for (let i = 0; i < 120; i++) {
      this.confetti.push({
        x: Math.random() * this.ctx.canvas.width,
        y: Math.random() * -this.ctx.canvas.height,
        speed: 1 + Math.random() * 3,
        size: 4,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      });
    }

    this.camera = {
      x: 0,
      y: 0,
    };

    this.playerSprite = new Image();
    this.playerSprite.src = playerImg;
    this.playerSprite.onload = () => console.log("JUGADOR CARGADO");
  }

  start() {
    console.log("GAME START");
    this.running = true;
    this.rafId = requestAnimationFrame(this.loop);
  }

  loop = () => {
    if (!this.running) return;
    this.draw();
    this.rafId = requestAnimationFrame(this.loop);
  };

  stop() {
    this.running = false;
    cancelAnimationFrame(this.rafId);
  }

  startMusic() {
    console.log("START MUSIC");
    this.audio.playMusic();
  }

  drawDialogue() {
    const ctx = this.ctx;

    ctx.save();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ffffff";

    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, h - 160, w, 160);

    ctx.strokeStyle = "#fff";
    ctx.strokeRect(10, h - 150, w - 20, 140);

    //Nombre
    ctx.fillStyle = "#ffd700";
    ctx.font = "bold 22px monospace";
    const speakerName =
      this.currentNode?.speaker || this.activeNpc?.name || "???";

    ctx.fillText(speakerName, 30, h - 120);

    ctx.fillStyle = "#fff";
    ctx.font = "20px monospace";
    const lines = Array.isArray(this.currentNode.text)
      ? this.currentNode.text
      : [this.currentNode.text];

    lines.forEach((line, i) => {
      ctx.fillText(line, 30, h - 80 + i * 20);
    });

    const hasChoices =
      this.currentNode.choices && this.currentNode.choices.length > 0;

    // TEXTO "ESPACIO PARA CONTINUAR"
    if (!hasChoices) {
      ctx.fillStyle = "#aaaaaa";
      ctx.font = "20px monospace";
      ctx.fillText("ESPACIO para continuar", w - 280, h - 20);
    }

    // OPCIONES
    if (hasChoices) {
      const padding = 15;
      const optionBoxWidth = 550;
      const optionBoxHeight =
        this.currentNode.choices.length * 35 + padding * 2;

      const optionBoxX = w - optionBoxWidth - 20;
      const optionBoxY = h - 160 - optionBoxHeight - 8;

      ctx.fillStyle = "rgba(0,0,0,0.85)";
      ctx.fillRect(optionBoxX, optionBoxY, optionBoxWidth, optionBoxHeight);

      ctx.strokeStyle = "#ffffff";
      ctx.strokeRect(optionBoxX, optionBoxY, optionBoxWidth, optionBoxHeight);

      ctx.font = "20px monospace";

      const availableChoices = (this.currentNode.choices || []).filter(
        (choice) => {
          if (!choice.requiresFlag) return true;
          return this.flags[choice.requiresFlag];
        }
      );

      let drawY = optionBoxY + padding + 20;

      // OPCIONES
      availableChoices.forEach((choice, i) => {
        ctx.fillStyle = i === this.selectedChoice ? "#00ffcc" : "#cccccc";

        const optionLines = Array.isArray(choice.text)
          ? choice.text
          : [choice.text];

        optionLines.forEach((line, lineIndex) => {
          const prefix =
            lineIndex === 0 ? (i === this.selectedChoice ? "▶ " : "  ") : "  ";

          ctx.fillText(prefix + line, optionBoxX + padding, drawY);
          drawY += 19;
        });

        drawY += 10;
      });
    }
    ctx.restore();
  }

  setPlayerLevel(level) {
    this.playerLevel = level;
  }

  addLevelPopup(amount) {
    this.levelPopups.push({
      x: this.player.x,
      y: this.player.y - 40,
      value: amount,
      life: 60, // frames (~1 segundo)
    });
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, 200, 200);
    const canvas = this.ctx.canvas;
    const w = canvas.width;
    const h = canvas.height;

    const p = this.player;
    const sprite = this.playerSprite;

    const frameWidth = sprite.width / p.columns;
    const frameHeight = sprite.height / p.rows;

    const playerWidth = frameWidth * p.scale;
    const playerHeight = frameHeight * p.scale;

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

    // Piso (se mueve con la cámara)
    const startX = Math.floor(this.camera.x / tile) * tile;
    const endX = this.camera.x + w;

    for (let x = startX; x < endX; x += tile) {
      this.ctx.drawImage(
        this.groundTile,
        Math.floor(x - this.camera.x),
        groundY,
        tile,
        tile
      );
    }

    this.ctx.drawImage(
      this.doorImg,
      this.door.x - this.camera.x,
      this.door.y,
      this.door.width,
      this.door.height
    );

    // distancia de interacción con los npcs
    const INTERACT_DISTANCE = 80;

    // NPCS
    for (const npc of this.npcs) {
      npc.update();

      const distance = Math.abs(
        npc.x + npc.width / 2 - (this.player.x + playerWidth)
      );

      npc.canInteract = distance < INTERACT_DISTANCE;

      // abrir diálogo
      if (
        npc.canInteract &&
        (this.input.isPressed("e") || this.input.isDown("E")) &&
        !this.dialogueActive
      ) {
        console.log("E PRESIONADA");
        console.log("comenzamos dialogo");

        this.dialogueActive = true;
        this.activeNpc = npc;

        let startNode = "start";

        for (const key in npc.dialogue) {
          const node = npc.dialogue[key];

          if (node.requiresFlag && this.flags[node.requiresFlag]) {
            startNode = key;
          }

          if (node.requiresPower && this.playerLevel >= npc.requiredPower) {
            startNode = key;
          }

          if (node.requiresNotPower && this.playerLevel < npc.requiredPower) {
            startNode = key;
          }
        }

        this.currentNode = npc.dialogue ? npc.dialogue[startNode] : null;

        this.selectedChoice = 0;

        console.log("dialogueActive:", this.dialogueActive);
        console.log("currentNode:", this.currentNode);
      }

      npc.draw(this.ctx, this.camera);

      // botón (e) flotador
      if (npc.canInteract) {
        const float = Math.sin(performance.now() / 300) * 4;

        const iconX =
          npc.x - this.camera.x + npc.width / 2 - this.interactIcon.width - 10;

        const iconY = npc.y - npc.height - 30 + float + 15;

        this.ctx.drawImage(
          this.interactIcon,
          Math.floor(iconX),
          Math.floor(iconY)
        );
      }
    }

    const guardian = this.npcs.find((n) => n.id === "guardian");

    if (
      guardian &&
      this.playerLevel >= guardian.requiredPower &&
      this.player.x + playerWidth > this.door.x &&
      !this.transitioning &&
      !this.victory
    ) {
      this.transitioning = true;
      this.fadeAlpha = 0;
    }

    // Jugador
    const feetOffset = 60 * p.scale; // Ajuste visual de su altura referente al piso

    // Input de flechas (a/d y <-/->) + movimiento
    if (!this.dialogueActive) {
      if (
        this.input.isDown("a") ||
        this.input.isDown("ArrowLeft") ||
        this.input.isDown("A")
      ) {
        p.vx = -p.speed;
        p.frameY = 1;
      } else if (
        this.input.isDown("d") ||
        this.input.isDown("ArrowRight") ||
        this.input.isDown("D")
      ) {
        p.vx = p.speed;
        p.frameY = 0;
      } else {
        p.vx = 0;
      }
    } else {
      // diálogo activo → jugador quieto
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

    // Física (para cuando salte)
    p.vy += p.gravity;
    p.y += p.vy;

    // Colisión con el piso
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

    if (this.dialogueActive && this.currentNode) {
      this.drawDialogue();

      const hasChoices =
        this.currentNode.choices && this.currentNode.choices.length > 0;

      // Navegar opciones
      if (hasChoices) {
        if (this.input.isPressed("ArrowUp") || this.input.isPressed("w")) {
          this.selectedChoice =
            (this.selectedChoice - 1 + this.currentNode.choices.length) %
            this.currentNode.choices.length;
        }

        if (this.input.isPressed("ArrowDown") || this.input.isPressed("s")) {
          this.selectedChoice =
            (this.selectedChoice + 1) % this.currentNode.choices.length;
        }
      }

      // ESPACIO
      if (this.input.isPressed(" ")) {
        if (hasChoices) {
          const availableChoices = (this.currentNode.choices || []).filter(
            (choice) => {
              if (!choice.requiresFlag) return true;
              return this.flags[choice.requiresFlag];
            }
          );
          console.log("FLAGS ACTUALES:", this.flags);

          const choice = availableChoices[this.selectedChoice];

          if (choice.setFlag) {
            this.flags[choice.setFlag] = true;

            const npcPower = this.activeNpc.power || 1;
            this.addLevelPopup(npcPower);

            this.playerLevel += npcPower;

            if (this.callbacks?.onGainPower) {
              this.callbacks.onGainPower(npcPower);
            }
          }

          if (choice.next) {
            this.currentNode = this.activeNpc.dialogue[choice.next];
            this.selectedChoice = 0;
          } else {
            // ← FIN DEL DIÁLOGO
            this.dialogueActive = false;
            this.activeNpc = null;
            this.currentNode = null;
          }
        } else if (this.currentNode.next) {
          this.currentNode = this.activeNpc.dialogue[this.currentNode.next];
        } else {
          this.dialogueActive = false;
          this.activeNpc = null;
          this.currentNode = null;
        }
      }
    }

    this.levelPopups.forEach((popup) => {
      popup.y -= 0.5; // sube
      popup.life--;

      const alpha = popup.life / 60;

      this.ctx.globalAlpha = alpha;
      this.ctx.font = "bold 40px monospace";

      // BORDE
      this.ctx.strokeStyle = "#000000";
      this.ctx.lineWidth = 4;
      this.ctx.strokeText(
        `+${popup.value}`,
        Math.floor(popup.x - this.camera.x + 70),
        Math.floor(popup.y + 170)
      );

      // RELLENO
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText(
        `+${popup.value}`,
        Math.floor(popup.x - this.camera.x + 70),
        Math.floor(popup.y + 170)
      );

      this.ctx.globalAlpha = 1;
    });

    this.levelPopups = this.levelPopups.filter((p) => p.life > 0);

    if (this.transitioning) {
      this.fadeAlpha += 0.02;

      if (this.fadeAlpha >= 1) {
        this.fadeAlpha = 1;
        this.transitioning = false;
        this.victory = true;
        console.log("VICTORY ACTIVADA");
      }

      this.ctx.fillStyle = `rgba(0,0,0,${this.fadeAlpha})`;
      this.ctx.fillRect(0, 0, w, h);
    }

    if (this.victory) {
      this.victoryTimer++;

      const alpha = Math.min(this.victoryTimer / 60, 1);
      this.textBounce = Math.sin(this.victoryTimer / 10) * 8;

      // Fondo negro con fade
      this.ctx.save();
      this.ctx.globalAlpha = alpha;
      this.ctx.fillStyle = "#000";
      this.ctx.fillRect(0, 0, w, h);
      this.ctx.restore();

      // Ejecutar solo una vez
      if (!this.victoryNotified) {
        this.victoryNotified = true;
        this.audio.stopMusic();
        this.audio.playSound("victory");
        if (this.callbacks?.onVictory) this.callbacks.onVictory();
      }

      // Confetti
      this.ctx.save();
      this.ctx.globalAlpha = 1; // asegurarse que confetti y texto no se vean afectados
      this.ctx.textAlign = "center";

      this.confetti.forEach((c) => {
        c.y += c.speed;
        if (c.y > h) c.y = -10;
        this.ctx.fillStyle = c.color;
        this.ctx.fillRect(c.x, c.y, c.size, c.size);
      });

      // Texto
      this.ctx.fillStyle = "#fff";
      this.ctx.font = "bold 48px monospace";
      this.ctx.fillText(
        "🎉 FELIZ CUMPLEAÑOS BABOSO 🎉",
        w / 2,
        h / 2 - 30 + this.textBounce
      );
      this.ctx.font = "22px monospace";
      this.ctx.fillText(
        "Gracias por jugar",
        w / 2,
        h / 2 + 20 + this.textBounce
      );
      this.ctx.fillText(
        "Espero que te guste mucho este jueguito que te hice amigo tqm :)",
        w / 2,
        h / 2 + 80
      );

      this.ctx.restore();
    }
  }
}
