let copa = [1959, 1962, 1970, 1994, 2002];

for(let i = 0; i < copa.length; i++) {
    console.log(`O Brasil ganhou a copa de ${copa[i]}`);
}

let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let f = 0; f < frutas.length; f++) {
    console.log(frutas[f]);
    if(frutas[f] === 'Pera') {
        break;
    }
}

let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
console.log(frutas);