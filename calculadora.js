
const operaciones = {
    sumar: (num1, num2) => num1 + num2,
    restar: (num1, num2) => num1 - num2,
    multiplicar: (num1, num2) => num1 * num2,
    dividir: (num1, num2) => num1 / num2
};

let entradaActual = '';
let primerNumero = null;
let segundoNumero = null;
let operacionActual = null;

function inputNumber(numero) {
    entradaActual += numero;
    document.getElementById('display').value = entradaActual;
}

function inputOperation(operacion) {
    if (primerNumero === null) {
        primerNumero = parseFloat(entradaActual);
    } else if (entradaActual !== '') {
        segundoNumero = parseFloat(entradaActual);
        primerNumero = calcular();
    }
    entradaActual = '';
    operacionActual = operacion;
}

function clearDisplay() {
    entradaActual = '';
    primerNumero = null;
    segundoNumero = null;
    operacionActual = null;
    document.getElementById('display').value = '';
    document.getElementById('resultado').innerText = 'Resultado: ';
}

function calcular() {
    if (primerNumero !== null && operacionActual !== null) {
        segundoNumero = parseFloat(entradaActual);
        let resultado;

        switch (operacionActual) {
            case 'sumar':
                resultado = operaciones.sumar(primerNumero, segundoNumero);
                break;
            case 'restar':
                resultado = operaciones.restar(primerNumero, segundoNumero);
                break;
            case 'multiplicar':
                resultado = operaciones.multiplicar(primerNumero, segundoNumero);
                break;
            case 'dividir':
                resultado = operaciones.dividir(primerNumero, segundoNumero);
                break;
            default:
                resultado = 'Operación no válida.';
                break;
        }

        document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
        document.getElementById('display').value = resultado;
        entradaActual = resultado;
        return resultado;
    }
}



