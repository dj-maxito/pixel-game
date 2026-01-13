import { useEffect, useRef, useState } from "react";
import GameLoop from "../engine/GameLoop";
import DialogueBox from "./DialogueBox.jsx";
import Npc from "../engine/entities/Npc.js";
import { Player } from "../engine/entities/Player.js";
import AudioManager from "../engine/AudioManager.js";
import NPCS from "../data/npcs.js";
import Input from "../engine/Input.js";
import { level1 } from "../level/Level1.js";

export default function Game({ onRestart }) {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);

  const [victory, setVictory] = useState(false);
  const [playerLevel, setPlayerLevel] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    const game = new GameLoop(ctx, {
      onVictory: () => setVictory(true),
      onGainPower: (amount) => setPlayerLevel((p) => p + amount),
    });

    gameRef.current = game;
    game.loadAssets().then(() => {
      console.log("Todos los assets cargados, iniciando gameLoop");
      game.start();
    });

    return () => game.stop();
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full bg-black" />

      <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded font-mono">
        Nivel: {playerLevel}
      </div>

      {victory && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-2 mt-100 bg-white rounded border-2 border-blue-700 hover:bg-blue-900 hover:text-white"
          >
            Volver a jugar :P
          </button>
        </div>
      )}
    </div>
  );
}
