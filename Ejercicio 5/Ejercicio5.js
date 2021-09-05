const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


var calcular = (Arreglo) => {
    var numero = document.getElementById('numero').value;
    var contenedor = document.getElementById('resultado');
    console.log(numero);

    var primernumero = (numero / 2).toFixed();
    var residuo = numero - primernumero;
    numeros.forEach(element => {
        if (element == residuo) {
            console.log(`${primernumero} + ${element} = ${numero}`);
            contenedor.innerHTML = `<p>${primernumero} + ${element} = ${numero}</p>`;
        }
    });
}


var boton = document.getElementById('boton');
boton.addEventListener('click', () => calcular(numeros));