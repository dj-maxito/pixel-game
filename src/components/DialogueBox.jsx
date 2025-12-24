export default function DialogueBox({ dialogue, onNext }) {
  if (!dialogue) return null;

  return (
    <div
      onClick={onNext}
      className="absolute bottom-4 left-1/2 -translate-x-1/2
w-[90%] bg-black bg-opacity-80 text-white
p-4 rounded-xl cursor-pointer"
    >
      <p className="font-bold">{dialogue.name}</p>
      <p className="mt-2">{dialogue.text}</p>
      <p className="text-right text-sm opacity-60">
        Click o tecla para continuar
      </p>
    </div>
  );
}
