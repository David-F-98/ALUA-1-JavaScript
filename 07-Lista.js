const ciudad1 = "Bogotá";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago");

const paisesDisponible = ["Colombia","Peru","Chile","Argentina"];
//push agregar al final
paisesDisponible.push('Uruguay');
ciudadesDisponibles.push('Montevideo');

//unshift agregar al inicio
paisesDisponible.unshift('Ecuador');
ciudadesDisponibles.unshift('Quito');
console.log(ciudadesDisponibles);
console.log(paisesDisponible);

console.log(paisesDisponible[0]);
console.log(ciudadesDisponibles[0]);
//splice actualizar 
paisesDisponible.splice(1,2,'Venezuela');
console.log(paisesDisponible);