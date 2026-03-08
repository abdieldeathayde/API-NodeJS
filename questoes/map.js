// map cria um novo array e permite encademanto de outros métodos de array, como filter, reduce, etc. Ele é usado para transformar os elementos de um array em um novo array, aplicando uma função a cada elemento.



const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(n => n * 2);
console.log(numerosDobrados);