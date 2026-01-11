export const NPCS = {
  npc1: {
    name: "Christian Borle",
    power: 3,
    dialogue: {
      start: {
        text: "Disculpa, ¿sabes dónde estamos?",
        next: "start_2",
      },

      start_2: {
        text: "Estaba asegurando mi plata de la segunda temporada de hazbin y de repente aparecí acá.",
        next: "start_3",
      },

      start_3: {
        text: "¿Crees que me hayan querido estafar?",
        choices: [
          { text: "Y bueno... capaz.", next: "lost" },
          { text: "¿¿¿¿CHRISTIAN BORLE????", next: "who" },
          { text: "¿Por qué de la nada hablas español?", next: "what" },
        ],
      },

      lost: {
        text: ["Bueno, ojalá mis managers sigan ahí cuando vuelva."],
        next: "lost_2",
      },

      lost_2: {
        text: ["Aunque... ni idea de cómo salir de aquí. ¿Tú sabes?"],
        choices: [{ text: "Pues no.", next: "lost_3" }],
      },

      lost_3: {
        text: ["Lo esperaba."],
        next: "lost_4",
      },

      lost_4: {
        text: [
          "Ah, cierto, tenía esto en mis bolsillos, ni idea de cómo apareció.",
        ],
        next: "lost_5",
      },

      lost_5: {
        text: ["Es una especie de boleto, toma."],
        next: "lost_6",
      },

      lost_6: {
        text: [
          "Tiene mi firma, consideralo un regalo por hablar conmigo un rato.",
        ],
        next: "lost_7",
      },

      lost_7: {
        text: ["Sólo... no la clones."],
        choices: [{ text: "Pfff.", next: null, setFlag: "helpedBorle" }],
      },

      who: {
        text: ["Heyyy, ¡si me conoces me ahorras la introducción!"],
        next: "who_1",
      },

      who_1: {
        text: ["¡Es lindo conocer a gente que me sigue!"],
        next: "who_2",
      },

      who_2: {
        text: ["Incluso en... situaciones como esta."],
        next: "lost_4",
      },

      what: {
        text: ["¿Poder del guión?"],
        next: "what_1",
      },

      what_1: {
        text: [
          "Necesidades del juego, si lo pienso mucho capaz me abstracto, no sé.",
        ],
        next: "lost_4",
      },

      // dialogo al volver a hablar con el npc!
      repeat_start: {
        requiresFlag: "helpedBorle",
        text: "Entre nos, hay un loquito raro frente a una puerta muuuy fuera de lugar.",
        choices: [
          {
            text: "¿Crees que me deje pasar?",
            next: "repeat_respuesta",
          },
          {
            text: "Eh... gracias, por el dato.",
            next: "repeat_respuesta_2",
          },
        ],
      },

      repeat_respuesta: {
        text: "Ni idea, parece estar esperando a alguien, tendrías que hablarle.",
        next: null,
      },

      repeat_respuesta_2: {
        text: "Un placer ayudar a la gente, ojalá te sirva el regalo, haha.",
        next: null,
      },
    },
  },

  npc2: {
    name: "Mikey",
    power: 2,
    dialogue: {
      start: {
        text: "¡Hola, desconocido!",
        next: "start_2",
      },

      start_2: {
        text: "¿Quieres probar una pizza que encontré?",
        next: "start_3",
      },

      start_3: {
        text: "Se me cayó unas cuantas veces pero esta bieen.",
        choices: [
          { text: "Eh...", next: "lost" },
          { text: "¿De qué es?", next: "who" },
          {
            text: [
              "No estoy seguro si quiero tener una",
              "gastroenteritis ahora mismo, pero gracias.",
            ],
            next: "what",
          },
        ],
      },

      lost: {
        text: [
          "¡Hey, no tengas miedo hermano!, no es como si fuera veneno o mutageno raro.",
        ],
        next: "lost_2",
      },

      lost_2: {
        text: ["Creo..."],
        choices: [{ text: "Reconfortante, gracias Mikey.", next: "lost_3" }],
      },

      lost_3: {
        text: ["Como sea, ¡esta es la verdadera comida de un ninja!"],
        next: "lost_4",
      },

      lost_4: {
        text: ["¡No creo que te lo quieras perder!"],
        next: "lost_5",
      },

      lost_5: {
        text: ["Ten, una muestra de aprecio para un nuevo amigo."],
        next: "lost_6",
      },

      lost_6: {
        text: ["Guardala bien."],
        next: "lost_7",
      },

      lost_7: {
        text: ["¡O un mutante te la robará si te descuidas!"],
        choices: [{ text: "Gracias.", next: null, setFlag: "helpedMikey" }],
      },

      who: {
        text: ["Oh, ya sabes."],
        next: "who_1",
      },

      who_1: {
        text: ["¡De pura delicia!"],
        next: "who_2",
      },

      who_2: {
        text: ["De los ingredientes más especiales de Nueva York."],
        next: "lost_4",
      },

      what: {
        text: ["Agh, suenas como mis hermanos."],
        next: "what_1",
      },

      what_1: {
        text: ["¡No saben apreciar el verdadero arte!"],
        next: "what_2",
      },

      what_2: {
        text: [
          "Pero esta bien hermano, cuando la pruebes, entenderás que esto es magia de verdad.",
        ],
        next: "lost_5",
      },

      // dialogo al volver a hablar con el npc!
      repeat_start: {
        requiresFlag: "helpedMikey",
        text: "Intenté acercarme a esa puerta del final, ¡pero ese guardia es muy fuerte!",
        choices: [
          {
            text: "¿Le conoces de algo?",
            next: "repeat_respuesta",
          },
          {
            text: "Que raro...",
            next: "repeat_respuesta_2",
          },
        ],
      },

      repeat_respuesta: {
        text: "No me suena de nada, creo que recordaría a alguien tan cool.",
        next: null,
      },

      repeat_respuesta_2: {
        text: "No te preocupes, ¡el gran Mikey estará para protegerte en caso de que algo suceda!",
        choices: [{ text: "Muchas gracias, Mikey.", next: null }],
      },
    },
  },

  npc3: {
    name: "Yoosung",
    power: 2,
    dialogue: {
      start: {
        text: ["Hola, jaja."],
        next: "yoosung_1",
      },

      yoosung_1: {
        text: ["Este lugar esta bastante raro, ¿cierto?"],
        choices: [{ text: "La verdad es que sí...", next: "yoosung_2" }],
      },

      yoosung_2: {
        text: ["Si este es un evento raro de Seven, no me dijo nada."],
        next: "yoosung_3",
      },

      yoosung_3: {
        text: ["Bueno, a él siempre le gusta gastarme bromas pesadas."],
        next: "yoosung_4",
      },

      yoosung_4: {
        text: ["¡Pero esto es pasarse!"],
        next: "yoosung_5",
      },

      yoosung_5: {
        text: ["¡Ni siquiera funcionan los datos de mi celular!"],
        next: "yoosung_6",
      },

      yoosung_6: {
        text: ["No sé qué hacer..."],
        next: "yoosung_7",
      },

      yoosung_7: {
        text: [
          "Normalmente Rika sabría qué hacer.",
          "Ella siempre tenía un plan.",
        ],
        choices: [
          { text: "Suena importante para ti.", next: "rika" },
          { text: "Tú puedes decidir por ti mismo, Yoosung.", next: "self" },
          { text: "Todo va a estar bien, seguro no es nada.", next: "yep" },
        ],
      },

      rika: {
        text: ["Sí…", "Supongo que aún me cuesta soltar eso."],
        next: "rika_2",
      },

      rika_2: {
        text: ["Hey... al parecer es un día importante para ti, ¿no?"],
        next: "rika_3",
      },

      rika_3: {
        text: ["Por los globos y... toda esta gente."],
        next: "rika_4",
      },

      rika_4: {
        text: ["Ten, un pequeño regalo para ti."],
        next: "rika_5",
      },

      rika_5: {
        text: ["Es un pequeño pin de omurice, ¡mi platillo favorito!"],
        next: "rika_6",
      },

      rika_6: {
        text: ["No es mucho, pero espero que te guste."],
        next: "rika_7",
      },

      rika_7: {
        text: ["Fue divertido hablar contigo."],
        choices: [
          {
            text: "Digo lo mismo, Yoosung.",
            next: null,
            setFlag: "helpedYoosung",
          },
        ],
      },

      self: {
        text: ["¿Lo crees?", "…quiero creer que sí."],
        next: "self_2",
      },

      self_2: {
        text: ["Gracias por confiar en mi."],
        choices: [{ text: "Yo sé que puedes.", next: "rika_2" }],
      },

      yep: {
        text: ["¿Tú crees?"],
        next: "yep_1",
      },

      yep_1: {
        text: [
          "Creo que no me queda más opción que confiar en tus palabras, jaja.",
        ],
        next: "rika_2",
      },

      repeat_start: {
        requiresFlag: "helpedYoosung",
        text: "Creo que algo esta por suceder.",
        choices: [
          {
            text: "¿Por qué lo dices?",
            next: "repeat_respuesta",
          },
          {
            text: "¿Crees que sea interesante.",
            next: "repeat_respuesta_2",
          },
        ],
      },

      repeat_respuesta: {
        text: "Antes, ese señor de allá no nos dejaba pasar.",
        next: "repeat_respuesta_1",
      },

      repeat_respuesta_1: {
        text: "Nos dio unas cartas, y dijo que esperaramos a su señal.",
        choices: [{ text: "Que extraño...", next: null }],
      },

      repeat_respuesta_2: {
        text: "Ojalá, ¡ya quiero contarles a todos los de la RFA lo que suceda!",
        choices: [{ text: "Seguro no falta mucho.", next: null }],
      },
    },
  },

  npc4: {
    name: "Snoopy",
    power: 1,
    dialogue: {
      start: {
        text: ["..."],
        choices: [
          { text: "No hablas mucho, ¿cierto?", next: "lost" },
          { text: "¿Qué haces aquí, Snoopy?", next: "who" },
        ],
      },

      lost: {
        text: ["???"],
        choices: [
          { text: "Ya me parecía...", next: null, setFlag: "helpedSnoopy" },
        ],
      },

      who: {
        text: ["(ツ)_/¯"],
        choices: [
          {
            text: "Así que tampoco sabes...",
            next: null,
            setFlag: "helpedSnoopy",
          },
        ],
      },

      repeat_start: {
        requiresFlag: "helpedSnoopy",
        text: "...",
        choices: [
          {
            text: [
              "Supongo que tampoco sabes nada de",
              "esa puerta del final, ¿no?",
            ],
            next: "repeat_respuesta",
          },
          {
            text: "¿Algo importante que quieras decirme?",
            next: "repeat_respuesta_2",
          },
        ],
      },

      repeat_respuesta: {
        text: "",
        choices: [
          {
            text: "Puedo trabajar con eso, supongo...",
            next: null,
          },
        ],
      },

      repeat_respuesta_2: {
        text: "┐(´ー｀)┌",
        choices: [
          {
            text: "Interesante.",
            next: null,
          },
        ],
      },
    },
  },

  npc5: {
    name: "Michael y Jeremy",
    power: 4,
    dialogue: {
      start: {
        speaker: "Michael",
        text: [
          "Ok, Jeremy, no quiero alarmarte…",
          "pero este definitivamente no es el centro comercial.",
        ],
        next: "jeremy_1",
      },

      jeremy_1: {
        speaker: "Jeremy",
        text: ["Michael.", "Claramente no estamos en el centro comercial."],
        next: "michael_2",
      },

      michael_2: {
        speaker: "Michael",
        text: ["Lo sé, es el pánico hablando."],
        choices: [
          { text: "¿Dónde creen que estamos?", next: "where" },
          { text: "¿Cómo llegaron aquí?", next: "how" },
          { text: "¿Siguen con el match de las mochilas?", next: "haha" },
        ],
      },

      where: {
        speaker: "Jeremy",
        text: ["Mi mejor suposición es: ningún lugar bueno, al parecer."],
        next: "where_1",
      },

      where_1: {
        speaker: "Michael",
        text: ["¡No estoy lo suficientemente drogado para esto!"],
        next: "where_2",
      },

      where_2: {
        speaker: "Michael",
        text: ["...Pero tengo que admitir que es un lindo paisaje."],
        next: "where_3",
      },

      where_3: {
        speaker: "Jeremy",
        text: ["Sí, bueno..."],
        next: "where_4",
      },

      where_4: {
        speaker: "Jeremy",
        text: ["Tengo que darte la razón ahí."],
        next: "where_5",
      },

      where_5: {
        speaker: "Jeremy",
        text: ["Ugh, si tan solo el Squid no estuviera aquí también."],
        choices: [{ text: "¿Ese no estaba solo en tu cabeza?", next: "iknow" }],
      },

      iknow: {
        speaker: "Jeremy",
        text: ["¡Lo sabemos, es de lo más raro!"],
        next: "iknow_1",
      },

      iknow_1: {
        speaker: "Michael",
        text: [
          "Esto es de lo más creepy, ¡y mira que sobrevivimos a un apocalipsis!",
        ],
        next: "iknow_2",
      },

      iknow_2: {
        speaker: "Michael",
        text: [
          "De hecho, creo que te vendría bien tener una Mountain Dew Red, sólo por si acaso.",
        ],
        next: "iknow_3",
      },

      iknow_3: {
        speaker: "Jeremy",
        text: ["Es bueno que tengas tantas."],
        next: "iknow_4",
      },

      iknow_4: {
        speaker: "Michael",
        text: ["¡Es lo que hace un héroe!"],
        choices: [
          { text: "Gracias chicos.", next: null, setFlag: "helpedBoyfriends" },
        ],
      },

      how: {
        speaker: "Michael",
        text: ["Un portal gigante nos trajo para acá."],
        next: "how_1",
      },

      how_1: {
        speaker: "Michael",
        text: ["Estabamos muy chill jugando videojuegos y ¡puf!"],
        next: "how_2",
      },

      how_2: {
        speaker: "Jeremy",
        text: ["¡Fue de la nada!"],
        next: "how_3",
      },

      how_3: {
        speaker: "Jeremy",
        text: ["Horrible experiencia."],
        next: "where_5",
      },

      haha: {
        text: "...",
        next: "where_5",
      },

      // dialogo al volver a hablar con el npc!
      repeat_start: {
        requiresFlag: "helpedBoyfriends",
        speaker: "Jeremy",
        text: [
          "¡Ni quiero acercarme a esa puerta del final!",
          "¡Incluso Michael lo puede ver!",
        ],
        choices: [
          {
            text: "Es bastante raro...",
            next: "repeat_respuesta",
          },
          {
            text: "Giro de acontecimientos...",
            next: "repeat_respuesta_2",
          },
        ],
      },

      repeat_respuesta: {
        speaker: "Michael",
        text: "Para nada cool, bro. Ve con cuidado.",
        choices: [{ text: "Lo tendré.", next: null }],
      },

      repeat_respuesta_2: {
        speaker: "Jeremy",
        text: "¡Un HORRIBLE giro de acontecimientos!, intenta no acercarte a esa cosa.",
        choices: [{ text: "No te preocupes, tendré cuidado.", next: null }],
      },
    },
  },

  npc6: {
    name: "Edwin y Charles",
    power: 4,
    dialogue: {
      start: {
        speaker: "Edwin",
        text: [
          "Esto no estaba en ninguno de los casos que tenemos.",
          "Nada de esto debería existir así.",
        ],
        next: "charles_1",
      },

      charles_1: {
        speaker: "Charles",
        text: [
          "Tranquilo.",
          "No es la primera vez que el mundo a nuestro alrededor se rompe un poco.",
        ],
        next: "edwin_2",
      },

      edwin_2: {
        speaker: "Edwin",
        text: ["Tú."],
        choices: [{ text: "¿Yo?", next: "edwin_3" }],
      },

      edwin_3: {
        speaker: "Edwin",
        text: ["¿Has notado algo extraño últimamente?"],
        choices: [
          { text: "Todo es extraño.", next: "everything" },
          { text: "Ya me estoy acostumbrando.", next: "used_to_it" },
          { text: "Cuidadito como me hablas.", next: "gil" },
        ],
      },

      everything: {
        speaker: "Edwin",
        text: ["Eso confirma mis sospechas, no deberíamos estar aquí."],
        next: "charles_everything",
      },

      charles_everything: {
        speaker: "Charles",
        text: ["Peroo, al menos, estamos juntos."],
        next: "edwin_everything",
      },

      edwin_everything: {
        speaker: "Edwin",
        text: ["Al menos."],
        choices: [
          {
            text: "(Espero que recuerden que sigo aquí.)",
            next: "everything_1",
          },
        ],
      },

      everything_1: {
        speaker: "Edwin",
        text: [
          "De todas formas, seguro que hay algo en uno de mis libros que nos sirva.",
        ],
        next: "everything_2",
      },

      everything_2: {
        speaker: "Charles",
        text: ["Siempre tienes la solución a todo en ellos."],
        next: "everything_3",
      },

      everything_3: {
        speaker: "Edwin",
        text: ["Obviamente."],
        next: "everything_4",
      },

      everything_4: {
        speaker: "Charles",
        text: ["Hey, ten, un pequeño amuleto protector para ti."],
        choices: [{ text: "¿Para mi?", next: "everything_5" }],
      },

      everything_5: {
        speaker: "Edwin",
        text: ["...Siempre hay que ser precavidos."],
        next: "everything_6",
      },

      everything_6: {
        speaker: "Edwin",
        text: ["Y no te ves como un enemigo."],
        next: "everything_7",
      },

      everything_7: {
        speaker: "Charles",
        text: ["¡Pasaste la prueba con él!, sólo recuerda tener cuidado."],
        next: "everything_8",
      },

      everything_8: {
        speaker: "Charles",
        text: ["Creo que estaremos aquí por un bueen rato."],
        choices: [
          {
            text: "Pff, gracias, chicos.",
            next: null,
            setFlag: "helpedPaynland",
          },
        ],
      },

      used_to_it: {
        speaker: "Edwin",
        text: ["Eso es… preocupante."],
        next: "charles_used",
      },

      charles_used: {
        speaker: "Charles",
        text: ["O admirable."],
        next: "charles_used_1",
      },

      charles_used_1: {
        speaker: "Charles",
        text: ["Depende de cómo lo mires."],
        next: "everything_1",
      },

      gil: {
        speaker: "Edwin",
        text: ["No tengo miedo de una pequeña amenaza."],
        next: "gil_1",
      },

      gil_1: {
        speaker: "Charles",
        text: ["Heyy, vamos, estamos juntos en esto."],
        next: "gil_2",
      },

      gil_2: {
        speaker: "Edwin",
        text: ["..."],
        choices: [{ text: "...", next: "everything_1" }],
      },

      repeat_start: {
        requiresFlag: "helpedPaynland",
        speaker: "Charles",
        text: ["Sigues entero.", "Eso es buena señal."],
        next: "edwin_repeat",
      },

      edwin_repeat: {
        speaker: "Edwin",
        text: ["No te confíes.", "Este lugar cambia constantemente."],
        choices: [
          {
            text: [
              "(No es como si algo me estuviera",
              "atacando... por el momento.)",
            ],
            next: null,
          },
          {
            text: "Tranquilos.",
            next: null,
          },
        ],
      },
    },
  },

  npc7: {
    name: "Percy y Annabeth",
    power: 4,
    dialogue: {
      start: {
        speaker: "Annabeth",
        text: ["Este sitio no sigue ninguna lógica."],
        next: "percy",
      },

      percy: {
        speaker: "Percy",
        text: [
          "Bueno, no es como si algo estuviera intentando matarnos ahora mismo.",
        ],
        next: "percy_1",
      },

      percy_1: {
        speaker: "Percy",
        text: ["Lo cual, sinceramente, me preocupa más de lo que debería."],
        next: "annabeth_1",
      },

      annabeth: {
        speaker: "Annabeth",
        text: ["Tenemos que pensar en una solución.", "Y pronto."],
        next: "annabeth_1",
      },

      annabeth_1: {
        speaker: "Annabeth",
        text: ["Hey, tú."],
        choices: [{ text: "¿Ajá?", next: "annabeth_2" }],
      },

      annabeth_2: {
        speaker: "Annabeth",
        text: ["Dime que no has tocado nada raro."],
        choices: [
          {
            text: [
              "...Define raro, porque hay",
              "muchas cosas raras ahora mismo.",
            ],
            next: "touched",
          },
          { text: "Eh.. Todavía no.", next: "not_yet" },
          { text: "Esa es una muy buena pregunta.", next: "ask" },
        ],
      },

      touched: {
        speaker: "Percy",
        text: ["¿Ves? Eso es lo que te decía."],
        next: "annabeth_touched",
      },

      annabeth_touched: {
        speaker: "Annabeth",
        text: ["Hay hasta una tortuga parlante cerca."],
        next: "touched_1",
      },

      touched_1: {
        speaker: "Percy",
        text: ["He hablado hasta con caballos, esto ya no me extraña tanto."],
        next: "touched_2",
      },

      touched_2: {
        speaker: "Annabeth",
        text: ["Supongo que es cierto."],
        next: "touched_3",
      },

      touched_3: {
        speaker: "Annabeth",
        text: ["Hey."],
        choices: [
          {
            text: [
              "(¿Esta gente no se sabe mi nombre acaso?,",
              "llevo una etiqueta y todo.)",
            ],
            next: "touched_4",
          },
        ],
      },

      touched_4: {
        speaker: "Annabeth",
        text: [
          "Ten, una daga para que te puedas defender.",
          "Necesitamos un aliado fuerte de nuestro lado.",
        ],
        next: "touched_5",
      },

      touched_5: {
        speaker: "Percy",
        text: ["Cuenta con nosotros si algo sale mal, ¿bien?"],
        choices: [
          {
            text: ["Lo haré, ustedes también cuenten conmigo."],
            next: null,
            setFlag: "helpedTortolos",
          },
        ],
      },

      not_yet: {
        speaker: "Annabeth",
        text: ["Bien.", "Intenta que siga así."],
        next: "percy_not_yet",
      },

      percy_not_yet: {
        speaker: "Percy",
        text: ["Por favor, ya he pasado por muchas sorpresas."],
        next: "touched_3",
      },

      ask: {
        speaker: "Percy",
        text: [
          "Por alguna razón, esa respuesta no me deja tranquilo del todo.",
        ],
        next: "ask_1",
      },

      ask_1: {
        speaker: "Percy",
        text: [
          "Pero si sigues aquí, entonces... ¿supongo que no ha sido nada malo?",
        ],
        next: "ask_2",
      },

      ask_2: {
        speaker: "Annabeth",
        text: ["Creo que ha tenido mucha suerte..."],
        next: "ask_3",
      },

      ask_3: {
        speaker: "Percy",
        text: ["Eh, puede ser."],
        next: "touched_2",
      },

      repeat_start: {
        requiresFlag: "helpedTortolos",
        speaker: "Percy",
        text: ["Si necesitas ayuda, solo dinoslo."],
        next: "percy_repeat",
      },

      percy_repeat: {
        speaker: "Annabeth",
        text: ["Cuanto más sepamos de este lugar, mejor."],
        choices: [
          {
            text: "No sé mucho más que ustedes, lamentablemente.",
            next: null,
          },
          {
            text: "Nada malo va a pasar, estoy seguro.",
            next: "annabeth_repeat",
          },
        ],
      },

      annabeth_repeat: {
        speaker: "Annabeth",
        text: ["Esperemos que tengas razón."],
        next: null,
      },
    },
  },

  guardian: {
    name: "Squip",
    requiredPower: 20,
    dialogue: {
      start: {
        text: "¿Creíste que podías pasar así como así?",
        next: "check",
      },

      check: {
        text: "Déjame ver tu nivel...",
        next: "locked",
      },

      locked: {
        requiresNotPower: true,
        text: ["No puedes pasar.", "Aún no posees el poder suficiente."],
        choices: [{ text: "(Debo poder hacer algo.)", next: null }],
      },

      unlocked: {
        requiresPower: true,
        text: [
          "¡Has alcanzado el poder necesario, haha!.",
          "La puerta es toda tuya, amigo.",
        ],
        choices: [{ text: "Avanzar", next: null }],
      },
    },
  },
};

export default NPCS;
