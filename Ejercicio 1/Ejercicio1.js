// Ejercicio 1


// Se extraen los numeros que el usuario ingresa uno a uno
var input = document.getElementById('array');
input.addEventListener('change', llenarArray, false);
var numeros = Array();

function llenarArray() {
    var valor = input.value;
    if(valor < 0){ alert('El numero a ingresar debe ser positivo');}
    else {
    numeros.push(Number(valor));
    alert('Se agregó el valor al array ' + numeros);}
}

// calculamos al cuadrado los numeros
var ArregloCuadrado = Array();
var calcular = (ArregloU) => {
    ArregloCuadrado = ArregloU.map(num => {
    return num * num;
    });
}

function mostrar() {
    var html = '<h3>Arreglo de numeros al cuadrado</h3>';
    calcular(numeros);
    console.log(ArregloCuadrado);
    var contenedor = document.getElementById('resultado');
    ArregloCuadrado.forEach(arr => {
        html += `<li>${arr}</li>`
    });
    contenedor.innerHTML = html;

    html = '<h3>Arreglo de numeros ingresados</h3>';
    var contenedor2 = document.getElementById('ingresado');
    numeros.forEach(arr => {
        html += `<li>${arr}</li>`
    });
    contenedor2.innerHTML = html;
}