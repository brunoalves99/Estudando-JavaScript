// const comida = 'Pizza';
// const agua = new String('Agua');

// console.log(comida.length);
//console.log(comida[0] === 'P');

const frase1 = 'A melhor comida';
//console.log(frase[frase.length - 1]);
//console.log(frase.charAt(frase.length - 1));

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';


const fraseFinal = frase.concat(linguagem, '!!');
console.log(fraseFinal);

// .includes(search, position) 
// procurar a partir de um index

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

// .startsWith(search)     .endsWith(search)

console.log(listaFrutas.includes(fruta, 14));
console.log(fruta.startsWith('Ba'));

// .slice(start, end) - corta a string de acordo
// com os valores de start e end


const transacao1 = 'Depósito de cliente';
// .slice(0, 3) retorna 'Dep'
// .slice(9) retorna 'de cliente'
// .slice(0, -9) retorna 'Depósito d'
// .slice(-5) retorna 'iente'

const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(-5));

// .substring(start, end)

// .indexOf(search)  primeiro que aparece
// .lastIndexOf(search) ultimo que aparece
console.log(fruta.lastIndexOf('a'));

// .padStart(n, string) preenche a string original com um determinado caractere
// .padEnd(n, string)

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(10, '-'));
});

// .repeat(vezes)
const frase2 = 'Ta';
frase2.repeat(5);

// .replace()

let listaItems = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItems = listaItems.replace(/[ ]+/g, ', ');

// .split() divide a string e retorna um array
const arrayLista = listaItems.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

// .toLoweCase()  e  .toUpperCase()

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino');

// .trim()  .trimStart()  .trimEnd() remove espaços
// do inicio e do final

const valor = ' R$ 23.00 ';
console.log(valor.trim());