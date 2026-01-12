import { useState } from "react";
import Access from "./components/Access";
import Game from "./components/Game";

export default function App() {
  const [allowed, setAllowed] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  function restartGame() {
    setGameKey((k) => k + 1); // fuerza remount total
    setAllowed(false);
  }

  return (
    <>
      {!allowed && <Access onSuccess={() => setAllowed(true)} />}
      {allowed && <Game key={gameKey} onRestart={restartGame} />}
    </>
  );
}
