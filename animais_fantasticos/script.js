// Seleção de Elementos
// const animais = document.getElementById('animais');
// console.log(animais);

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[1]);

// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

// const primeiraUl = document.querySelector('Ul');
// console.log(primeiraUl);

// const linkInterno = document.querySelector("[href^='#']");
// console.log(linkInterno);

// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg[1]);

// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

// gridSectionNode.forEach(function(item, index){
//     console.log(item);
// });

// const arrayGrid = Array.from(gridSectionHTML);
// arrayGrid.forEach(function(item){
//     console.log(item);
// });

// Exercicio

let todasImg = document.querySelectorAll('img');
console.log(todasImg);

let onlyImg = document.querySelectorAll('img[src^="img/img"]');
console.log(onlyImg);

let linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

let h2 = document.querySelector('.animais-descricao h2');
console.log(h2);

let todosP = document.querySelectorAll('p');
console.log(todosP);

let ultimoP = todosP[--todosP.length];
console.log(ultimoP);

// let auxP = Array.from(todosP);
// let ultimoP = auxP.pop();
// console.log(ultimoP);
