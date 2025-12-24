import { useEffect, useRef, useState } from "react";
import { dialogues } from "../data/dialogues";

export default function Game() {
  const canvasRef = useRef(null);
  const [dialogue, setDialogue] = useState(null);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [currentNpc, setCurrentNpc] = useState(null);
  const [playerLevel, setPlayerLevel] = useState(1);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const game = new GameLoop(ctx, {
      onNpcInteract: (npcId) => {
        setCurrentNpc(npcId);
        setDialogueIndex(0);
        setDialogue(dialogues[npcId].lines);
      },
      onGuardianInteract: () => {
        const g = dialogues.guardian;
        setDialogueIndex(0);
        setDialogue(playerLevel < g.requiredLevel ? g.locked : g.unlocked);
      },
      isPaused: () => dialogue !== null,
    });

    game.start();
    return () => game.stop();
  }, [dialogue, playerLevel]);

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
      <canvas
        ref={canvasRef}
        width={900}
        height={400}
        className="border-4 border-black bg-sky-300"
      />

      <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded">
        Nivel: {playerLevel}
      </div>

      <DialogueBox dialogue={dialogue?.[dialogueIndex]} onNext={nextDialogue} />
    </div>
  );
}
