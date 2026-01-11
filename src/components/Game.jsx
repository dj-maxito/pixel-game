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
  console.log("GAME COMPONENT CARGADO");
  const canvasRef = useRef(null);
  const [dialogue, setDialogue] = useState(null);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [currentNpc, setCurrentNpc] = useState(null);
  const [playerLevel, setPlayerLevel] = useState(0);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const game = new GameLoop(ctx, {
      onGainPower: (amount) => {
        setPlayerLevel((prev) => {
          const newLevel = prev + amount;
          game.setPlayerLevel(newLevel);
          return newLevel;
        });
      },
      onVictory: () => {
        setVictory(true);
      },
    });

    game.start();

    return () => {
      game.stop();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  function nextDialogue() {
    if (dialogueIndex + 1 < dialogue.length) {
      setDialogueIndex((i) => i + 1);
    } else {
      if (currentNpc && dialogues[currentNpc]?.reward) {
        setPlayerLevel((lvl) => lvl + dialogues[currentNpc].reward);
      }
      setDialogue(null);
      setCurrentNpc(null);
    }
  }

  return (
    <div className="relative">
      <canvas ref={canvasRef} className=" h-screen w-screen" />

      {victory && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <button
            className="px-5 py-1 mt-100 bg-white text-black font-extrabold font-mono text-lg rounded hover:bg-gray-200"
            onClick={onRestart}
          >
            Volver a jugar :P
          </button>
        </div>
      )}

      <div className="absolute top-2 left-2 bg-blue-100 bg-opacity-50 text-black font-mono font-bold px-3 py-1 rounded">
        Nivel: {playerLevel}
      </div>

      <DialogueBox dialogue={dialogue?.[dialogueIndex]} onNext={nextDialogue} />
    </div>
  );
}
