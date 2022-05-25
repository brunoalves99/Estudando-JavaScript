function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const bruno = new Pessoa('Bruno', 22);

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


const li = document.querySelector('li');

li // HTMLLIElement
li.click // Function
li.innerText // String
li.value // Number
li.hidden // boolean
li.offsetLeft // Number
li.click() // underfined


