//Ejercicio 2

const categorias = {
    Telefonos: {
        Productos: [{
            producto: 'Iphone X',
            precio: 7500
        }, {
            producto: 'Iphone 7',
            precio: 3500
        }, {
            producto: 'Samsung Galaxy J2',
            precio: 1500
        }, {
            producto: 'Redmi Not 8 Pro',
            precio: 2500
        }]
    },
    Computadoras: {
        Productos: [{
            producto: 'Samsung',
            precio: 8000
        }, {
            producto: 'Dell',
            precio: 6000
        }, {
            producto: 'Asus',
            precio: 10500
        }, {
            producto: 'Hp',
            precio: 3000
        }]
    }
}

const {
    Computadoras,
    Telefonos
} = categorias;


let valor2 = 0;
var totalByCategory = (objeto, categoria) => {
    let valor =0;
    if (categoria == 'Computadoras') {

        valor = Computadoras.Productos.reduce((prectotal, comp) => {
            return prectotal + comp.precio;
        }, 0);
        console.log('El total es: ' + valor);
        valor2 = valor;
        return Computadoras;
    }
    if (categoria == 'Telefonos') {

        valor = Telefonos.Productos.reduce((prectotal, comp) => {
            return prectotal + comp.precio;
        }, 0);
        console.log('El total es: ' + valor);
        valor2 = valor;
        return Telefonos;
    }
}


document.getElementById("boton").onclick = () => {
    var html = '';
    var input = document.getElementById('selec').value;
    var contenedor = document.getElementById('precios');
    var arreglo = totalByCategory(categorias, input);

    arreglo.Productos.forEach(arr => {
        html += `<p>${arr.producto} - ${arr.precio}</p>`;
    });
    html += `<h3> Precio total: ${valor2}</h3>`
    contenedor.innerHTML = html;
};