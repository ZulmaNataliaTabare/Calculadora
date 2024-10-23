// // Función para la suma
// function sumar(num1, num2) {
//     return num1 + num2;
// }

// // Función para la resta
// function restar(num1, num2) {
//     return num1 - num2;
// }

// // Función para la multiplicación
// function multiplicar(num1, num2) {
//     return num1 * num2;
// }

// // Función para la división
// function dividir(num1, num2) {
//     return num1 / num2;
// }

// // Función para realizar la operación con switch
// function calcularOperacion(num1, num2, operacion) {
//     switch (operacion) {
//         case "sumar":
//             return num1 + num2;
//         case "restar":
//             return num1 - num2;
//         case "multiplicar":
//             return num1 * num2;
//         case "dividir":
//             return num1 / num2;
//         default:
//             return "Operación no válida.";
//     }
// }

const operaciones = require('./modulosOperaciones');

// Variables constantes
const NUM1 = 2850;
const NUM2 = 5525;

// Suma
const resultadoSuma = operaciones.sumar(NUM1, NUM2);
console.log("El resultado de la Suma es: ", resultadoSuma);

// Resta
const resultadoResta = operaciones.restar(NUM1, NUM2);
console.log("El resultado de la Resta es: ", resultadoResta);

// Multiplicación
const resultadoMultiplicacion = operaciones.multiplicar(NUM1, NUM2);
console.log("El resultado de la Multiplicacion es: ", resultadoMultiplicacion);

// División
const resultadoDivision = operaciones.dividir(NUM1, NUM2);
console.log("El resultado de la Division es: ", resultadoDivision);
