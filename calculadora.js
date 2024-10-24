const prompt = require('prompt-sync')();
const operaciones = require('./modulosOperaciones');

function preguntarOperacion(num1, num2) {
    const operacion = prompt('Elija la operación a realizar (sumar, restar, multiplicar, dividir): ').toLowerCase();
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = operaciones.sumar(num1, num2);
            break;
        case 'restar':
            resultado = operaciones.restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = operaciones.multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = operaciones.dividir(num1, num2);
            break;
        default:
            console.log('Operación no válida.');
            return;
    }

    console.log(`El resultado de la operación ${operacion} es: ${resultado}`);
}

function iniciarCalculadora() {
    const input1 = prompt('Ingrese el primer número: ');
    const num1 = parseFloat(input1);

    const input2 = prompt('Ingrese el segundo número: ');
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
        preguntarOperacion(num1, num2);
    } else {
        console.log('Entrada no válida. Por favor, ingrese números válidos.');
    }
}

iniciarCalculadora();










// const readline = require('readline');
// const operaciones = require('./modulosOperaciones');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Ingrese el primer número: ', (input1) => {
//     const NUM1 = parseFloat(input1);

//     rl.question('Ingrese el segundo número: ', (input2) => {
//         const NUM2 = parseFloat(input2);

//         // Suma
//         const resultadoSuma = operaciones.sumar(NUM1, NUM2);
//         console.log("El resultado de la Suma es: ", resultadoSuma);

//         // Resta
//         const resultadoResta = operaciones.restar(NUM1, NUM2);
//         console.log("El resultado de la Resta es: ", resultadoResta);

//         // Multiplicación
//         const resultadoMultiplicacion = operaciones.multiplicar(NUM1, NUM2);
//         console.log("El resultado de la Multiplicacion es: ", resultadoMultiplicacion);

//         // División
//         const resultadoDivision = operaciones.dividir(NUM1, NUM2);
//         console.log("El resultado de la Division es: ", resultadoDivision);

//         rl.close();
//     });
// });



