const questions = [
  {
    letter: "A",
    answer1: "abducir",
    question1:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.",
    answer2: "anticuario",
    question2: "CON LA A. Persona que colecciona antiguedades.",
    answer3: "abridor",
    question3:
      "CON LA A. Instrumento usado para levantar las tapas de ciertas botellas.",
  },

  {
    letter: "B",
    answer1: "bingo",
    question1:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso.",
    answer2: "biberón",
    question2:
      "CON LA B. Utensilio para la lactancia artificial que consiste en una botella con una tetina artificial.",
    answer3: "bruto",
    question3: "CON LA B. Que es violento, cruel, salvaje.",
  },

  {
    letter: "C",
    answer1: "churumbel",
    question1: "CON LA C. Niño, crío, bebé.",
    answer2: "Capo",
    question2:
      "CON LA C. Jefe de una mafia, especialmente de narcotraficantes.",
    answer3: "cantar",
    question3: "CON LA C. Emitir con la voz sonidos melodiosos.",
  },

  {
    letter: "D",
    answer1: "diarrea",
    question1:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.",
    answer2: "desodorante",
    question2: "CON LA D. Producto que se utiliza para reducir el olor.",
    answer3: "diálogo",
    question3: "CON LA D. Conversación entre dos o más personas.",
  },

  {
    letter: "E",
    answer1: "ectoplasma",
    question1:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.",
    answer2: "Efímero",
    question2: "CON LA E. Pasajero, de corta duración.",
    answer3: "elegir",
    question3: "CON LA E. Escoger algo o a alguien.",
  },

  {
    letter: "F",
    answer1: "facil",
    question1:
      "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad.",
    answer2: "faja",
    question2:
      "CON LA F. Prenda interior elástica que ciñe la cintura o la cintura y las caderas.",
    answer3: "fugarse",
    question3: "CON LA F. Huir alguien de un lugar.",
  },

  {
    letter: "G",
    answer1: "galaxia",
    question1:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas.",
    answer2: "gominola",
    question2:
      "CON LA G. Golosina blanda masticable, generalmente cubierta de azúcar.",
    answer3: "granulado",
    question3: "CON LA G. En forma de granos.",
  },

  {
    letter: "H",
    answer1: "harakiri",
    question1: "CON LA H. Suicidio ritual japonés por desentrañamiento.",
    answer2: "historia",
    question2:
      "CON LA H. Conjunto de todos los hechos ocurridos en tiempos pasados.",
    answer3: "higiene",
    question3:
      "CON LA H. Limpieza del cuerpo y de los utensilios, viviendas, instalaciones, etc.",
  },

  {
    letter: "I",
    answer1: "iglesia",
    question1: "CON LA I. Templo cristiano.",
    answer2: "ilves",
    question2:
      "CON LA I. Apellido del político que fue presidente de Estonia entre los años 2006 y 2016.",
    answer3: "interés",
    question3: "CON LA I. Esfuerzo y atención que se pone en algo.",
  },

  {
    letter: "J",
    answer1: "jabali",
    question1:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba.",
    answer2: "judión",
    question2: "CON LA J. Variedad de judía de vainas anchas y semilla grande.",
    answer3: "juguete",
    question3: "CON LA J. Objeto que sirve para que jueguen los niños.",
  },

  {
    letter: "K",
    answer1: "kamikaze",
    question1:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria.",
    answer2: "kilogramo",
    question2: "CON LA K. Medida para pesar.",
    answer3: "kárate",
    question3:
      "CON LA K. Arte marcial de origen japonés que consiste en combatir con manos, puños, pies...",
  },

  {
    letter: "L",
    answer1: "licantropo",
    question1: "CON LA L. Hombre lobo.",
    answer2: "linaje",
    question2:
      "CON LA L. Ascendencia o descendencia de una familia, especialmente noble.",
    answer3: "ligero",
    question3:
      "CON LA L. Que se mueve o actúa con rapidez, agilidad o facilidad.",
  },

  {
    letter: "M",
    answer1: "misantropo",
    question1:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas.",
    answer2: "madriquera",
    question2:
      "CON LA M. Cueva en que habitan ciertos animales, especialmente los conejos.",
    answer3: "mitad",
    question3:
      "CON LA M. Cada una de las dos partes iguales en que se divide algo.",
  },

  {
    letter: "N",
    answer1: "necedad",
    question1: "CON LA N. Demostración de poca inteligencia.",
    answer2: "nabato",
    question2: "CON LA N. Espinazo de los vertebrados.",
    answer3: "negro",
    question3: "CON LA N. De color totalmente oscuro",
  },

  {
    letter: "Ñ",
    answer1: "señal",
    question1:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    answer2: "acuñar",
    question2: "CONTIENE LA Ñ. Hacer o fabricar moneda.",
    answer3: "niño",
    question3: "CONTIENE LA Ñ.  Persona que tiene pocos años.",
  },

  {
    letter: "O",
    answer1: "orco",
    question1:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.",
    answer2: "onírico",
    question2: "CON LA O. Perteneciente o relativo a los sueños.",
    answer3: "oboe",
    question3: "CON LA O. Instrumento musical de viento construido con madera.",
  },

  {
    letter: "P",
    answer1: "protoss",
    question1:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.",
    answer2: "piolet",
    question2:
      "CON LA P. Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo.",
    answer3: "pajarería",
    question3: "CON LA P. Tienda en la que se venden pájaros.",
  },

  {
    letter: "Q",
    answer1: "queso",
    question1:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche.",
    answer2: "equilátero",
    question2:
      "CON LA Q. Se dice del triángulo que tiene todos los lados iguales.",
    answer3: "quizá",
    question3: "CON LA Q. Indica duda o la posibilidad de algo que se expresa.",
  },

  {
    letter: "R",
    answer1: "raton",
    question1: "CON LA R. Roedor.",
    answer2: "risaralda",
    question2:
      "CON LA R. Departamento de Colombia con capital en la ciudad de Pereira.",
    answer3: "rampa",
    question3: "CON LA R. Terreno en pendiente.",
  },

  {
    letter: "S",
    answer1: "stackoverflow",
    question1:
      "CON LA S. Comunidad salvadora de todo desarrollador informático.",
    answer2: "sentar",
    question2:
      "CON LA S. Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas.",
    answer3: "sequir",
    question3: "CON LA S. Ir o estar detrás o después de alguien o algo.",
  },

  {
    letter: "T",
    answer1: "terminator",
    question1:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.",
    answer2: "tipi",
    question2:
      "CON LA T. Tienda de piel de forma cónica que utilizaban como viviendas los indios de las praderas de América del Norte.",
    answer3: "talismán",
    question3:
      "CON LA T. Objeto, signo, etc., al que se atribuye virtudes sobrenaturales, poderes mágicos, etc.",
  },

  {
    letter: "U",
    answer1: "unamuno",
    question1:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.",
    answer2: "unilateral",
    question2:
      "CON LA U.  Que se refiere o se circunscribe solamemente a una parte o a un aspecto de algo.",
    answer3: "unicornio",
    question3:
      "CON LA U. Animal imaginario que se parece a un caballo con un cuerno sobre la frente",
  },

  {
    letter: "V",
    answer1: "vikingos",
    question1:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.",
    answer2: "vilano",
    question2: "CON LA V. Flor del cardo.",
    answer3: "vandalismo",
    question3:
      "CON LA V. Tendencia o inclinación a hacer destrozos o armar escándalo.",
  },

  {
    letter: "W",
    answer1: "sandwich",
    question1:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso.",
    answer2: "windsurf",
    question2:
      "CON LA W. Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular.",
    answer3: "waterpolo",
    question3:
      "CON LA W. Deporte de competición que se practica en una piscina entre dos equipos de siete nadadores.",
  },

  {
    letter: "X",
    answer1: "botox",
    question1:
      "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética.",
    answer2: "dux",
    question2:
      "CONTIENE LA X. En las Repúblicas de Venecia y Génova, príncipe o magistrado supremo.",
    answer3: "extranjero",
    question3: "CONTIENE LA X. Persona de otro país",
  },

  {
    letter: "Y",
    answer1: "peyote",
    question1:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos.",
    answer2: "ensayar",
    question2:
      "CONTIENE LA Y. Preparar el montaje o ejecución de un espectáculo.",
    answer3: "yate",
    question3:
      "CON LA Y. Barco de recreo, a motor o a vela, generalmente lujoso.",
  },

  {
    letter: "Z",
    answer1: "zen",
    question1:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.",
    answer2: "zumbado",
    question2: "CON LA Z. Participio del verbo zumbar.",
    answer3: "zanjar",
    question3: "CON LA Z. Terminar un asunto, problema, discusión, etc.",
  },
];

const runking = [
  { jugador: "Tom", puntos: 25 },
  { jugador: "Sam", puntos: 20 },
  { jugador: "Martin", puntos: 15 },
  { jugador: "Marta", puntos: 18 },
];

let letras = 0;
let pasados = [];
let fallados = 0;
let turno = 1;

function pasapalabra() {
  letras = 0;
  preguntas(questions);

  if (pasados.length !== "0") {
    juego = confirm(
      "Ahora volvemos a las preguntas que has saltado. ¿Continuamos?"
    );
    if (juego) {
      preguntas(pasados);
    } else {
      adios();
    }
  }

  console.log(
    `EL juego ha terminado. Has acertado ${letras} letras y ${fallados} letras has fallado.`
  );

  mostrar_ranking();
  pasados = [];
  turno++;

  if (turno <= 3) {
    juego = confirm("¿Quieres jugar mas? Tenemos mas preguntas");
    if (juego) {
      pasapalabra();
    } else {
      console.log(`¡Adios ${jugador}!`);
    }
  } else {
    console.log("Has terminado todos ternos");
  }
}

function preguntas(array) {
  let respuesta;
  let pregunta = 1;
  const a = `answer${turno}`;
  const q = `question${turno}`;

  for (const item of array) {
    if (array === questions) {
      respuesta = prompt(
        `Pregunta  ${item[q]}\nIntriduce respuesta o escribe P para saltar palabra o S si quieres salir del juego.`
      );
    } else {
      respuesta = prompt(
        `Pregunta  ${item[q]}\nIntriduce respuesta o S si quieres salir del juego.`
      );
    }

    respuesta = respuesta.toLowerCase();

    if (respuesta === item[a]) {
      letras++;
      if (pregunta < array.length) {
        juego = confirm(
          `Correcto, tienes ${letras} puntos! Quieres continuar?`
        );
        if (!juego) {
          adios();
          break;
        }
      } else {
        alert(`Correcto, tienes ${letras} puntos!`);
      }
    } else if (respuesta === "p" && array !== pasados) {
      const k = {
        letter: item.letter,
        [`answer${turno}`]: item[a],
        [`question${turno}`]: item[q],
      };
      pasados.push(k);
    } else if (respuesta === "s") {
      adios();
      break;
    } else if (respuesta !== item[a] || respuesta == null) {
      fallados++;
      if (pregunta < array.length) {
        juego = confirm(
          `Incorrecto, has fallado letra ${item.letter} Quieres continuar?`
        );
        if (!juego) {
          adios();
          break;
        }
      } else {
        alert(`Incorrecto, has fallado letra ${item.letter}`);
      }
    }
    pregunta++;
  }
}

function mostrar_ranking() {
  runking.push({ jugador, puntos: letras });
  runking.sort((a, b) => b.puntos - a.puntos);
  console.table(runking);
}

function adios() {
  if (letras !== 0) {
    console.log(`¡Adios ${jugador}! Has acertado ${letras} letras.`);
  } else {
    console.log(`¡Adios ${jugador}!`);
  }
}

let jugador = prompt("Introduzca tu nombre", "");
let juego = confirm(
  `¡Hola ${jugador}!` + ` Bienvenido al juego PASAPALABRA. ¿Empezamos?`
);
if (juego) {
  pasapalabra();
} else {
  adios();
}
