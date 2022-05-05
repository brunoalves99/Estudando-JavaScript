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