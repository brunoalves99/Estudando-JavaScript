// ********************  Exercicios  ************************
const menu = document.querySelector('.menu'); // ex1
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

const faq2 = document.querySelector('.faq'); // ex2
const dt = faq2.querySelector('dl dt');

const dd = dt.nextElementSibling; // ex3
console.log(dd);

const animais = document.querySelector('.animais'); // ex4
const faq = document.querySelector('.faq');
faq.innerHTML = animaisClone.innerHTML;