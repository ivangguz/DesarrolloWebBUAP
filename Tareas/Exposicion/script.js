function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Error: División por cero";
            break;
        case "modulus":
            result = num2 !== 0 ? num1 % num2 : "Error: División por cero";
            break;
        default:
            result = "Seleccione una operación";
    }

    document.getElementById("result").innerText = `Resultado: ${result}`;
}

function calculateBasic() {
    const num = parseFloat(document.getElementById("basicNum").value);
    const func = document.getElementById("basicFunction").value;
    let result;

    switch (func) {
        case "abs":
            result = Math.abs(num);
            break;
        case "floor":
            result = Math.floor(num);
            break;
        case "ceil":
            result = Math.ceil(num);
            break;
        case "round":
            result = Math.round(num);
            break;
        case "sqrt":
            result = Math.sqrt(num);
            break;
        case "cbrt":
            result = Math.cbrt(num);
            break;
        default:
            result = "Seleccione una función";
    }

    document.getElementById("basicResult").innerText = `Resultado: ${result}`;
}

function calculateTrig() {
    const angle = parseFloat(document.getElementById("trigNum").value);
    const func = document.getElementById("trigFunction").value;
    let result;

    switch (func) {
        case "sin":
            result = Math.sin(angle);
            break;
        case "cos":
            result = Math.cos(angle);
            break;
        case "tan":
            result = Math.tan(angle);
            break;
        case "asin":
            result = Math.asin(angle);
            break;
        case "acos":
            result = Math.acos(angle);
            break;
        case "atan":
            result = Math.atan(angle);
            break;
        default:
            result = "Seleccione una función";
    }

    document.getElementById("trigResult").innerText = `Resultado: ${result}`;
}

function calculateLog() {
    const num = parseFloat(document.getElementById("logNum").value);
    const func = document.getElementById("logFunction").value;
    let result;

    switch (func) {
        case "exp":
            result = Math.exp(num);
            break;
        case "log":
            result = Math.log(num);
            break;
        case "log10":
            result = Math.log10(num);
            break;
        case "log2":
            result = Math.log2(num);
            break;
        default:
            result = "Seleccione una función";
    }

    document.getElementById("logResult").innerText = `Resultado: ${result}`;
}

// Métodos de Instancia del Objeto Number
function calculateNumberInstance() {
    // Obtiene el número ingresado en el campo de entrada
    const num = parseFloat(document.getElementById("numberInstance").value);
    // Obtiene el método seleccionado del menú desplegable
    const method = document.getElementById("instanceMethod").value;
    let result; // Variable para almacenar el resultado

    // Evaluar el método seleccionado y calcular el resultado correspondiente
    switch (method) {
        case "toFixed":
            result = num.toFixed(2); // Formatea el número con 2 decimales
            break;
        case "toExponential":
            result = num.toExponential(2); // Representa el número en notación exponencial con 2 decimales
            break;
        case "toPrecision":
            result = num.toPrecision(4); // Formatea el número para mostrar 4 dígitos significativos
            break;
        case "toString":
            result = num.toString(); // Convierte el número a una cadena
            break;
        case "valueOf":
            result = num.valueOf(); // Devuelve el valor primitivo del número
            break;
        case "toLocaleString":
            result = num.toLocaleString(); // Convierte el número a una cadena con formato local
            break;
        default:
            result = "Seleccione un método"; // Mensaje de error si no se selecciona un método
    }

    // Muestra el resultado en el elemento HTML correspondiente
    document.getElementById("instanceResult").innerText = `Resultado: ${result}`;
}

// Métodos Estáticos del Objeto Number
function calculateNumberStatic() {
    // Obtiene el valor ingresado en el campo de entrada
    const value = document.getElementById("staticValue").value;
    // Obtiene el método estático seleccionado del menú desplegable
    const method = document.getElementById("staticMethod").value;
    let result; // Variable para almacenar el resultado

    // Evaluar el método estático seleccionado y calcular el resultado correspondiente
    switch (method) {
        case "isFinite":
            result = Number.isFinite(value); // Verifica si el valor es un número finito
            break;
        case "isInteger":
            result = Number.isInteger(parseFloat(value)); // Verifica si el valor es un número entero
            break;
        case "isNaN":
            result = Number.isNaN(value); // Verifica si el valor es NaN (Not-a-Number)
            break;
        case "isSafeInteger":
            result = Number.isSafeInteger(parseFloat(value)); // Verifica si el valor es un número entero seguro
            break;
        case "parseFloat":
            result = Number.parseFloat(value); // Convierte la cadena en un número de punto flotante
            break;
        case "parseInt":
            result = Number.parseInt(value, 10); // Convierte la cadena en un número entero (base 10)
            break;
        default:
            result = "Seleccione un método estático"; // Mensaje de error si no se selecciona un método
    }

    // Muestra el resultado en el elemento HTML correspondiente
    document.getElementById("staticResult").innerText = `Resultado: ${result}`;
}
