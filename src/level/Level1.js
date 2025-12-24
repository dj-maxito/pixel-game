import { Npc } from "../engine/entities/Npc";

export const level1 = {
  npcs: [
    new Npc({ x: 200, y: 300, id: "girl" }),
    new Npc({ x: 350, y: 300, id: "oldman" }),
    new Npc({ x: 500, y: 300, id: "cat" }),
    new Npc({ x: 800, y: 300, id: "guardian" }),
  ],
};
