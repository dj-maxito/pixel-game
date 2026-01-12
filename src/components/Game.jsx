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
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new GameLoop(ctx, {
      onVictory: () => setVictory(true),
      onGainPower: (amount) => setPlayerLevel((p) => p + amount),
    });

    gameRef.current = game;

    game.startMusic();
    game.start();

    return () => {
      game.stop();
    };
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="w-screen h-screen block" />

      <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded font-mono">
        Nivel: {playerLevel}
      </div>

      {victory && (
        <div className="absolute mt-80 inset-0 flex flex-col items-center justify-center gap-3">
          <button
            onClick={onRestart}
            className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-blue-900 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none"
          >
            Volver a jugar :P
          </button>
        </div>
      )}
    </div>
  );
}
