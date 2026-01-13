import { useState } from "react";

const CORRECT_CODE = "100106";

export default function Access({ onSuccess }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [closing, setClosing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (code === CORRECT_CODE) {
      setClosing(true);

      setTimeout(() => {
        onSuccess();
      }, 600);
    } else {
      setError(true);
      setCode("");
    }
  }

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black
      `}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center text-white">
          ¡Acceso privado!
        </h1>

        <input
          type="password"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="text-white text-center text-xl tracking-widest px-4 py-2 rounded"
          placeholder="● ● ● ● ● ●"
        />

        {error && (
          <p className="text-red-400 text-sm text-center">Código incorrecto</p>
        )}

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 transition rounded py-2 font-bold text-white"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
