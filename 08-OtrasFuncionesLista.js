const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

const paisesDisponible = ["Colombia","Peru","Chile","Brasil","Argentina","Uruguay","Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos: ${cantidadCiudades}`);
console.log(`En la lista de ciudades tenemos: ${paisesDisponible.length}`);


//remover el primero
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos: ${ciudadesDisponibles.length} elementos`);

//remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos: ${ciudadesDisponibles.length} elementos`);

//filtrar
const paisesFiltrados = paisesDisponible.filter((e)=> e .length>6);
console.log(paisesFiltrados);

//unificar elemtos en cadena de caracteres
console.log(paisesDisponible.join('-'));

//ordenar
console.log(paisesDisponible.sort());

//conociendo la posisicion
console.log(`Peru esta en la posicion: ${paisesDisponible.indexOf('Peru')}`);

//unificacion de listas
const listaPaisesYCiudades = paisesDisponible.concat(ciudadesDisponibles);
console.log("Listade paises y ciudades:");
console.log(listaPaisesYCiudades);
console.log("Listade paises:");
console.log(paisesDisponible);