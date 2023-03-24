//Tipos de datos
//Alfanumerico
//let nombrePasajero = "Pedro Silva";
//nombrePasajero = "Ramón Silva";

//Numerico
let valorBoleto = 1000;
const porcentajeTasaEmbarque = 60/100;
const impuestoAeropuerto  = 100;
var gestionAgencia = 100;


//Lógicos (true,false)
let boletoActivo = true;

//Operacionesaritmeticas
//Suma
//let totaBoletos = valorBoleto + valorBoleto*tasaEmbarque + gestionAgencia;

//Orden de presedencia
let totaBoletosForma2 = (valorBoleto + impuestoAeropuerto) +(valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totaBoletosForma2)

//Concatenacion de texto
let nombrePasajero = "Leonardo"
let apellidoPasajero = "Lacruz"

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseInt('1000') + parseFloat('12');
let multiplicacion = parseInt('1000') / parseFloat('10');
console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('ASSSA');
console.log(noEsUnNumero);