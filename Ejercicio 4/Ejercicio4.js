var input = document.getElementById('array');
input.addEventListener('change', llenarArray, false);
var numeros = Array();

function llenarArray() {
    var valor = input.value;
    if (valor < 0) {
        alert('El numero ingresado debe ser positivo');
    } else {
        numeros.push(Number(valor));
        console.log('Se agregó un valor nuevo al array ' + numeros);
    }
}

function mostrar() {
    var contenedor = document.getElementById('resultado');
    let total = numeros.reduce((suma, valor) => {
        return suma + valor; //
    }, 0);
    let promedio = total / numeros.length;
    console.log(`El Promedio de este arreglo es:  ${promedio}`);
    contenedor.innerHTML = `<p><b>El Promedio de este arreglo es:</b> ${promedio}</p>`
}