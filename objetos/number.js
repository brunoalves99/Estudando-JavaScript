// Number.isNaN()  e  Number.isInteger()
console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10));

// Number.parseFloat()  e  Number.parseInt()
console.log(parseFloat('34343.434'));
console.log(parseInt('100.27'));

// .toFixed(casas decimais) - arredonda

const preco = 10.32323;
console.log(+preco.toFixed(1));

// .toString() - transforma o número em uma string

// .toLocaleString(lang, options)

let valor = 48.49;
valor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
console.log(valor);

// Math

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(`Número Aleatorio: ${aleatorio}`);