let pessoa = {
    nome: "Bruno",
    sobrenome: "Saturnino",
    idade: 22,
    curso: "Ciências da Computação",
    profissao: "Programador"
}

pessoa.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(pessoa.nomeCompleto());

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
}

carro.preco = 3000;

let cachorro = {
    raca: "labrador",
    cor: "preto",
    idade: 10,
    latir(pessoa){
        if(pessoa == 'homem'){
            return 'Latir';
        } else {
            return 'Não latir';
        } 
    }
}

console.log(cachorro.latir('homem'));