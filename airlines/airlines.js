let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];


let nombre = prompt("Introduce su nombre", "");
alert("Bienvenido " + nombre + "!");

function vuelos() {
    let lista = "";
    let vuelo = {};
    let escala = "";
    let precio = [];
    let medio = 0;
    let countEscala = 0;
    let ultimos = [];

    console.log("Todos los vuelos disponibles del día:");
    for (i = 0; i < flights.length; i++) {
        vuelo = flights[i];
        precio.push(vuelo.cost);
        escala = "no realiza ninguna escala.";
        if (vuelo.scale === true) {
            escala = "realiza una escala.";
            countEscala++;
        }
        if (i > flights.length - 6) {
            ultimos.push(vuelo.to);
        }
        lista = "El vuelo con origen: " + vuelo.from + ", y destino: " + vuelo.to + " tiene un coste de " + vuelo.cost + "€ y " + escala;
        console.log(lista);
    }
    console.log("");
    console.log("*******************************");
    console.log("");

    for (i = 0; i < precio.length; i++) {
        medio += precio[i];
    }

    medio = (medio / precio.length).toFixed(2);

    console.log("El coste medio de los vuelos: " + medio + "€.");
    console.log("");
    console.log("*******************************");
    console.log("");
    console.log(countEscala + " vuelos efectúan escalas.");
    console.log("");
    console.log("*******************************");
    console.log("");
    console.log("Los destintos de los últimos vuelos del día son: ");

    for (i = 0; i < ultimos.length; i++) {
        console.log("- " + ultimos[i]);
    }

}
vuelos();