// 'use strict'

function mostrarCarro() {
    let carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();
//console.log(carro);

if(false) {
    var mes = 'Dezembro';
    console.log(mes);
}

//console.log(mes);

{
    var carro2 = 'Fusca 2';
    const ano = 2018;
}
console.log(carro2);
//console.log(ano);

var i = 50;

// for(let i = 0; i < 10; i++) {
//     console.log(`Número ${i}`);
// }

// console.log(i * 10);

// const semana = 'Sexta';
// semana = 'quinta';
// console.log(semana);

const data = {
    ano: 2018,
    mes: 'dezembro',
}

data.ano = 2019;
data.dia = 25;
