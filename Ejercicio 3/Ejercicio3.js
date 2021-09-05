var modificar = (texto) => {
    var oracion = '';
    var palabras = texto.split(' ');
    palabras.forEach(element => {
        oracion += element[0].toUpperCase() + element.slice(1) + ' ';
    });
    return oracion;
}


document.getElementById('boton').onclick = () => {
    var contenedor = document.getElementById('resultado');
    var frase = document.getElementById('oracion').value;
    console.log(frase);
    var oracion = modificar(frase);
    console.log(oracion);
    contenedor.innerHTML = `<p><b>Oración ingresada: </b> ${frase}</p>
    <p><b>Oración modificada:</b> ${oracion}</p>`;
}