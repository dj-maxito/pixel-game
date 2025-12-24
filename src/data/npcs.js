export const NPCS = {
  npc1: {
    name: "Chica del bosque",
    power: 3,
    lines: ["Gracias por venir.", "Este lugar ya no es seguro."],
  },

  npc2: {
    name: "Anciano",
    power: 5,
    lines: ["He esperado mucho tiempo.", "Ahora te toca a ti."],
  },

  npc3: {
    name: "Niño",
    power: 2,
    lines: ["¿Tú también escuchas las voces?"],
  },

  npc4: {
    name: "Viajera",
    power: 4,
    lines: ["El mundo es más grande de lo que parece."],
  },

  npc5: {
    name: "Mercader",
    power: 1,
    lines: ["El conocimiento también vale oro."],
  },

  npc6: {
    name: "Guardabosques",
    power: 3,
    lines: ["Observa antes de actuar."],
  },

  npc7: {
    name: "Ermitaño",
    power: 1,
    lines: ["La soledad enseña."],
  },

  npc8: {
    name: "Investigadora",
    power: 3,
    lines: ["Todo deja una huella."],
  },

  guardian: {
    name: "Guardián",
    requiredPower: 20,
    locked: ["No puedes pasar.", "Aún no posees el poder suficiente."],
    unlocked: ["Has alcanzado el poder necesario.", "La puerta es tuya."],
  },
};

export default NPCS;
