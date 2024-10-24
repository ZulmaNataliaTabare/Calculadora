
const operaciones = {
    sumar: (num1, num2) => num1 + num2,
    restar: (num1, num2) => num1 - num2,
    multiplicar: (num1, num2) => num1 * num2,
    dividir: (num1, num2) => num1 / num2
};

function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor, ingrese números válidos.';
    } else {
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
                resultado = 'Operación no válida.';
                break;
        }
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}



// const prompt = require('prompt-sync')();
// const operaciones = require('./modulosOperaciones');

// function preguntarOperacion(num1, num2) {
//     const operacion = prompt('Elija la operación a realizar (sumar, restar, multiplicar, dividir): ').toLowerCase();
//     let resultado;

//     switch (operacion) {
//         case 'sumar':
//             resultado = operaciones.sumar(num1, num2);
//             break;
//         case 'restar':
//             resultado = operaciones.restar(num1, num2);
//             break;
//         case 'multiplicar':
//             resultado = operaciones.multiplicar(num1, num2);
//             break;
//         case 'dividir':
//             resultado = operaciones.dividir(num1, num2);
//             break;
//         default:
//             console.log('Operación no válida.');
//             return;
//     }

//     console.log(`El resultado de la operación ${operacion} es: ${resultado}`);
// }

// function iniciarCalculadora() {
//     const input1 = prompt('Ingrese el primer número: ');
//     const num1 = parseFloat(input1);

//     const input2 = prompt('Ingrese el segundo número: ');
//     const num2 = parseFloat(input2);

//     if (!isNaN(num1) && !isNaN(num2)) {
//         preguntarOperacion(num1, num2);
//     } else {
//         console.log('Entrada no válida. Por favor, ingrese números válidos.');
//     }
// }

// iniciarCalculadora();





