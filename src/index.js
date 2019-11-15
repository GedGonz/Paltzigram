var numeros = [400, 200, 1, -23];
var numerosMasUno = numeros.map(function(numero) {
    return numero + 1;
});

var numerosMasDos = numeros.map(n => n + 2);

console.log(numerosMasUno);
console.log(numerosMasDos);