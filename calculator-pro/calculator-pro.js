let resultado = [];
let resSum = 0;
let resRest = 0;
let resMult = 1;
let resDiv = 0;
let resSqr;
calculator_pro();
function calculator_pro(){
    let numeros = [];
    let num;
    do{
        num = prompt("Introduzca un número");
        if (isNaN(parseFloat(num))){
            alert("Has introducido un valor incorrecto");
        }
        else{
            numeros.push(parseFloat(num));
        }
    }while (num)
    if (numeros.length === 0){
        console.log("No has introducido ningun número");
    }
    else if (numeros.length === 1){
        resSqr = (Math.sqrt(numeros[0])).toFixed(3);
        console.log("La raíz cuadrada del número que has introducido es: " + resSqr);
    }
    else if (numeros.length > 1){
        for (var i = 0; i < numeros.length; i++){
            resSum = resSum + numeros[i];
            resMult *= numeros[i];
            if (i === 0){
                resDiv = numeros[i] / numeros[i+1];
                resRest = numeros[i] - numeros[i+1];
            }
            else if (i < numeros.length - 1){
                resDiv = resDiv / numeros[i+1];
                resRest = resRest - numeros[i+1];
            }
        } 
        resultado.push(resSum, resRest,resMult, resDiv);
        console.log("El resultado de añadir los números es: " + resSum.toFixed(3));
        console.log("El resultado de restar los números es: " + resRest.toFixed(3));
        console.log("El resultado de multiplicar los números es:" + resMult.toFixed(3));
        console.log("El resultado de dividir los números es: " + resDiv.toFixed(3));
    }    
}
            
let valor = confirm("¿Quieres continuar?");
if (valor){
    calculator_pro();
}