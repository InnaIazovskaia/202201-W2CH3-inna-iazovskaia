let resSum;
let resultado = [];
let resRest;
let resMult;
let resDiv;
let resSqr;
let num1 = parseFloat(prompt("Introduzca primer número", ""));
if (isNaN(num1)) {
    alert("No has introducido número");
}
var num2 = parseFloat(prompt("Introduzca segundo número", ""));
if (isNaN(num2)) {
    alert("No has introdusido número");
}
function calculo(a, b) {
    if (isNaN(a) && isNaN(b)) {
        console.log("No has introducido ningun número");
    }
    else if (!isNaN(a) && isNaN(b)) {
        resSqr = (Math.sqrt(a)).toFixed(3);
        console.log("La raíz cuadrada del primer número es: " + resSqr);
    }
    else if (isNaN(a) && !isNaN(b)) {
        resSqr = (Math.sqrt(b)).toFixed(3);
        console.log("La raíz cuadrada del segundo número es: " + resSqr);
    }
    else {
        resSum = (a + b).toFixed(3);
        resRest = (a - b).toFixed(3);
        resMult = (a * b).toFixed(3);
        resDiv = (a / b).toFixed(3);
        resultado.push(resSum, resRest, resMult, resDiv);
        console.log("El resultado de añadir dos números es: " + resSum);
        console.log("El resultado de restar dos números es: " + resRest);
        console.log("El resultado de multiplicar dos números es:" + resMult);
        console.log("El resultado de dividir dos números es: " + resDiv);
    }
    
}
calculo(num1, num2);