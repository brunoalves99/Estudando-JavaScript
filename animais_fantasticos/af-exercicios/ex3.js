// ********************** Exercicos ************************

// const linksInternos = document.querySelectorAll('a[href^="#"]');
// linksInternos.forEach((link) => {
//     link.addEventListener('click', (event) => {
//         linksInternos.forEach((l) => {
//             l.classList.remove('ativo');
//         });
//         event.preventDefault();
//         link.classList.add('ativo');
//         console.log(link);
//     });
// });


// const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event) {
//     //console.log(event.currentTarget);
//     event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento)
// });


//console.log(todosElementos);

// function hanldeClickT(event) {
//     if(event.key === "t") {
//         document.documentElement.classList.toggle('textomaior');
//     }
// }

// window.addEventListener('keydown', hanldeClickT);