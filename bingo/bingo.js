const sistema = [
  { turnos: 15, puntos: 150 },
  { turnos: 30, puntos: 125 },
  { turnos: 45, puntos: 100 },
  { turnos: 60, puntos: 75 },
  { turnos: 75, puntos: 50 },
  { turnos: 90, puntos: 25 },
];

const runking = [
  { jugador: "Tom", puntos: 50 },
  { jugador: "Sam", puntos: 25 },
  { jugador: "Martin", puntos: 1 },
  { jugador: "Marta", puntos: 75 },
];

let turnos = 0;
const carton = [[], [], []];
let lineas = [[], [], []];
let bingo = 0;

function random() {
  const rand = 1 + Math.random() * 30;
  return Math.floor(rand);
}

function carton1() {
  turnos = 0;
  lineas = [[], [], []];
  bingo = 0;
  let rnum = 0;
  const numeros = [];
  let i = 0;
  do {
    rnum = random();
    if (!numeros.includes(rnum)) {
      numeros.push(rnum);
    }
    i++;
  } while (numeros.length < 15);
  i = 0;
  for (let k = 0; k < 3; k++) {
    for (let j = 0; j < 5; j++) {
      carton[k][j] = numeros[i];
      i++;
    }
  }
  console.table(carton);
  const juegoP = prompt(
    '¿Quiere continuar con este cartón? Escribe "Y" para continuar, escribe "C" para cambiar el cárton, escribe "N" para terminar juego'
  );
  continuar(juegoP);
  return carton;
}

function generarBombo() {
  turnos += 1;
  const numero = random();
  let count = 0;
  for (const i in carton) {
    if (carton[i].indexOf(numero) !== -1) {
      carton[i][carton[i].indexOf(numero)] = "X";
      console.log(`El numero ${numero} se ha encontrado en el cartón`);
      lineas[i].push(1);
      if (lineas[i].length === "5") {
        bingo += 1;
        if (bingo === 1) console.log("¡LÍNEA!");
      }
      console.log(lineas);
      break;
    } else {
      count += 1;
    }
  }
  if (count === 3)
    console.log(`El numero ${numero} no se ha encontrado en el cartón`);

  console.table(carton);
}

function continuar(paso) {
  if (paso) {
    paso.toLowerCase();
    switch (paso) {
      case "y":
        juego();
        break;
      case "c":
        carton1();
        break;
      case "n":
        console.log(`¡Adios ${jugador}!`);
        break;
    }
  }
}

function nuevoTurno() {
  const turno = prompt(
    '¿Desea continuar? Escribe "Y" para continuar, escribe "C" para cambiar el cárton, escribe "N" para terminar juego'
  );
  continuar(turno);
}

function mostrarRanking() {
  let puntos = 0;
  if (turnos === 15) {
    puntos = 150;
  } else if (turnos > 15 && turnos <= 30) {
    puntos = 125;
  } else if (turnos > 30 && turnos <= 45) {
    puntos = 100;
  } else if (turnos > 45 && turnos <= 60) {
    puntos = 75;
  } else if (turnos > 60 && turnos <= 75) {
    puntos = 50;
  } else if (turnos > 75 && turnos <= 90) {
    puntos = 25;
  } else if (turnos > 90) {
    puntos = 0;
  }
  runking.push({ jugador, puntos });
  runking.sort((a, b) => b.puntos - a.puntos);
  console.table(runking);
}

function juego() {
  generarBombo();
  if (bingo === 3) {
    console.log(`¡BINGO! El Cartón se ha completado en ${turnos} turnos`);
    mostrarRanking();
    const juegoP = prompt(
      '¿Quiere continuar jugar? Escribe "C" para continuar; escribe "N" para terminar juego'
    );
    continuar(juegoP);
  } else {
    nuevoTurno();
  }
}

let jugador = prompt("Introduce su nombre:", "");

console.log(`¡Hola ${jugador}!` + ` Bienvenido al juego BINGO.`);
console.log("=====================");
console.log("Le mostramos el sistema de puntos de éste juego:");
console.table(sistema);
console.log("=====================");
console.log("A continuación puede ver un cartón con 15 números:");
carton1();
