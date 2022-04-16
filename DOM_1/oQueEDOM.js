//window.alert("Hello World");

const href = window.location.href;

console.log(href);

if(href === "http://127.0.0.1:5500/DOM_1/index.html") {
    console.log("É igual");
}

let h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado);
h1Selecionado.innerText = "Mudou!";

//alert("Teste");

function callbackh1() {
    console.log('Clicou em ', h1Selecionado);
}

const h1Classes = h1Selecionado.classList;
h1Selecionado.addEventListener('click', callbackh1);