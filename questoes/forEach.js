// apenas exibe os dados, não cria um novo array. Ele é usado para executar uma função em cada elemento de um array, mas não retorna um novo array. O forEach é útil para realizar operações que não envolvem a criação de um novo array, como exibir os elementos no console ou modificar os elementos existentes.

const numeros = [1, 2, 3, 4, 5];
numeros.forEach(n => console.log(n));