// ***************** Seleção de Elementos ********************
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

// *********************** Exercicio ***************************

// let todasImg = document.querySelectorAll('img');
// console.log(todasImg);

// let onlyImg = document.querySelectorAll('img[src^="img/img"]');
// console.log(onlyImg);

// let linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// let h2 = document.querySelector('.animais-descricao h2');
// console.log(h2);

// let todosP = document.querySelectorAll('p');
// console.log(todosP);

// let ultimoP = todosP[--todosP.length];
// console.log(ultimoP);

// let auxP = Array.from(todosP);
// let ultimoP = auxP.pop();
// console.log(ultimoP);

// forEach e Arrow Function

// const imgs = document.querySelectorAll('img');

// let i = 0;

// imgs.forEach(function(item, index, array){
//     console.log(array);
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item, index, array){
//     console.log(item, index, array);
// });

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//     console.log(item);
// });

// const allP = document.querySelectorAll('p');
// console.log(allP);

// allP.forEach((p) => {
//     console.log(p.innerText);
// });

// ********************* Classes e Atributos *********************************

// const menu = document.querySelector('.menu');

// menu.classList.add('ativo');
// menu.classList.remove('azul');
// //menu.classList.toggle('azul');

// if(menu.classList.contains('azul')) {
//     menu.classList.add('possui-azul');
// } else  {
//     menu.classList.add('nao-possui-azul');
// }

//menu.className = `${menu.className} inativo preto`;
//menu.className += ' vermelho';

//console.log(menu.className);

// const animais = document.querySelector('.animais');
// console.log(animais.attributes['data-texto']);

// const img = document.querySelector('img');
// const srcImg = img.getAttribute('alt');
// img.setAttribute('alt','É uma raposa');
// const possuiAlt = img.hasAttribute('alt');
// console.log(possuiAlt);

// console.log(srcImg);

// ******************* exercicios ************************
// const menuItens = document.querySelectorAll('.menu li');
// console.log(menuItens);

// menuItens.forEach((item) => {
//     item.classList.add('ativo');
// });
// console.log(menuItens);

// for(let i = 1; i <= (menuItens.length - 1); i++) {
//     menuItens[i].classList.remove('ativo');
// }
// console.log(menuItens);

// const imgs = document.querySelectorAll('img');
// console.log(imgs);
// imgs.forEach((img) => {
//     if(img.hasAttribute('alt')) {
//         console.log(`A img ${img.alt} tem o atributo alt`);
//     }
// });

// const linkExterno = document.querySelector('.menu [href^="https"]');
// console.log(linkExterno);
// linkExterno.setAttribute('href','https://www.google.com');

//**************** Dimensões e Distâncias ******************/

// const listaAnimais = document.querySelector('.animais-lista');

// const height = listaAnimais.scrollHeight;

// const animaisTop = listaAnimais.offsetTop;

// console.log(animaisTop);

// const primeiroh2 = document.querySelector('h2');
// const h2left = primeiroh2.offsetLeft;

// const h2rect = primeiroh2.getBoundingClientRect();

// console.log(h2rect.top);

// if(h2rect.top < 0) {
//     console.log('Passou do elemento');
// }

// console.log(
//     window.innerWidth,
//     window.innerHeight,
//     window.outerWidth,
//     window.outerHeight,
//     window.pageYOffset,
// );

// const small = window.matchMedia('(max-width: 600px)').matches;

// if(small) {
//     console.log('Usuário mobile');
// } else {
//     console.log('Usuário desktop');
// }

// console.log(small);

// **************** exercicios **************************

// const img = document.querySelector('img');
// const imgDistance = img.offsetTop;
// //console.log(imgDistance);


// function somaImagens() {
//     const allImgs = document.querySelectorAll('img');
//     let soma = 0;
//     allImgs.forEach((img) => {
//         //console.log(img.offsetWidth);
//         soma += img.offsetWidth;
//     });
//     console.log(soma);
// }

// window.onload = function() {
//     somaImagens();
// }

// const links = document.querySelectorAll('a');

// links.forEach((link) => {
//     const linkWidth = link.offsetWidth;
//     const linkHeight = link.offsetHeight;
//     if(linkWidth >= 48 && linkHeight >= 48) {
//         console.log(link, "Possui boa acessibilidade");
//     } else {
//         console.log(link, "Não possui boa acessibilidade");
//     }
// });

// console.log(links);

// const browserSmall = window.matchMedia('(max-width: 720px').matches;

// if(browserSmall) {
//     const menu = document.querySelector('.menu');
//     menu.classList.add('menu-mobile');
// }

// ******************** Eventos **********************

const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

//animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    //console.log(event);
    console.log(this);
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);


// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

function handleKeyboard(event) {
    if(event.key === 'f'){
        document.body.classList.toggle('azul');
    }
    console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard);