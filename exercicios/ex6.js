function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);


function Dom(element){ 
    this.elements = document.querySelectorAll(element);
    this.adicionaClasse = function(classe) {
        this.elements.forEach((el) => {
            el.classList.add(classe);
        });
    }
    this.removerClasse = function(classe) {
        this.elements.forEach((el) => {
            el.classList.remove(classe);
        })
    }
}

const li = new Dom('li');