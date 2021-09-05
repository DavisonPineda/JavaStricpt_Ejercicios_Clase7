let labanda = ["Diana", "Monica", "Maria", "Breny"];

// inciso 1
var contenedor = document.getElementById('resultado');
var html = '';
labanda.forEach(element => {
    html += `<li>${element}</li>`;
});
contenedor.innerHTML = `<ol>${html}</ol>`

//inciso 2
var labanda2 = labanda.filter(item => {
    return item !== 'Monica';
});
console.log(labanda2);

//inciso 3
labanda2.splice(2, 2);
console.log(labanda2);

//inciso 4
labanda2.splice(0, 0, 'José');
console.log(labanda2);

//inciso 5
labanda2.splice(3, 0, 'Davison');
console.log(labanda2);

//inciso 6
const diana = labanda2.find(element => {
    return element === 'Diana';
});
console.log(diana);

//inciso 7
var nuevaBanda = labanda.slice(1, 3);
console.log(nuevaBanda);

//inciso 8
let indice = () => {
    return nuevaBanda.indexOf('Monica');
}
console.log('Index:   ' + indice());