//Comparación
const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

const valorPasaje = 1000;

if (valorPasaje === 1000){
    console.log('El pasaje vale mil');
}



// operadores logicos
// AND = && // OR = ||  // NOT = !

const edadPasajero = 19;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if (edadPasajero >= 18 || estaAcompanado){
    if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1 )){
        console.log('Pasaje disponible para la venta');
    } else {
        console.log('Ciudad NO disponible para la viajar');
    }
}