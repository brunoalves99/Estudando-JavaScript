let nome = "André";

let nomeMinusculo = nome.toLowerCase();

let btn = document.querySelector("#btn");


let textArea = document.querySelector('#area');

function copiar() {
    textArea.select();
    document.execCommand('copy');
}

btn.addEventListener('click', copiar);

