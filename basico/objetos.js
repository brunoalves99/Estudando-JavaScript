// let pessoa = {
//     nome: "André",
//     idade: 28,
// }

// console.log(pessoa);

// let quadrado = {
//     lados: 4,
//     area(lado) {
//         return lado * lado;
//     },
//     perimetro(lado) {
//         return this.lados * lado;
//     },
//     cinco() {
//         return 5;
//     }
// }

// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));

// console.log(Math.random());

let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height / 2;
    }
}

menu.backgroundColor = "#000";

menu.color = "blue";
menu.esconder = function(){
    console.log("Esconder");
}

let bg = menu.backgroundColor;






