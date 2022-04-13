let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

//let ultimoItem = videoGames.pop();

//videoGames.push('3DS');

// for(let numero = 0; numero < 10; numero++) {
//     console.log(numero);
// }

// let i = 0;
// while(i < 100) {
//     console.log(i);
//     i = i + 5;
// }

for(let item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === "PS4"){
        break;
    }
}

let frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array){
    frutas.pop();
    console.log(fruta, index, array);
});