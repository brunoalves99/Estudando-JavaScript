// 1
function isTruthy(valor){
    return !!valor;
}
console.log(isTruthy(undefined));

// 2
function perimetro(valor){
    return valor * 4;
}
console.log(perimetro(4));

// 3 
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Bruno","Alves"));

// 4
function isEven(num){
    if(num % 2 == 0){
        return "É par";
    } else {
        return "Não é par";
    }
}
console.log(isEven(6));

// 5
function tipoDeDado(valor){
    return typeof valor;
}
console.log(tipoDeDado(true));

// 6
function write(){
    window.addEventListener('scroll', () => {
        console.log("Bruno Saturnino Alves");
    })
}
write();