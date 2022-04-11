/*

length - toUpperCase - toLowerCase
classList - getElementById - querySlector
setAttribute - innerHTML

*/



let btn = document.querySelector("#btn");
let textArea = document.querySelector('#area');

function copiar() {
    textArea.select();
    document.execCommand('copy');
}

btn.addEventListener('click', copiar);