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
let precio = [];
let medio = 0;
let countEscala = 0;
let ultimos = [];
alert("Bienvenido " + nombre + "!");
console.log("Todos los vuelos disponibles del día:");
vuelos(flights);

function vuelos(lista) {
    let listaActual = "";
    let vuelo = {};
    let escala = "";

    for (i = 0; i < lista.length; i++) {
        vuelo = lista[i];
        precio.push(vuelo.cost);
        escala = "no realiza ninguna escala.";
        if (vuelo.scale === true) {
            escala = "realiza una escala.";
            countEscala++;
        }
        if (i > lista.length - 6) {
            ultimos.push(vuelo.to);
        }
        listaActual = "El vuelo con origen: " + vuelo.from + ", y destino: " + vuelo.to + " tiene un coste de " + vuelo.cost + "€ y " + escala;
        console.log(listaActual);
    }
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



let usario = (prompt("Escribe si eres ADMIN o USER: ")).toUpperCase();

if (usario === "ADMIN") {
    admin();
}
else if (usario === "USER") {
    user();
}
else {
    alert("No has escrito si eres ADMIN o USER.");
}

function admin() {
    let action = (prompt("Hola ADMIN! Si quieres añadir vuelos escribe 'Añadir'. Si quieres eliminar algun vuelo escribe 'ELIMINAR'")).toUpperCase();
    if (action === "AÑADIR") {
        if (flights.length > 14) {
            alert("15 vuelos ya registrados, no se puede añadir más.");
        }
        else {
            let id1;
            let to1;
            let from1;
            let cost1;
            let scale1;

            id1 = flights.length;
            from1 = prompt("Introduzca el origen del vuelo nuevo:");
            to1 = prompt("Introduzca el destino del vuelo nuevo:");
            cost1 = parseFloat(prompt("Introduzca el precio del vuelo nuevo:"));
            scale1 = confirm("¿El vuelo tiene escala?");
            flights.push({ id: id1, to: to1, from: from1, cost: cost1, scale: scale1 });
            console.log("");
            console.log("*******************************");
            console.log("");
            console.log("Nueva lista de todos los vuelos disponibles del día:");
            vuelos(flights);
            admin();
        }
    }
    else if (action === "ELIMINAR") {
        if (flights.length !== 0) {
            let idEliminar = parseInt(prompt("Introduzca id del vuelo que quieres eliminar (un numero entre 0 y )" + flights.length - 1 + ":"));
            if (idEliminar < flights.length) {
                for (let item of flights) {
                    if (item.id === idEliminar) {
                        flights.splice(idEliminar, 1);
                        console.log("");
                        console.log("*******************************");
                        console.log("");
                        console.log("El vuelo con id " + idEliminar + " eliminado");
                        console.log("Nueva lista de todos los vuelos disponibles del día:");
                        vuelos(flights);
                    }
                }
            }
            else {
                console.log("Has escrito id incorrecto.");
            }
        }
        else {
            alert("La lista de los vuelos está vacía.");
        }
        admin();
    }
    else {
        alert("No has elegido ningun acción.");
        admin();
    }
}


function user() {
    let vuelosForUser = [];
    let precio = parseFloat(prompt("Hola USER! Escribe el precio del vuelo que es aceptable para ti:"));
    if (precio === 0) {
        alert("No has escrito ningun precio.");
    }
    else {
        let action = (prompt("Para ver vuelos con precios más bajos de " + precio + "€ escribe 'B'. Para ver vuelos con precios más altos de " + precio + "€ escribe 'A'. Para ver vuelos con precios iquales a " + precio + "€ escribe 'I'. Para finalizar escribe 'F'")).toUpperCase();
        switch (action) {
            case "B":
                for (let item of flights) {
                    if (item.cost < precio) {
                        vuelosForUser.push(item);
                    }
                }
                if (vuelosForUser.length !== 0) {
                    console.log("");
                    console.log("*******************************");
                    console.log("");
                    console.log("Los vuelos con precios más bajos de " + precio + "€ son:");
                    vuelos(vuelosForUser);
                }
                else {
                    console.log("No tenemos vuelos con precios más bajos de " + precio + "€.");
                }
                break;
            case "A":
                for (let item of flights) {
                    if (item.cost > precio) {
                        vuelosForUser.push(item);
                    }
                }
                if (vuelosForUser.length !== 0) {
                    console.log("");
                    console.log("*******************************");
                    console.log("");
                    console.log("Los vuelos con precios más altos de " + precio + "€ son:");
                    vuelos(vuelosForUser);
                }
                else {
                    console.log("No tenemos vuelos con precios más altos de " + precio + "€.");
                }
                break;
            case "I":
                for (let item of flights) {
                    if (item.cost === precio) {
                        vuelosForUser.push(item);
                    }
                }
                if (vuelosForUser.length !== 0) {
                    console.log("");
                    console.log("*******************************");
                    console.log("");
                    console.log("Los vuelos con precios iquales a " + precio + "€ son:");
                    vuelos(vuelosForUser);
                }
                else {
                    console.log("No tenemos vuelo con precios iquales a " + precio + "€.");
                }
                break;
            case "F":
                alert("Gracias por su compra, vuelva pronto.");
                break;
            default:
                alert("No has elegido las condiciones para la visualización de la lista de vuelos");
                break;
        }

    }
}

