import { useEffect, useRef, useState } from "react";
import GameLoop from "../engine/GameLoop";
import NPCS from "../data/npcs";
import DialogueBox from "./DialogueBox";

export default function Game() {
  console.log("GAME COMPONENT CARGADO");
  const canvasRef = useRef(null);
  const [dialogue, setDialogue] = useState(null);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [currentNpc, setCurrentNpc] = useState(null);
  const [playerLevel, setPlayerLevel] = useState(1);

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
      isPaused: () => false,
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
      <canvas ref={canvasRef} className="bg-sky-300 h-screen w-screen" />

      <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded">
        Nivel: {playerLevel}
      </div>

      <DialogueBox dialogue={dialogue?.[dialogueIndex]} onNext={nextDialogue} />
    </div>
  );
}
