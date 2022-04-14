let numero = 20;
let numero2 = 10;

numero += numero2;
console.log(numero);
console.log(numero2);

// Operador ternário

let idade = 20;
let podeBeber;
let naoPossuiDiabetes = true;

podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

// if abreviado

let possuiFaculdade = true;
if(possuiFaculdade)
    console.log('Sim possui');
else
    console.log('Não possui');