import "./index.css";
import Game from "./components/Game";
import { useState } from "react";
import Access from "./components/Access";

export default function App() {
  const [authorized, setAuthorized] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  function restartGame() {
    setGameKey((k) => k + 1);
  }

  return (
    <>
      {!authorized && <Access onSuccess={() => setAuthorized(true)} />}
      {authorized && <Game key={gameKey} onRestart={restartGame} />}
    </>
  );
}
